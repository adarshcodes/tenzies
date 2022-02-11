import React from "react";

function Tenzie() {
	return (
		<div className="tenzie-container">
			<h1 className="title">Tenzies</h1>
			<p className="description">
				Roll until all dice are the same. Click each die to freeze it at its
				current value between rolls.
			</p>

			<div className="dice-container">
				<div className="dice">0</div>
				<div className="dice">1</div>
				<div className="dice">2</div>
				<div className="dice">3</div>
				<div className="dice">4</div>
				<div className="dice">5</div>
				<div className="dice">6</div>
				<div className="dice">7</div>
				<div className="dice">8</div>
				<div className="dice">9</div>
			</div>

			<div className="role-btn">Roll</div>
		</div>
	);
}

export default Tenzie;
