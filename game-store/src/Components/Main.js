import React, {useRef, useEffect, useState} from "react";

function Main(){    
    const [games, setGames] = useState([]);

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

    //create each game card
    let gamesDiv = games.map(game => {
        return(
            <div key={game.id} className="slide">
                <img src={game.image}></img>
            </div>
        )
    })

    //event listeners
    // rightBtn.current.addEventListener("click", (e)=> {        
    //     let nextSlide1 = currentSlide.current.nextElementSibling;
    //     let amountToMove = nextSlide1.getBoundingClientRect().left;
    //     carouselTrack.current.style.cssText = `
    //     transform: translateX(${-1000}px);
    //     `;

    //     currentSlide.current.classList.remove("active-slide");
    //     nextSlide1.classList.add("active-slide");
    // });
    // leftBtn.current.addEventListener("click", (e)=> {
    //     let prevSlide1 = currentSlide.current.previousElementSibling;
    //     // let amountToMove = prevSlide1.getBoundingClientRect().left;
    //     let amountToMove = 200;
    //     // let amountToMove = prevSlide1.style.left;
    //     carouselTrack.current.style.cssText = `
    //     transform: translateX(${amountToMove}px);
    //     `;

    //     // currentSlide.current.classList.remove("active-slide");
    //     // prevSlide1.classList.add("active-slide");        
    // });


    //console.log(currentSlide.nextElementSibling);

    //JSX
    return(
        <main>
            <div className="active-div">
                <img src="https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-hero-banner-desktop-07-en-16oct23?$1600px$" id="display-img" alt="NA"></img>
    
                <div className="active-game-info">
                    <img src="https://gado.w3spaces.com/Img/SpiderMan2.png" alt="NA"></img>
                    <div className="game-options">
                        {/* <div className="buy-game">Buy Game</div>
                        <div className="trailer">See Trailer</div>
                        <div className="add-fav">Favourite</div> */}
                    </div>
                </div>
    
                <div className="carousel">
                        <img ref={leftBtn} src="https://cdn-icons-png.flaticon.com/128/9590/9590006.png" className="left-carousel-btn"></img>
                        <div ref={carouselTrack} className="slides-container track">
                            <div ref={currentSlide} className="slide active-slide">
                                <img src="https://media.gamestop.com/i/gamestop/20006017/Marvels-Spider-Man-2---PlayStation-5?$pdp2x$$&fmt=webp"></img>
                            </div>                            
                            {gamesDiv}

                        </div>
                        <img ref={rightBtn} src="https://cdn-icons-png.flaticon.com/128/9590/9590006.png" className="right-carousel-btn"></img>
                </div>
    
            </div>
        </main>
    );
}
export default Main;
// class