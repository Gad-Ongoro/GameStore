import React, { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function PS(){
    const [thumbNail, setThumbNail] = useState(`https://gmedia.playstation.com/is/image/SIEPDC/dualsense-deep-earth-collection-background-block-desktop-01-en-11sep23?$1600px$`);
    const [PlayStations, setPlayStations] = useState([]);

    const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
			slidesToSlide: 2
		  },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    //GET PS
    useEffect(()=>{
        fetch("https://carshop-edbk.onrender.com/ps")
        .then(res => res.json())
        .then((pss) => {
            // setPlayStations((currentPss) => ([...currentPss, pss]))
            setPlayStations(pss)
        })
    }, []);

    let psCard = PlayStations.map((ps) => {
        return(
            <div
            key={ps.id} 
            className="slide"
            // onClick={(e)=>{
            //     setThumbNail(ps.thumbnail);
            // }}
            >
                <img src={ps.image} alt="NA"></img>
                <div className="ps-card-info">
                    {/* <p>{ps.name}</p> */}
                    <p className="text-white">{ps.price}$</p>
                </div>
            </div>
        );
    })
    
    return(
        <>
            <img src={thumbNail} className="display-img" alt="NA"></img>

            <div className="carsel container text-center">
				<div className="slides-container">
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all 1s"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        { psCard }
                    </Carousel>
				</div>
			</div>
        </>
    );
};

export default PS;