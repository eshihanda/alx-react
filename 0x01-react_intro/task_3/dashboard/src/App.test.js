import { render, screen } from '@testing-library/react';
import App from './App';

//Test that App renders without crashing
test('App renders without crashing', () => {
	render(<App />);
});

// Verify that App renders a div with the class App-header
test('App renders a div with the class App-header', () => {
	render(<App />);
	const headerElement = screen.getByClassName('App-header');
	expect(headerElement).toBeInTheDocument();
});

  // Verify that App renders a div with the class App-body
test('App renders a div with the class App-body', () => {
	render(<App />);
	const bodyElement = screen.getByClassName('App-body');
	expect(bodyElement).toBeInTheDocument();
});

// Verify that App renders a div with the class App-footer
test('App renders a div with the class App-footer', () => {
	render(<App />);
	const footerElement = screen.getByClassName('App-footer');
	expect(footerElement).toBeInTheDocument();
});
