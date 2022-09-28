import React from "react";

const Card = ({ player, addToCartBtn }) => {
	const { _id, name, picture, time, age, isActive, about } = player;
	// console.log(player);

	return (
		<div className=" mx-auto  mt-10 w-80   ">
			<div className="card h-full bg-base-100 shadow-xl  ">
				<figure className="px-10   pt-10">
					<img
						src={picture}
						alt="Shoes"
						className="rounded-xl w-56 h-40 object-cover  "
					/>
				</figure>
				<div className="card-body   mb-5">
					<h2 className="text-3xl font-medium">{name}</h2>
					<p className="text-slate-400">
						{about ? about.slice(0, 100) : "sorry"}
					</p>
					<p className="font-medium"> For Age : {age}</p>
					<p className="font-medium mb-2">
						{" "}
						Time required : {time}
						<span className="text-gray-300"> s</span>{" "}
					</p>
					<div className="text-center ">
						<div className=" ">
							<button
								onClick={() => addToCartBtn(player)}
								className="btn btn-primary px-20">
								add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
