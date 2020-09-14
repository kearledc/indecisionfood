import React from "react";

const Option = (props) => (
	<div className={props.darkMode ? "option option-dark" : "option"}>
		<p className="option-text">
			{props.count}. {props.optionText}
		</p>
		<button
			className={
				props.darkMode
					? "button--link button--link-dark button"
					: "button--link button"
			}
			onClick={(e) => props.removeItem(props.optionText)}
		>
			Remove
		</button>
	</div>
);

export default Option;
