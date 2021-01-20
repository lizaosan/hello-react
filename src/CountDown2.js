import React from "react";

class CountDown2 extends React.Component {
	constructor() {
		super();
		this.state = {
			time: new Date(),
			endTime: new Date(),
		};
	}
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			time: new Date(),
		});
	}

	render() {
		let time = this.state.time;
		let endTime = this.state.endTime;
		endTime.setMonth(5);
		endTime.setDate(5);
		endTime.setHours(0);
		endTime.setMinutes(0);
		endTime.setSeconds(0);
		let diffTime = (endTime.getTime() - time.getTime()) / 1000;
		return (
			<p>
				今天是 {time.getMonth() + 1} 月 {time.getDate()} 日，距離{" "}
				{endTime.getMonth() + 1} 月 {endTime.getDate()} 日 Furrymosa 場次還有{" "}
				{parseInt(diffTime / 60 / 60 / 24)} 天{" "}
				{parseInt((diffTime / 60 / 60) % 24)} 時{" "}
				{parseInt((diffTime / 60) % 60)} 分 {parseInt(diffTime % 60)} 秒。
			</p>
		);
	}
}

export default CountDown2;
