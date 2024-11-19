import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer">
					<p>&copy; 2024 <a href="https://raflyasligalek.web.app">MyApp</a>. All rights reserved.</p>
				</footer>
			</div>
		);
	}
}
