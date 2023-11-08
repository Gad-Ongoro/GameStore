import React from "react";

function Footer(){
    return(
        <footer>
            <div className="footer-logo">
                <div className="logo">
                    <p>G<img src="https://gado.w3spaces.com/Img/logo.png" alt="NA"></img>e<span id="store">Store</span></p>
                </div>
            </div>

            <div className="footer-content">
                <div className="about">
                    <h4>ABOUT</h4>
                    Play Has No Limits
                </div>

                <div className="consoles">
                    <h4>CONSOLES</h4>
                    <ul className="footer-consoles">
                        <li>Pre Order</li>
                        <li>PS4</li>
                        <li>Xbox One</li>
                        <li>New Releases</li>
                        <li>Best Sellers</li>
                        <li>Prepaid Cards</li>
                        <li>Consoles & Accessories</li>
                    </ul>
                </div>

                <div className="links">
                    <h4>LINKS</h4>
                    <ul className="footer-consoles">
                        <li>Help</li>
                        <li>FAQ's</li>
                        <li>Contact</li>
                        <li>Account</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="services">
                    <h4>SERVICES</h4>
                    <ul className="footer-consoles">
                        <li>Console Repairs</li>
                        <li>PC Repairs</li>
                        <li>Dual Shock Repairs</li>
                        <li>PC Repairs</li>
                        <li>e-Gaming</li>
                    </ul>
                </div>
            </div>

            <div className="rights-and-paymentOpts">
                <div className="rights">
                    <p>GameStore &copy; 2020 - Present | All Rights Reserved</p>
                </div>
                <div className="paymentOps">
                    <img src={"https://gado.w3spaces.com/Img/PaymentOpt.png"} alt="NA"></img>
                </div>
            </div>
        </footer>
    )
}
export default Footer;