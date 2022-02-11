import React from "react";
import Dice from "./Dice";

function Tenzie() {
	return (
		<div className="tenzie-container">
			<h1 className="title">Tenzies</h1>
			<p className="description">
				Roll until all dice are the same. Click each die to freeze it at its
				current value between rolls.
			</p>

			<div className="dice-container">
				<Dice value="0" />
			</div>

			<div className="role-btn">Roll</div>
		</div>
	);
}

export default Tenzie;
