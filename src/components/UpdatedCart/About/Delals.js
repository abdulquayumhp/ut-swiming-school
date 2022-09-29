import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Delals = ({ cart }) => {
	const [data, setData] = useState("");

	useEffect(() => {}, [data]);

	const setDataLocalStorage = e => {
		setData(e);
		localStorage.setItem("value", e);
	};

	const setTost = () => {
		Swal.fire("Good job!", "You clicked the button!", "success");
	};
	const box = localStorage.getItem("value");
	return (
		<div>
			<div>
				<div className=" mt-4 bg-slate-400 p-5 rounded-lg flex justify-evenly items-center">
					<div className="bg-slate-500 rounded-2xl px-2 py-1 text-white">
						<button>
							<span onClick={e => setDataLocalStorage(e.target.innerText)}>
								10
							</span>
						</button>
					</div>
					<div className="bg-slate-500 rounded-2xl  px-2 py-1 text-white">
						<button>
							<span onClick={e => setDataLocalStorage(e.target.innerText)}>
								20
							</span>
						</button>
					</div>
					<div className="bg-slate-500 rounded-2xl px-2 py-1 text-white">
						<button>
							<span onClick={e => setDataLocalStorage(e.target.innerText)}>
								30
							</span>
						</button>
					</div>
					<div className="bg-slate-500 rounded-2xl px-2 py-1 text-white">
						<button>
							<span onClick={e => setDataLocalStorage(e.target.innerText)}>
								40
							</span>
						</button>
					</div>
					<div className="bg-slate-500 rounded-2xl px-2 py-1 text-white">
						<button>
							<span onClick={e => setDataLocalStorage(e.target.innerText)}>
								50
							</span>
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
							{box}
							<span className="Secound text-cyan-500"> Secound</span>
						</span>
					</h1>
				</div>
				<div className="text-center mt-8">
					<button onClick={setTost} className="btn btn-primary px-14">
						Acticity Completed
					</button>
				</div>
			</div>
		</div>
	);
};

export default Delals;
