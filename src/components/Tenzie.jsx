import React from "react";
import Dice from "./Dice";

function Tenzie() {
	function allNewDice() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			newDice.push(Math.ceil(Math.random() * 6));
		}
		return newDice;
	}

	const [randomDice] = React.useState(allNewDice);

	const dices = randomDice.map((dice) => {
		return <Dice value={dice} />;
	});

	return (
		<div className="tenzie-container">
			<h1 className="title">Tenzies</h1>
			<p className="description">
				Roll until all dice are the same. Click each die to freeze it at its
				current value between rolls.
			</p>

			<div className="dice-container">{dices}</div>

			<div className="role-btn">Roll</div>
		</div>
	);
}

export default Tenzie;
