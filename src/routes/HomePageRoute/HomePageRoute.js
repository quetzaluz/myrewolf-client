import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePageRoute.css';

export default class HomePage extends Component {
	render() {
		return (
			<div className="Home_page">
				<main className="main">
					<div className="Home_page-discovery">
						<Link to="/discovery">Help us help you!</Link>
					</div>
					<div className="Space"></div>
					<div className="Home_page-review">
						<Link to="/reviews">Review Rewolf</Link>
					</div>
					<div className="Space"></div>
					<div className="Change">
						<Link to="/change">Change your password</Link>
					</div>
				</main>
			</div>
		);
	}
}
