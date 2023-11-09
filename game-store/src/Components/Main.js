import React, {useRef, useEffect, useState} from "react";
import "./Main.css";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers";

function Main(){    
    const [games, setGames] = useState([]);
    const [thumbNail, setThumbNail] = useState(`https://gmedia.playstation.com/is/image/SIEPDC/dualsense-deep-earth-collection-background-block-desktop-01-en-11sep23?$1600px$`);
    const [postFormData, setPostFormData] = useState({image:``, thumbnail:``});

    let carouselTrack = useRef();
    let leftBtn = useRef();
    let rightBtn = useRef();
    let currentSlide = useRef();

    //GET games from API
    useEffect(()=>{
        fetch("https://carshop-edbk.onrender.com/games")
        .then(res => res.json())
        .then(games => {
            setGames(games);
        })
    }, [])

    //POST
    function postHandler(e){
        e.preventDefault();
        fetch(`https://carshop-edbk.onrender.com/games`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postFormData)
        }).then(res => res.json())
        .then((newGame) => {
            setGames([...games, newGame]);
        });
    };

    //create each game card
    let gamesDiv = games.map(game => {
        return(
            <div
            key={game.id} 
            className="slide"
            onClick={(e)=>{
                setThumbNail(game.thumbnail);
            }}>
                <img src={game.image}></img>
            </div>
        )
    })

    //event listeners
    function postListerInputHandler(e){
        let name = e.target.name;
        let value = e.target.value;
        setPostFormData({...postFormData, [name]:value});
        console.log(postFormData);
    }


    function slideLeft(e){
        let carTrack = carouselTrack.current;
        carTrack.style.cssText = `
        transform: translateX(${-1100}px);`;
    }
    function slideRight(e){
        let carTrack = carouselTrack.current;
        carTrack.style.cssText = `
        transform: translateX(${50}px);`;
    };

    //JSX
    return(
        <main>
            <div className="active-div">
                <img src={thumbNail} id="display-img" alt="NA"></img>
    
                <div className="active-game-info">
                    {/* <img src="https://gado.w3spaces.com/Img/SpiderMan2.png" alt="NA"></img> */}
                    <div className="game-options">
                        <div className="buy-game">
                            <img src={`https://cdn-icons-png.flaticon.com/128/12299/12299265.png`}></img>
                            <p>BUY GAME</p>
                        </div>
                        <div className="trailer">
                            <img src={`https://cdn-icons-png.flaticon.com/128/3642/3642032.png`}></img>
                            <p>SEE TRAILER</p>
                        </div>
                        <div className="add-fav">
                            <img src={`https://cdn-icons-png.flaticon.com/128/10452/10452972.png`}></img>
                        </div>
                    </div>
                </div>
    
                <div className="carousel">
                        <img ref={leftBtn} src="https://cdn-icons-png.flaticon.com/128/3148/3148350.png" className="left-carousel-btn" onClick={slideRight}></img>
                        <div ref={carouselTrack} className="slides-container track">
                            {/* <div ref={currentSlide} className="slide active-slide">
                                <img src="https://media.gamestop.com/i/gamestop/20006017/Marvels-Spider-Man-2---PlayStation-5?$pdp2x$$&fmt=webp"></img>
                            </div>                             */}
                            {gamesDiv}

                        </div>
                        <img ref={rightBtn} src="https://cdn-icons-png.flaticon.com/128/3148/3148350.png" className="right-carousel-btn" onClick={slideLeft}></img>
                </div>

                <div className="post-lister-form">
                    <div className="form-div">
                        <form onSubmit={postHandler}>
                            <input type="text" placeholder="Image URL here..." name="image" onChange={postListerInputHandler} required></input>
                            <input type="text" placeholder="ThumbNail URL here..." name="thumbnail" onChange={postListerInputHandler} required></input>
                            <input type="submit"></input>
                        </form>
                    </div>
                </div>
    
            </div>
        </main>
    );
}
export default Main;
// class