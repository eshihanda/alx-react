import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BodySection extends Component {
	constructor(props) {
		super(props);
	}
	render () {
		const {children, title} = this.props;
		return (
			<div className="Body-Section">
				<h2>{title}</h2>
				{children}
			</div>
		);
	}
}

BodySection.defaultProps = {
	title: '',
  };

BodySection.propTypes = {
	title: PropTypes.string,
  };

export default BodySection;