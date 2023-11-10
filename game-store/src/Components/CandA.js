import React, {useRef, useEffect, useState} from "react";

function CandA(){
    const [thumbNail, setThumbNail] = useState(`https://gmedia.playstation.com/is/image/SIEPDC/dualsense-deep-earth-collection-background-block-desktop-01-en-11sep23?$1600px$`);
    const [CandAs, setCandAs] = useState([]);
    
    let carouselTrack = useRef();
    let leftBtn = useRef();
    let rightBtn = useRef();
    let currentSlide = useRef();

    //GET CandA
    useEffect(()=>{
        fetch("https://carshop-edbk.onrender.com/CandA")
        .then(res => res.json())
        .then((accessories) => {
            // setPlayStations((currentPss) => ([...currentPss, pss]))
            setCandAs(accessories)
        })
    }, []);

    let psCard = CandAs.map((accessory) => {
        return(
            <div
            key={accessory.id} 
            className="slide"
            onClick={(e)=>{
                setThumbNail(accessory.thumbnail);
            }}>
                <img src={accessory.image}></img>
                <div className="accessory-card-info">
                    {/* <p>{accessory.name}</p> */}
                    <p>{accessory.price}$</p>
                </div>
            </div>
        );
    })

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

    return(
        <>
            <img src={thumbNail} className="display-img" alt="NA"></img>
            <div className="carousel">
                <img ref={leftBtn} src="https://cdn-icons-png.flaticon.com/128/3148/3148350.png" className="left-carousel-btn" onClick={slideRight}></img>
                <div ref={carouselTrack} className="slides-container track">
                    {/* <div ref={currentSlide} className="slide active-slide">
                        <img src="https://media.gamestop.com/i/gamestop/20006017/Marvels-Spider-Man-2---PlayStation-5?$pdp2x$$&fmt=webp"></img>
                    </div>*/}
                    {psCard}

                </div>
                <img ref={rightBtn} src="https://cdn-icons-png.flaticon.com/128/3148/3148350.png" className="right-carousel-btn" onClick={slideLeft}></img>
            </div>
        </>
    );
};

export default CandA;

// setThumbNail