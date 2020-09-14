import React, { useState } from "react";

const AddKainan = (props) => {
	const [error, setErr] = useState(undefined);

	const onFormSubmit = (e) => {
		e.preventDefault();
		const option = e.target.elements.kainSend.value.trim();
		const errMsg = props.addKainan(option);

		setErr(errMsg);

		if (!error) {
			e.target.elements.kainSend.value = "";
		}
	};

	return (
		<div className="container">
			{error && (
				<p
					className={
						props.darkMode
							? "add-form-error-text add-form-error-text__dark"
							: "add-form-error-text"
					}
				>
					{error}
				</p>
			)}
			<form onSubmit={onFormSubmit} className="add-form__container">
				<input
					type="text"
					value={props.kainanOption}
					name="kainSend"
					onChange={(e) => props.setKainan(e.target.value.trim())}
					className="add-form__input"
					placeholder="Add Kainan Here"
				/>
				<button className="button">Add Kainan</button>
			</form>
		</div>
	);
};

export default AddKainan;
