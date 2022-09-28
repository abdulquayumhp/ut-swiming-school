import React from "react";

const Header = () => {
	return (
		<div className=" p-2  md:w-9/12 mx-auto">
			<div className=" md:w-3/5 pt-20 flex items-center ">
				<div>
					<img
						className="w-20 md:w-40 pe-20"
						src="https://www.nicepng.com/png/full/222-2228188_adult-swim-logo-png-download-swimming-logo.png"
						alt=""
					/>
				</div>
				<div>
					<h1 className=" text-2xl md:text-5xl max-w-md ">
						Ut <span className="text-sky-400">SWIM</span> <span>SCHOOL</span>
					</h1>
				</div>
			</div>
			<h1 className="text-2xl pt-10 font-bold text-zinc-500">
				Select your Daily category
			</h1>
		</div>
	);
};

export default Header;
