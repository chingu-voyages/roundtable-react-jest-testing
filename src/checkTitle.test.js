import { render, screen } from '@testing-library/react';
import App from './App';

test('Verify the title is correct', () => {
  render(<App />);
  const titleElement = screen.getByText(/Temperature Converter/i);
  expect(titleElement).toBeInTheDocument();
});