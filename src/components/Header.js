import React from "react";

const Header = (props) => (
	<div
		className={props.darkMode ? "header darkHeader" : "header lightHeader"}
	>
		<div className="container">
			<div className="header__container">
				<h2 className="header__title">Indecision</h2>
				<label className="switch">
					<p>
						{props.darkMode ? (
							<i className="fas fa-moon header__icon dark"></i>
						) : (
							<i className="fas fa-sun header__icon"></i>
						)}
					</p>
					<input type="checkbox" onChange={props.toggleChange} />
					<span className="slider round"></span>
				</label>
			</div>
			{props.subtitle && (
				<h2 className="header__subtitle">{props.subtitle}</h2>
			)}
		</div>
	</div>
);

export default Header;
