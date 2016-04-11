import React, { Component } from 'react';

class MyOption extends Component {
	render() {
		let className = 'MyOption';
		if (this.props.children === this.props.selectedOption) {
			className += ' active';
		}

		return (
			<div className={className} onClick={this.props.onSelect}>
				{this.props.children}
			</div>
		);
	}
}

export default MyOption;
