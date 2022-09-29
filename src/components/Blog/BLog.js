import React from "react";

const BLog = () => {
	return (
		<div className="  bg-slate-500 w-11/12 mx-auto my-10 p-4 rounded-lg">
			<h1 className="text-center mb-5 text-xl font-semibolds text-white ">
				Question
			</h1>
			<div className=" p-10 bg-gray-300 rounded-lg mb-5">
				<h1 className="text-black font-bold">1. How React Work ? </h1>
				<p className="mt-2">
					ReactJS divides the UI into isolated reusable pieces of code known as
					components. React components work similarly to JavaScript functions as
					they accept arbitrary inputs called properties or props.It's possible
					to have as many components as necessary without cluttering your code.
				</p>
			</div>
			<div className=" p-10 bg-gray-300 rounded-lg mb-5">
				<h1 className="text-black font-bold ">
					2. what is the Main difference between props and state ?{" "}
				</h1>
				<p className="mt-2">
					The state is an updatable structure that is used to contain data or
					information about the component and can change over time. The change
					in state can happen as a response to user action or system event. It
					is the heart of the react component which determines the behavior of
					the component and how it will render. A state must be kept as simple
					as possible. It represents the component's local state or information.
					It can only be accessed or modified inside the component or by the
					component directly.
				</p>
				<hr className="bg-black w-5/12 my-5" />
				<p>
					Props are read-only components. It is an object which stores the value
					of attributes of a tag and work similar to the HTML attributes. It
					allows passing data from one component to other components. It is
					similar to function arguments and can be passed to the component the
					same way as arguments passed in a function. Props are immutable so we
					cannot modify the props from inside the component.
				</p>
			</div>
			<div className=" p-10 bg-gray-300 rounded-lg mb-5">
				<h1 className="text-black font-bold ">
					3. what is exactly useeffect work except api call ?{" "}
				</h1>
				<p className="mt-2">
					<p className="">What does useEffect do?</p>
					By using this Hook, you tell React that your component needs to do
					something after render. React will remember the function you passed
					(we'll refer to it as our “effect”), and call it later after
					performing the DOM updates. In this effect, we set the document title,
					but we could also perform data fetching or call some other imperative
					API
				</p>
				<p className="underline py-2 text-semibold text-xl">useEffect work </p>
				<p>
					1.The useEffect Hook allows you to perform side effects in your
					components. <br /> 2.Some examples of side effects are :
					<span className=" text-xl text-cyan-700  ">
						fetching data, directly updating the DOM, and timers
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default BLog;
