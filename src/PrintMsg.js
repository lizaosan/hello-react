import React from "react";

class PrintMsg extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleChange(event) {
		this.props.nameInput(event.target.value);
	}
	handleClick() {
		this.props.nameInput("");
	}
	render() {
		return (
			<input
				onClick={this.handleClick}
				onChange={this.handleChange}
				value={this.props.name}
			/>
		);
	}
}

export default PrintMsg;
