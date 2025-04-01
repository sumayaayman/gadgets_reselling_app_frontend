const Button = ({ children, type = "primary", onClick }) => {
	return (
		<>
			{type === "primary" ? (
				<button
					type="button"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					onClick={onClick}
				>
					{children}
				</button>
			) : (
				<button
					type="button"
					className="text-slate-900 bg-white border border-slate-500 focus:outline-none hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 font-medium rounded text-sm px-5 py-2.5 dark:bg-slate-800 dark:text-white dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-slate-600 dark:focus:ring-slate-700"
					onClick={onClick}
				>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;
