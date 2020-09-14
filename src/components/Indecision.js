import React, { useState, useEffect } from "react";
import Action from "./Action";
import AddKainan from "./AddKainan";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

const Indecision = () => {
	const optionsData = JSON.parse(localStorage.getItem("kainOptions"));
	const darkModeData = JSON.parse(localStorage.getItem("darkmode"));
	const [options, setOptions] = useState(optionsData || []);
	const [kainanOption, setKainan] = useState("");
	const [selectedOption, setSelect] = useState(undefined);
	const [darkMode, setDarkMode] = useState(darkModeData || false);

	const toggleChange = () => {
		setDarkMode((prevState) => !prevState);
	};

	const addKainan = (option) => {
		if (!option) {
			return "Enter Valid Option!!";
		} else if (options.indexOf(option) > -1) {
			return "This Option Already Exists!!";
		}

		setOptions([...options, kainanOption]);
		setKainan("");
	};

	const kainanClick = (option) => {
		const randomNum = Math.floor(Math.random() * options.length);
		const selected = options[randomNum];
		setSelect(selected);
	};

	const removeAll = () => setOptions([]);

	const removeItem = (optionToRemove) => {
		setOptions((option) =>
			option.filter((kainan) => optionToRemove !== kainan)
		);
	};

	const closeModal = () => {
		setSelect(undefined);
	};

	useEffect(() => {
		const json = JSON.stringify(options);
		localStorage.setItem("kainOptions", json);
	}, [options]);

	useEffect(() => {
		const json = JSON.stringify(darkMode);
		localStorage.setItem("darkmode", json);
	}, [darkMode]);

	const subtitle = "Saan kayo kakain ni Love One?";

	return (
		<div className={darkMode ? "dark-mode" : "light-mode"}>
			<Header
				subtitle={subtitle}
				toggleChange={toggleChange}
				darkMode={darkMode}
			/>
			<Action
				kainanClick={kainanClick}
				hasOptions={options.length > 0}
				darkMode={darkMode}
			/>
			<Options
				removeAll={removeAll}
				options={options}
				removeItem={removeItem}
				darkMode={darkMode}
			/>
			<AddKainan
				kainanOption={kainanOption}
				addKainan={addKainan}
				setKainan={setKainan}
				darkMode={darkMode}
			/>
			<OptionModal
				selectedOption={selectedOption}
				closeModal={closeModal}
				darkMode={darkMode}
			/>
		</div>
	);
};

export default Indecision;
