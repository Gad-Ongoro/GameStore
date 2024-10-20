import React from "react";

function Footer(){
  return(
    <footer className="flex flex-col bg-blue-950">
      <div className="flex justify-center items-center lg:flex-1">
				<a href="/" className="-m-1.5 p-1.5">
					<span className="sr-only">GameStore</span>
					<div className="text-center">
						<p className="text-3xl font-bold flex text-center justify-center items-center"><span className='text-sky-600'>G</span>
							<img 
								src="/assets/gamestore_logo.png"
								className="w-14 h-10 object-cover p-0 m-0"
								alt="NA">
							</img><span className='text-sky-600'>e</span><span className="text-pink-600">Store</span>
						</p>
					</div>
				</a>
			</div>

			<div className="footer-content">
				<div className="about">
					<h4 className="text-pink-500 hover:text-pink-600 font-bold cursor-pointer">ABOUT</h4>
					<p className="text-gray-300">Play Has No Limits</p>
				</div>

				<div className="consoles">
					<h4 className="text-pink-500 hover:text-pink-600 font-bold cursor-pointer">CONSOLES</h4>
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
					<h4 className="text-pink-500 hover:text-pink-600 font-bold cursor-pointer">LINKS</h4>
					<ul className="footer-consoles">
						<li>Help</li>
						<li>FAQ's</li>
						<li>Contact</li>
						<li>Account</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
				<div className="services">
					<h4 className="text-pink-500 hover:text-pink-600 font-bold cursor-pointer">SERVICES</h4>
					<ul className="footer-consoles">
						<li>Console Repairs</li>
						<li>PC Repairs</li>
						<li>Dual Shock Repairs</li>
						<li>PC Repairs</li>
						<li>e-Gaming</li>
					</ul>
				</div>
			</div>

			<div className="w-11/12 m-auto flex justify-between items-center">
				<div className="rights">
					<p className="text-gray-300">GameStore &copy; 2023 - Present | All Rights Reserved</p>
				</div>
				<div className="mb-2">
					<img className="w-36" src={"/assets/payment_opt.png"} alt="NA"></img>
				</div>
			</div>
		</footer>
  )
};

export default Footer;