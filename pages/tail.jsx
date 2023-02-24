import { useState } from "react";

export default function tail() {
	const [isDark, setIsDark] = useState(false);

	return (
		<div
			className={
				(isDark === true ? "dark " : " ") +
				"bg-slate-400 xl:place-content-center py-20 px-10 grid gap-10 xl:grid-cols-3 lg:grid-cols-2 min-h-screen"
			}
		>
			<div>
				<button
					className="text-center p-2 rounded-xl w-1/2 block mx-auto border transition
					bg-white text-black
					dark:bg-black dark:text-white"
					onClick={() => setIsDark((prev) => !prev)}
				>
					{isDark === true ? "To Light" : "To Dark"}
				</button>
			</div>
			<div
				className=" 
				flex flex-col justify-between p-5 rounded-3xl shadow-xl
				bg-white dark:bg-black dark:text-gray-200
			"
			>
				<span className="font-semibold text-3xl">Select Item</span>
				<div>
					{[1, 2].map((i) => (
						<div key={i} className="flex justify-between my-2">
							<span className="text-gray-500 dark:text-gray-300">
								Grey Chair
							</span>
							<span className="font-semibold">$19</span>
						</div>
					))}
				</div>
				<div className=" flex justify-between mt-2 pt-2 border-t-2 border-dashed">
					<span>Total</span>
					<span className="font-semibold">$10</span>
				</div>
				<button
					className="mt-5  text-center rounded-xl w-3/4 block mx-auto border transition
						bg-blue-500 p-3 text-white
						hover:bg-teal-500 hover:text-black
						dark:bg-black dark:text-white dark:border-white
						dark:hover:bg-gray-200 dark:hover:text-black dark:hover:border-black
					"
				>
					Checkout
				</button>
			</div>

			<div className="bg-white overflow-hidden rounded-2xl shadow-xl group">
				<div className="portrait:bg-indigo-300 landscape:bg-teal-300 p-6 pb-14 xl:pb-40">
					<span className="text-white text-2xl">Profile</span>
				</div>
				<div className="rounded-3xl p-6 bg-white relative -top-5">
					<div className="flex relative -top-16 items-end justify-between">
						<div className="flex flex-col items-center">
							<span className="text-sm text-gray-500">
								Orders
							</span>
							<span className="font-medium">340</span>
						</div>
						<div className="h-24 w-24 bg-zinc-400 rounded-full group-hover:bg-red-300 transition-colors" />
						<div className="flex flex-col items-center">
							<span className="text-sm text-gray-500">Spent</span>
							<span className="font-medium">$1240</span>
						</div>
					</div>
					<div className="relative flex flex-col items-center -mt-10 -mb-5">
						<span className="text-lg font-medium">Jobs Park</span>
						<span className="text-sm text-gray-500">Seoul, KR</span>
					</div>
				</div>
			</div>

			<div className="bg-white p-10 rounded-2xl shadow-xl lg:col-span-2 xl:col-span-1">
				<div className="flex mb-5 justify-between items-center">
					<span>⬅</span>
					<div className="space-x-3">
						<span>4.9</span>
						<span className="shadow-xl p-2 roun-md">❤</span>
					</div>
				</div>
				<div className="bg-zinc-400 h-72 mb-5" />
				<div className="flex flex-col">
					<span className="font-medium text-xl">Swoon Lounge</span>
					<span className="text-xs text-gray-500">Chair</span>
					<div className="mt-3 mb-5 flex justify-between items-center">
						<div className="space-x-2">
							<button className="w-5 h-5 rounded-full focus:bg-opacity-100 hover:bg-opacity-100 bg-yellow-500 bg-opacity-50 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
							<button className="w-5 h-5 rounded-full focus:bg-opacity-100 hover:bg-opacity-100 bg-indigo-500  bg-opacity-50 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
							<button className="w-5 h-5 rounded-full focus:bg-opacity-100 hover:bg-opacity-100 bg-teal-500  bg-opacity-50 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
						</div>
						<div className="flex items-center space-x-5">
							<button className="rounded-lg bg-blue-100 justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500">
								-
							</button>
							<span>1</span>
							<button className="rounded-lg bg-blue-100 justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500">
								+
							</button>
						</div>
					</div>
					<div className="flex justify-around items-center">
						<span className="font-medium text-2xl">$450</span>
						<button className="bg-blue-500 py-2 px-8 text-center text-white text-xs rounded-lg">
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
