import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";
import Navbar from "../Navbar/Navbar";
import UpdatedCart from "../UpdatedCart/UpdatedCart";

const Header = () => {
	const [splayer, setSplayer] = useState([]);

	useEffect(() => {
		fetch(`swimming.json`)
			.then(res => res.json())
			.then(data => setSplayer(data));
	}, []);
	// console.log(splayer);
	return (
		<div className="flex">
			<div className=" p-2 md:w-8/12 mx-auto ">
				<Navbar />
				<div className="grid grid-cols-1   md:grid-cols-1 lg:grid-cols-2 gap-20">
					{splayer.map(player => (
						<Card player={player} key={player._id} />
					))}
				</div>
			</div>
			<div className=" bg-zinc-200 p-10 w-96 h-screen ">
				<UpdatedCart />
			</div>
		</div>
	);
};

export default Header;
