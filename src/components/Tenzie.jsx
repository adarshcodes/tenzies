import React from "react";
import Dice from "./Dice";
import { nanoid } from "nanoid";

function Tenzie() {
	function randomizer() {
		return {
			value: Math.ceil(Math.random() * 6),
			isHeld: false,
			id: nanoid(),
		};
	}

	function diceCreator() {
		const newDice = [];

		for (let i = 0; i < 10; i++) {
			newDice.push(randomizer());
		}

		return newDice;
	}

	function diceHold(id) {
		setDices((oldDice) =>
			oldDice.map((die) => {
				return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
			})
		);
	}

	function diceRoll() {
		setDices((oldDice) =>
			oldDice.map((die) => {
				return die.isHeld ? die : randomizer();
			})
		);
	}

	const [dices, setDices] = React.useState(diceCreator());

	const dice = dices.map((die) => {
		return (
			<Dice
				key={die.id}
				value={die.value}
				isHeld={die.isHeld}
				diceHold={() => diceHold(die.id)}
			/>
		);
	});

	return (
		<div className="tenzie-container">
			<h1 className="title">Tenzies</h1>
			<p className="description">
				Roll until all dice are the same. Click each die to freeze it at its
				current value between rolls.
			</p>

			<div className="dice-container">{dice}</div>

			<div className="role-btn" onClick={diceRoll}>
				Roll
			</div>
		</div>
	);
}

export default Tenzie;
