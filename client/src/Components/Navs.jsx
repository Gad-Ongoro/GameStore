import React from "react";
import { NavLink } from "react-router-dom";

function Nav(){
    return(
        <>
            <div className="header-bottom-wrapper1">
                <div className="header-bottom-wrapper">
                    <NavLink to="/games" className={"header-nav"}>GAMES</NavLink>
                    <NavLink to="/ps" className={"header-nav"}>PS</NavLink>
                    <NavLink to="/xbox" className={"header-nav"}>XBOX</NavLink>
                    <NavLink to="/nintendo" className={"header-nav"}>NINTENDO</NavLink>
                    <NavLink to="/consolesandaccessories" className={"header-nav"}>CONSOLES & ACCESSORIES</NavLink>
                    <NavLink to="/coins" className={"header-nav"}>COINS</NavLink>
                    <NavLink to="/services" className={"header-nav"}>SERVICES</NavLink>
                </div>
            </div>
        </>
    );
};

export default Nav;