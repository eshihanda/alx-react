export function getFullYear() {
	return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
	if (isIndex === true) {
		return("Holberton school");
	} else {
		return("Holberton School main dashboard");
	}
}