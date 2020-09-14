import React from "react";
import Option from "./Option";

const Options = (props) => (
	<div className="container">
		<div
			className={
				props.darkMode
					? "options__widget options__widget-dark"
					: "options__widget"
			}
		>
			<h3 className="options__widget-title">Kainan Options:</h3>
			<button
				className={
					props.darkMode
						? "button--link button--link-dark button"
						: "button--link button"
				}
				onClick={props.removeAll}
			>
				Remove All
			</button>
		</div>
		{props.options.length === 0 && (
			<p className="options__widget-body">Please Add An Option!</p>
		)}
		{props.options.map((option, index) => (
			<Option
				count={index + 1}
				optionText={option}
				key={option}
				removeItem={props.removeItem}
				darkMode={props.darkMode}
			/>
		))}
	</div>
);

export default Options;
