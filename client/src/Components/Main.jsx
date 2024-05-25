import React, { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./Main.css";
import Games from "./Games";
import PS from "./PS";
import CandA from "./CandA";
// import Nav from "./Navs";
import { gameStoreContext } from "../App";

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
            <div className="active-div">
                <img src={thumbNail} className="display-img" alt="NA"></img>    
                <div className="active-game-info" onClick={cartAdder}>
                    {/* <img src="https://gado.w3spaces.com/Img/SpiderMan2.png" alt="NA"></img> */}
                    <div className="game-options">
                        <div className="buy-game">
                            <img src={`https://cdn-icons-png.flaticon.com/128/12299/12299265.png`} alt="NA"></img>
                            <p>BUY GAME</p>
                        </div>
                        <div className="trailer">
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                <img src={`https://cdn-icons-png.flaticon.com/128/3642/3642032.png`} alt="NA"></img>
                                <p>SEE TRAILER</p>
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