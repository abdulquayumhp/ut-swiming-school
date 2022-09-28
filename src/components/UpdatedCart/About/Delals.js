import React from "react";

const Delals = () => {
	return (
		<div>
			<div>
				<h1 className=" text-xl font-semibold mt-5 ">Exercise time</h1>
			</div>
			<div className="mt-5 bg-slate-500 rounded-lg p-4 text-white ">
				<h1 className=" text-xl ">
					Exercise Time
					<span className="px-10  text-base text-cyan-500 ">Secound</span>
				</h1>
			</div>
			<div className="mt-5 bg-slate-500 rounded-lg p-4 text-white ">
				<h1 className=" text-xl ">
					Break Time
					<span className=" text-base px-14 text-cyan-500 ">Secound</span>
				</h1>
			</div>
			<div className="text-center mt-8">
				<button className="btn btn-primary px-14">Acticity Completed</button>
			</div>
		</div>
	);
};

export default Delals;
