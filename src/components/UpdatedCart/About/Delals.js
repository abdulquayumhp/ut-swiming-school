import React, { useState } from "react";

const Delals = ({ cart }) => {
	const [secound, setSecound] = useState(0);

	const locaStorageSet = secound => {
		localStorage.setItem("value", secound);
	};
	const localStorageGetItem = localStorage.getItem("value");

	return (
		<div>
			<div>
				<div className=" mt-4 bg-slate-400 p-5 rounded-lg flex justify-evenly items-center">
					<div className="bg-slate-500 rounded-2xl p-1 text-white">
						<button>
							<span onClick={e => setSecound(e.target.innerText)}>10s</span>
						</button>
					</div>
					<div className="bg-slate-500 rounded-2xl p-1 text-white">
						<button>
							<span onClick={e => setSecound(e.target.innerText)}>20s</span>
						</button>
					</div>
					<div className="bg-slate-500 rounded-2xl p-1 text-white">
						<button>
							<span onClick={e => setSecound(e.target.innerText)}>30s</span>
						</button>
					</div>
					<div className="bg-slate-500 rounded-2xl p-1 text-white">
						<button>
							<span onClick={e => setSecound(e.target.innerText)}>40s</span>
						</button>
					</div>
					<div className="bg-slate-500 rounded-2xl p-1 text-white">
						<button>
							<span onClick={e => setSecound(e.target.innerText)}>50s</span>
						</button>
					</div>
				</div>
				<div>
					<h1 className=" text-xl font-semibold mt-5 ">Exercise time</h1>
				</div>
				<div className="mt-5 bg-slate-500 rounded-lg p-4 text-white ">
					<h1 className=" text-xl ">
						Exercise Time
						<span className="px-6  text-base text-slate-100 ">
							{cart} <span className="text-cyan-500">Secound</span>
						</span>
					</h1>
				</div>
				<div className="mt-5 bg-slate-500 rounded-lg p-4 text-white ">
					<h1 className=" text-xl ">
						Break Time
						<span className=" text-base px-10 text-slate-100 ">
							{localStorageGetItem}{" "}
							<span className="Secound text-cyan-500">Secound</span>
						</span>
					</h1>
				</div>
				<div className="text-center mt-8">
					<button className="btn btn-primary px-14">Acticity Completed</button>
				</div>
			</div>
		</div>
	);
};

export default Delals;
