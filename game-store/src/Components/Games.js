import React, {useRef, useState} from "react";

function Games({games}){
    const [thumbNail, setThumbNail] = useState(`https://gmedia.playstation.com/is/image/SIEPDC/dualsense-deep-earth-collection-background-block-desktop-01-en-11sep23?$1600px$`);
    
    let carouselTrack = useRef();
    let leftBtn = useRef();
    let rightBtn = useRef();
    // let currentSlide = useRef();

    //Events
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

    //create each game card
    let gamesDiv = games.map(game => {
        return(
            <div
            key={game.id} 
            className="slide"
            onClick={(e)=>{
                setThumbNail(game.thumbnail);
            }}>
                <img src={game.image} alt="NA"></img>
                <div className="game-card-info">
                    <p>
                        <span>{game.name}</span>
                        <span>{game.price}$</span>
                    </p>
                </div>
            </div>
        );
    })
    return(
        <>
            <img src={thumbNail} className="display-img" alt="NA"></img>
            <div className="carousel">
                <img ref={leftBtn} src="https://cdn-icons-png.flaticon.com/128/3148/3148350.png" className="left-carousel-btn" onClick={slideRight} alt="LEFT"></img>
                <div ref={carouselTrack} className="slides-container track">
                    {/* <div ref={currentSlide} className="slide active-slide">
                        <img src="https://media.gamestop.com/i/gamestop/20006017/Marvels-Spider-Man-2---PlayStation-5?$pdp2x$$&fmt=webp"></img>
                    </div>*/}
                    {gamesDiv}

                </div>
                <img ref={rightBtn} src="https://cdn-icons-png.flaticon.com/128/3148/3148350.png" className="right-carousel-btn" onClick={slideLeft} alt="RIGHT"></img>
            </div>
        </>
    );
};

export default Games;

// setThumbNail