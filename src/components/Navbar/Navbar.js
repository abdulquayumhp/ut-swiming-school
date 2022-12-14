import React from "react";

const Navbar = () => {
	return (
		<div>
			<div className=" pt-20 flex items-center md:ml-14  ">
				<div className="">
					<img
						className="w-20 md:w-40 "
						src="https://www.nicepng.com/png/full/222-2228188_adult-swim-logo-png-download-swimming-logo.png"
						alt=""
					/>
				</div>
				<div>
					<h1 className=" text-xl md:text-2xl md:text-5xl ">
						Ut <span className="text-sky-400">SWIM</span> <span>SCHOOL</span>
					</h1>
				</div>
			</div>
			<h1 className="text-2xl text-center md:text-left pt-10 md:ml-14 font-bold text-zinc-500">
				Select your Daily category
			</h1>
		</div>
	);
};

export default Navbar;
