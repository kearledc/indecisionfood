import React from "react";

const Action = (props) => {
	return (
		<div className="container">
			<button
				className={props.darkMode ? "button__big_dark" : "button__big"}
				onClick={props.kainanClick}
				disabled={!props.hasOptions}
			>
				Saan Nga Ba?
			</button>
		</div>
	);
};

export default Action;
