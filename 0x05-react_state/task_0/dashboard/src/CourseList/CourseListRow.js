import React from "react";
import propTypes from "prop-types";
import {Stylesheet, css} from 'aphrodite';

// Define style objects outside the component
const headerRowStyle = {
	backgroundColor: "#deb5b545"
};
const rowStyle = {
	backgroundColor: "#f5f5f5ab"
};

function CourseListRow ({isHeader, textFirstCell, textSecondCell}) {
	// Apply style based on isHeader props
	const appliedStyle = isHeader ? headerRowStyle : rowStyle;
	if (isHeader === true) {
		// Header row
		if (textFirstCell === null) {
			return <tr style={appliedStyle}><th colSpan="2">{textFirstCell}</th></tr>;
		} else {
			return (
				<tr style={appliedStyle}>
					<th className={css(styles.th)}>{textFirstCell}</th>
					<th className={css(styles.th)}>{textSecondCell}</th>
				</tr>
			);
		}
	} else if (isHeader === false) {
		// normal row
		return (
			<tr style={appliedStyle}>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
		);
	}
}
CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};
CourseListRow.propTypes = {
	isHeader: propTypes.bool,
	textFirstCell: propTypes.string.isRequired,
	textSecondCell: propTypes.string,
}
const styles = StyleSheet.create({
	th: {
	  textAlign: 'left',
	  borderTop: '1px solid gray',
	  borderBottom: '1px solid gray',
	},
});

export default CourseListRow;