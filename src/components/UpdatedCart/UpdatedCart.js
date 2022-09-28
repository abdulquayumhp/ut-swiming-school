import React from "react";
import About from "./About/About";
import Delals from "./About/Delals";
import Secound from "./About/Secound";

const UpdatedCart = ({ cart }) => {
	// console.log(cart);
	return (
		<div>
			<About />
			<Secound />
			<Delals cart={cart} />
		</div>
	);
};

export default UpdatedCart;
