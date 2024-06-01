import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Navs(){
    return(
        <>
            <div className="header-bottom-wrapper1 d-none d-lg-block">
                <div className="header-bottom-wrapper">
                    <NavLink to="/games" className={"header-nav font-bold text-gray-700 text-sm"}>GAMES</NavLink>
                    <NavLink to="/ps" className={"header-nav font-bold text-gray-700 text-sm"}>PS</NavLink>
                    <NavLink to="/xbox" className={"header-nav font-bold text-gray-700 text-sm"}>XBOX</NavLink>
                    <NavLink to="/nintendo" className={"header-nav font-bold text-gray-700 text-sm"}>NINTENDO</NavLink>
                    <NavLink to="/consolesandaccessories" className={"header-nav font-bold text-gray-700 text-sm"}>CONSOLES & ACCESSORIES</NavLink>
                    <NavLink to="/coins" className={"header-nav font-bold text-gray-700 text-sm"}>COINS</NavLink>
                    <NavLink to="/services" className={"header-nav font-bold text-gray-700 text-sm"}>SERVICES</NavLink>
                </div>
            </div>
        </>
    );
};

export default Navs;