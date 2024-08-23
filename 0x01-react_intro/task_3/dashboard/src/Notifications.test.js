// Import necessary libraries and the component
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

// Test that Notifications renders without crashing
test('Notifications renders without crashing', () => {
  render(<Notifications />);
});

// Verify that Notifications renders three list items
test('Notifications renders three list items', () => {
  render(<Notifications />);
  const listItems = screen.getAllByRole('listitem'); // Assuming list items are rendered as <li> elements
  expect(listItems).toHaveLength(3);
});

// Verify that Notifications renders the text "Here is the list of notifications"
test('Notifications renders the text "Here is the list of notifications"', () => {
  render(<Notifications />);
  const textElement = screen.getByText('Here is the list of notifications');
  expect(textElement).toBeInTheDocument();
});
