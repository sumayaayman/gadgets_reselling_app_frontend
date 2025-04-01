import React, { useState } from "react";

const Search = ({ handleSearch }) => {
	const [searchText, setSearchText] = useState("");
	const onChange = (e) => {
		setSearchText(e.target.value.toLowerCase());
	};
	return (
		<div className="flex-1 mx-12">
			<div className="flex">
				<div className="relative w-full">
					<input
						type="search"
						placeholder="Search gadgets..."
						required
						onChange={onChange}
						value={searchText}
						className="block p-2.5 w-4/5 z-20 text-sm text-slate-900 bg-slate-50 rounded-lg rounded-r-none border border-slate-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:border-s-slate-700  dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:border-primary-500"
					/>
					<button
						type="submit"
						className="flex items-center w-1/5 absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-primary-700 rounded-e-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						onClick={() => handleSearch(searchText)}
					>
						<svg
							className="w-4 h-4"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
						<span className="ml-2">Search</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Search;
