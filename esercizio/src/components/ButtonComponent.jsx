import { Component } from "react";

const ButtonComponent = (props) => (
	<button style={props.buttonStyle}>
		{props.content
			? props.content
			: "testo nel caso props.content non ci sia "}
	</button>
);

export default ButtonComponent;
