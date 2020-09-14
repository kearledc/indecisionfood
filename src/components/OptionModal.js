import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
	<Modal
		ariaHideApp={false}
		isOpen={!!props.selectedOption}
		contentLabel="Selected Option"
		closeTimeoutMS={200}
		onRequestClose={props.closeModal}
		className="modal"
	>
		<h3 className="modal__title">We Chose:</h3>
		{props.selectedOption && (
			<p className="modal__body">{props.selectedOption}</p>
		)}
		<button onClick={props.closeModal} className="button">
			Okay
		</button>
	</Modal>
);

export default OptionModal;
