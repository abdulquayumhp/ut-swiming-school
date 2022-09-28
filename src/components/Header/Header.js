import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";
import Navbar from "../Navbar/Navbar";
import UpdatedCart from "../UpdatedCart/UpdatedCart";

const Header = () => {
	const [splayer, setSplayer] = useState([]);

	const [cart, setCart] = useState(0);
	console.log(cart);

	useEffect(() => {
		fetch(`swimming.json`)
			.then(res => res.json())
			.then(data => setSplayer(data));
	}, []);
	// console.log(splayer);

	const addToCartBtn = player => {};

	return (
		<div className="flex  flex-col-reverse md:flex-row ">
			<div className=" p-2 md:w-8/12 mx-auto ">
				<Navbar />
				<div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-20">
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
				<UpdatedCart />
			</div>
		</div>
	);
};

export default Header;
