import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CountDown2 from "./CountDown2"; // 可以不寫 .js 副檔名
import IsAborted from "./IsAborted"; // 可以不寫 .js 副檔名
import reportWebVitals from "./reportWebVitals";

function countDown() {
	let cautionWord = { color: "red", fontWeight: "bold" };
	let time = new Date();
	let endTime = new Date();
	endTime.setMonth(5);
	endTime.setDate(5);
	endTime.setHours(0);
	endTime.setMinutes(0);
	endTime.setSeconds(0);
	let diffTime = (endTime.getTime() - time.getTime()) / 1000;

	ReactDOM.render(
		<React.StrictMode>
			<h1>Hello react!</h1>
			<h2>1. 尚未使用 state 且 React.DOMrender 寫在 function 的寫法</h2>
			<p>
				今天是 {time.getMonth() + 1} 月 {time.getDate()} 日，距離{" "}
				{endTime.getMonth() + 1} 月 {endTime.getDate()} 日 Furrymosa 場次還有{" "}
				<span style={cautionWord}>
					{parseInt(diffTime / 60 / 60 / 24)} 天{" "}
					{parseInt((diffTime / 60 / 60) % 24)} 時{" "}
					{parseInt((diffTime / 60) % 60)} 分 {parseInt(diffTime % 60)} 秒。
				</span>
			</p>
		</React.StrictMode>,
		document.getElementById("root")
	);
}

setInterval(countDown, 1000);

ReactDOM.render(
	<React.StrictMode>
		<h2>2. 使用 state 且元件化的寫法</h2>
		<CountDown2 />
	</React.StrictMode>,
	document.getElementById("root2")
);

ReactDOM.render(
	<React.StrictMode>
		<h2>3. 使用 props 和事件綁定</h2>
		<IsAborted />
	</React.StrictMode>,
	document.getElementById("root3")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
