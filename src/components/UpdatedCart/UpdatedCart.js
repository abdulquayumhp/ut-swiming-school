import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UpdatedCart = () => {
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
						<h1 className=" text-2xl font-bold ">abudl quyum</h1>
					</div>
					<div className="flex">
						<h1 className="text-slate-300">
							<FontAwesomeIcon icon={faLocationPin} />
						</h1>
						<p className="text-gray-400 pl-2">Dhaka, Bangladesh</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdatedCart;
