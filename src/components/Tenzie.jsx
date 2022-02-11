import React from "react";
import Dice from "./Dice";
import { nanoid } from "nanoid";

function Tenzie() {
	const [randomDice, setRandomDice] = React.useState(allNewDice());

	function allNewDice() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			newDice.push(dieGenerator());
		}
		return newDice;
	}

	function dieGenerator() {
		return {
			value: Math.ceil(Math.random() * 6),
			isHeld: false,
			id: nanoid(),
		};
	}

	function rollDice() {
		setRandomDice((oldDice) =>
			oldDice.map((die) => {
				return die.isHeld ? die : dieGenerator();
			})
		);
	}

	function holdDice(id) {
		setRandomDice((prevDice) =>
			prevDice.map((die) => {
				return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
			})
		);
	}

	const dices = randomDice.map((dice) => {
		return (
			<Dice
				key={dice.id}
				value={dice.value}
				isHeld={dice.isHeld}
				holdDice={() => holdDice(dice.id)}
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

			<div className="dice-container">{dices}</div>

			<div className="role-btn" onClick={rollDice}>
				Roll
			</div>
		</div>
	);
}

export default Tenzie;
