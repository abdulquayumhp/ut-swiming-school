import React, { useEffect, useState } from "react";
import BLog from "../Blog/BLog";
import Card from "../Cards/Card";
import Navbar from "../Navbar/Navbar";
import UpdatedCart from "../UpdatedCart/UpdatedCart";

import "./Header.css";

const Header = () => {
	const [splayer, setSplayer] = useState([]);

	const [cart, setCart] = useState(0);
	// console.log(cart);

	useEffect(() => {
		fetch(`swimming.json`)
			.then(res => res.json())
			.then(data => setSplayer(data));
	}, []);
	// console.log(splayer);

	const addToCartBtn = player => {
		setCart(player.time + cart);
	};

	return (
		<div>
			<div className="flex  flex-col-reverse md:flex-row ">
				<div className=" p-2 md:w-9/12 mx-auto ">
					<Navbar />
					<div className="one-cart">
						{splayer.map(player => (
							<Card
								player={player}
								key={player._id}
								addToCartBtn={addToCartBtn}
							/>
						))}
					</div>
				</div>
				<div className=" bg-zinc-200 p-10 w-full md:w-96  h-screen ">
					<UpdatedCart cart={cart} />
				</div>
			</div>
			<div>
				<BLog />
			</div>
		</div>
	);
};

export default Header;
