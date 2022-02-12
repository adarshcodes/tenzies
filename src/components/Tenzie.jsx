import React from "react";
import Dice from "./Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

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

	const [tenzies, setTenzies] = React.useState(false);

	React.useEffect(() => {
		const allHeld = dices.every((die) => die.isHeld);
		const firstValue = dices[0].value;
		const allSame = dices.every((die) => die.value === firstValue);

		if (allHeld && allSame) {
			setTenzies(true);
		}
	}, [dices]);

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

	// Tracking number of rolls

	const [countRoll, setCountRoll] = React.useState(0);

	const [bestCount, setBestCount] = React.useState(0);

	function count() {
		setCountRoll((oldCount) => oldCount + 1);
	}

	function bestScore() {
		setBestCount((prevBest) => (prevBest <= countRoll ? countRoll : bestCount));
	}

	function rollAndCount() {
		count();
		diceRoll();
	}

	function reset() {
		bestScore();
		setTenzies(false);
		setDices(diceCreator());
		setCountRoll(0);
	}

	return (
		<div className="tenzie-container">
			{tenzies ? <Confetti className="confetti" /> : null}
			<h1 className="title">Tenzies</h1>
			<p className="description">
				Roll until all dice are the same. Click each die to freeze it at its
				current value between rolls.
			</p>

			<div className="count">
				<div className="last-count">Highest Roll: {bestCount}</div>
				<div className="current-count">Current Roll: {countRoll}</div>
			</div>

			<div className="dice-container">{dice}</div>

			<div className="role-btn" onClick={tenzies ? reset : rollAndCount}>
				{tenzies ? "Play again!" : "Roll"}
			</div>
		</div>
	);
}

export default Tenzie;
