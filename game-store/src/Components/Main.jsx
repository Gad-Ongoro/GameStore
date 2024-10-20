import React, { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AnimatedXPage from "./AnimatedXPage";
import "./Main.css";
import Games from "./Games";
import PS from "./PS";
import CandA from "./CandA";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";
import { gameStoreContext } from "../App";
import { FaPlay } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useAppContext } from "../services/utilities";

function Main({cart, setCart}){
	const [games, setGames] = useState([]);
	const [thumbNail, setThumbNail] = useState(`https://image.api.playstation.com/vulcan/ap/rnd/202109/1321/3GEdKTGktTBsZ8Sj9yIWnr2f.jpg?w=940&thumb=false`);
	const [postFormData, setPostFormData] = useState({image:``, thumbnail:``});

	let {showForm, setShowForm} = useContext(gameStoreContext);
    //POST
    function postHandler(e){
        e.preventDefault();
        fetch(`https://json-server-7gsy.onrender.com/games`, {
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

    //event listeners
    function postListerInputHandler(e){
        let name = e.target.name;
        let value = e.target.value;
        setPostFormData({...postFormData, [name]:value});
        console.log(postFormData);
    }

    function cartAdder(e){
        setCart((current) => ++current);
        //console.log(e);
    };

    // Hide form on Submit
    function handlePoster(e){
      setShowForm(current => !current)
    };

  // JSX
  return(
    <main>
			<Header></Header>
      <AnimatedXPage>
        
				<div className="active-div">
					{/* <img src={thumbNail} className="display-img" alt="NA"></img> */}
					<Routes>
						<Route path="/" exact element={<Games games={games} ></Games>}></Route>
						<Route path="/games" exact element={<Games games={games}></Games>}></Route>
						<Route path="/ps" exact element={<PS></PS>}></Route>
						<Route path="/consolesandaccessories" exact element={<CandA></CandA>}></Route>
						<Route path='/services' exact element={<div></div>}></Route>
						<Route path="/cart" exact element={<Cart></Cart>}></Route>
					</Routes>
				</div>
				<Footer></Footer>
      </AnimatedXPage>
    </main>
  );
}
export default Main;