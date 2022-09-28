import React from "react";

const Card = ({ player }) => {
	const { _id, name, picture, time, age, isActive, about } = player;
	console.log(player);
	return (
		<div className=" mx-auto  mt-10 w-96   ">
			<div className="card w-69 h-full bg-base-100 shadow-xl ">
				<figure className="px-10 pt-10">
					<img src={picture} alt="Shoes" className="rounded-xl" />
				</figure>
				<div className="card-body   mb-5">
					<h2 className="">{name}</h2>
					<p>{about ? about.slice(0, 100) : "sorry"}</p>
					<p> For Age {age}</p>
					<p> Time required {time}</p>
					<div className="card-actions ">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
