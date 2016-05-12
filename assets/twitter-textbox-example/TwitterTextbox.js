import React, { Component } from 'react';

import './style.css';

class TwitterTextbox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			photoAdded: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.togglePhoto = this.togglePhoto.bind(this);
	}

	handleChange(e) {
		this.setState({ text: e.target.value });
	}

	togglePhoto() {
		this.setState({ photoAdded: !this.state.photoAdded });
	}

	render() {
		let remainingCharacters = 140 - this.state.text.length;
		if (this.state.photoAdded) {
			remainingCharacters -= 23;
		}

		return (
			<div className="TwitterTextbox">
        <textarea onChange={this.handleChange} />
				<br />
				<span>{remainingCharacters}</span>
				<button disabled={remainingCharacters < 0 || remainingCharacters === 140}>
					Tweet
				</button>
				<button onClick={this.togglePhoto}>
					{this.state.photoAdded ? '✓ Photo Added' : 'Add Photo' }
				</button>
			</div>
		);
	}
}

export default TwitterTextbox;
