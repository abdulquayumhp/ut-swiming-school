import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const About = () => {
	return (
		<div>
			<div className="flex   items-center">
				<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
					<div className="w-10  rounded-full">
						<img src="https://placeimg.com/80/80/people" alt="hb" />
					</div>
				</label>
				<div className="px-5">
					<div>
						<h1 className=" text-2xl font-bold ">Abdul Quayum</h1>
					</div>
					<div className="flex">
						<h1 className="text-slate-300">
							<FontAwesomeIcon icon={faLocationPin} />
						</h1>
						<p className="text-gray-400 pl-2">Dhaka, Bangladesh</p>
					</div>
				</div>
			</div>
			<div className="flex bg-black mt-5 justify-evenly rounded-lg   items-center  bg-slate-300 p-3">
				<div>
					<h1>
						<span className="text-2xl font-bold  ">8 </span>
						<span className="text-gray-500 font-semibold  ">Gold</span>
					</h1>
					<h1>Medel</h1>
				</div>
				<div>
					<h1>
						<span className="text-2xl font-bold  ">25</span>
						<span className="text-gray-500 font-semibold  ">Silver</span>
					</h1>
					<h1>Medel</h1>
				</div>
				<div>
					<h1>
						<span className="text-2xl font-bold  ">52</span>
						<span className="text-gray-500 font-semibold  ">Bronze</span>
					</h1>
					<h1>Medel</h1>
				</div>
			</div>
			<div className="mt-5">
				<h1 className="text-gray-600 text-xl font-semibold">Add A Break</h1>
			</div>
		</div>
	);
};

export default About;
