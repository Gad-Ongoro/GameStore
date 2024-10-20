import React, { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useAppContext } from "../services/utilities";
import GamesList from "./GamesList";

function PS() {
	const { playStations, fetchPlayStations } = useAppContext();
	const [thumbNail, setThumbNail] = useState(`https://gmedia.playstation.com/is/image/SIEPDC/dualsense-deep-earth-collection-background-block-desktop-01-en-11sep23?$1600px$`);

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
	useEffect(() => {
		fetchPlayStations();
	}, []);

	let psCard = playStations.map(ps => {
		return(
			<div
				key={ps.id} 
				className="mt-4 rounded-lg"
				onClick={(e)=>{
					setThumbNail(ps.thumbnail);
				}}
			>
				<img src={ps.image} className="w-60 h-60 rounded-lg" alt="NA"></img>
			</div>
		);
	})

	return (
		<>
			<img src={thumbNail} className="display-img" alt="NA"></img>

			<div className="text-center">
				<div className="">
					<Carousel
						swipeable={false}
						draggable={false}
						showDots={false}
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
						{psCard}
					</Carousel>
				</div>
				<GamesList games={playStations}></GamesList>
			</div>
		</>
	);
};

export default PS;