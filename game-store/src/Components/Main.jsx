import React, { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./Main.css";
import Games from "./Games";
import PS from "./PS";
import CandA from "./CandA";
import Header from "./Header";
import { gameStoreContext } from "../App";
import { FaPlay } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

function Main({cart, setCart}){    
    const [games, setGames] = useState([]);
    const [thumbNail, setThumbNail] = useState(`https://image.api.playstation.com/vulcan/ap/rnd/202109/1321/3GEdKTGktTBsZ8Sj9yIWnr2f.jpg?w=940&thumb=false`);
    const [postFormData, setPostFormData] = useState({image:``, thumbnail:``});

    let {showForm, setShowForm} = useContext(gameStoreContext);

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

    //JSX
    return(
        <main>
            <Header />
            <div className="active-div">
                <img src={thumbNail} className="display-img" alt="NA"></img>    
                <div className="active-game-info" onClick={cartAdder}>
                    {/* <img src="https://gado.w3spaces.com/Img/SpiderMan2.png" alt="NA"></img> */}
                    <div className="game-options m-2 grid gap-2 grid-cols-12">
                        <div 
                            className="buy-game col-span-5 flex justify-center items-center gap-2"
                        >
                            <TiShoppingCart className='text-pink-600 bg-transparent' size={25}/>
                            <p className='text-white'>Buy Game</p>
                        </div>
                        <div className="trailer col-span-5">
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" 
                                className="flex justify-center items-center gap-2">
                                <FaPlay className='text-pink-600 bg-transparent'/>
                                <p className='text-white'>See Trailer</p>
                            </a>
                        </div>
                        <div className="add-fav">
                            <img src={`https://cdn-icons-png.flaticon.com/128/10452/10452972.png`} alt="NA"></img>
                        </div>
                    </div>
                </div>

                <Routes>
                    <Route path="/" exact element={<Games games={games} ></Games>}></Route>
                    <Route path="/games" exact element={<Games games={games}></Games>}></Route>
                    <Route path="/ps" exact element={<PS games={games} ></PS>}></Route>
                    <Route path="/consolesandaccessories" exact element={<CandA games={games}></CandA>}></Route>
                    <Route path='/services' exact element={<div></div>}></Route>
                </Routes>

                {showForm && 
                    <div className="post-lister-form">
                        <div className="form-div">
                            <form onSubmit={postHandler}>
                                <input type="text" placeholder="(POST)Image URL here..." name="image" onChange={postListerInputHandler} required></input>
                                <br></br>
                                <input type="text" placeholder="ThumbNail URL here..." name="thumbnail" onChange={postListerInputHandler} required></input>
                                <br></br>
                                <input type="submit"></input>
                                <br></br>
                                <button type="button" onClick={handlePoster}>HIDE</button>
                            </form>
                        </div>
                    </div>
                }

            </div>
        </main>
    );
}
export default Main;
// setThumb