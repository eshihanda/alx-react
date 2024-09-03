import React from "react";
import propTypes from "prop-types";

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
					<th>{textFirstCell}</th>
					<th>{textSecondCell}</th>
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
export default CourseListRow;