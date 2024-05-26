import React, { useRef, useContext } from "react";
import "./Header.css";
import Navs from "./Navs";
import { gameStoreContext } from "../App";

function Header({handleSubmit, cart}){
    const poster = useRef();

    let {showForm, setShowForm} = useContext(gameStoreContext);

    //Events
    function handlePoster(e){
        setShowForm(current => !current)
    };

    return(
        <>
            <header>
                <div className="header-top-wrapper">
                    <div className="header-wrapper1">

                        <div className="logo">
                            <p>G<img src="https://gado.w3spaces.com/Img/logo.png" alt="NA"></img>e<span id="store">Store</span></p>
                        </div>

                        <div className="searcher">
                            <form className="header-form" onSubmit={handleSubmit}>
                                <select name="NA" id="e-s-s">
                                    <option value="All">All</option>
                                    <option value="Games">Games</option>
                                </select>
                                <input type="text" placeholder="Search entire store..."></input>
                                <input type="submit" value="Search" id="s-s-btn"></input>
                            </form>
                        </div>

                    </div>

                    <div className="header-wrapper2">

                        <div className="currency">
                            <form action="#">
                                <label htmlFor="currency">Currency: </label>
                                <select name="currency" id="currency">
                                    <option value="USD">USD</option>
                                    <option value="pound">£/GBP</option>
                                    <option value="Dirham">AED</option>
                                    <option value="Ksh">Ksh</option>
                                </select>
                            </form>
                        </div>

                        <div className="account">
                                <img src="https://i.pinimg.com/474x/00/11/10/0011107dd573cbf4d69defbc2dea0f28.jpg" alt="NA"></img>
                                <div className="user-account">
                                    <h5 className="p-0 m-0">Account</h5>
                                    <div className="user-account-options">
                                        <ul className="user-account-options-ul">
                                            <li>Settings</li>
                                            <li ref={poster} onClick={handlePoster}>Post</li>
                                            <li>Login</li>
                                            <li>Sign Out</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>

                        <div className="cart">
                            <img src="https://cdn-icons-png.flaticon.com/128/12299/12299265.png" alt="NA" className="cart-image"></img>
                            <div className="cart-number">{cart}</div>
                        </div>
                    </div>
                </div>
                <Navs></Navs>

            </header>
        </>
    )

};
// export default Header;