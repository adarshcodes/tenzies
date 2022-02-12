import React from "react";

export default function Dice(props) {
	return (
		<div
			className={props.isHeld ? "dice dice-active" : "dice"}
			onClick={props.diceHold}
		>
			{props.value}
		</div>
	);
}
