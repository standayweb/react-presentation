import React, { Component } from 'react';
import MyOption from './MyOption';

class MySelect extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: false,
		};

		this.onSelect = this.onSelect.bind(this);
	}

	onSelect(e) {
		if (e.target.textContent === this.state.selected) {
			this.setState({ selected: false });
		} else {
			this.setState({ selected: e.target.textContent });
		}
	}

	render() {
		return (
			<div className="MySelect">
				<MyOption selected={this.state.selected} onSelect={this.onSelect}>
          Volvo
        </MyOption>
				<MyOption selected={this.state.selected} onSelect={this.onSelect}>
          Saab
        </MyOption>
				<MyOption selected={this.state.selected} onSelect={this.onSelect}>
          Mercedes
        </MyOption>
				<MyOption selected={this.state.selected} onSelect={this.onSelect}>
          Audi
        </MyOption>
			</div>
		);
	}
}

export default MySelect;
