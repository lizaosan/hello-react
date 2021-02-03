import React from "react";

class IsAborted extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isAborted: null };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(props) {
		this.setState((state) => ({
			isAborted: props,
		}));
	}
	render() {
		return (
			<div>
				你今天天窗了嗎？
				<button onClick={() => this.handleClick(true)}>是</button>&nbsp;
				<button onClick={() => this.handleClick(false)}>否</button>
				<div
					style={
						this.state.isAborted === null
							? { display: "none" }
							: { display: "block" }
					}
				>
					{this.state.isAborted === true ? "馬的智障" : "你好乖喔"}
				</div>
			</div>
		);
	}
}

export default IsAborted;
