import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('getFullYear returns the current year', () => {
	const currentYear = new Date().getFullYear();
	expect(getFullYear()).toBe(currentYear);
});

test('getFooterCopy returns the correct string when the argument is true', () => {
	expect(getFooterCopy(true)).toBe('Holberton School');
});
test('getFooterCopy returns the correct string when the argument is false', () => {
	expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns the expected string', () => {
	expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
