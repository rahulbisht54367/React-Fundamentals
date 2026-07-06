import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.localStorage.clear();
});

test('renders the Chrono time tracker with a reset stopwatch', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /chrono/i })).toBeInTheDocument();
  expect(screen.getByText('00:00:00.00')).toBeInTheDocument();
});

test('shows the empty state and disabled log button before tracking', () => {
  render(<App />);
  expect(screen.getByText(/no sessions logged yet/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /log session/i })).toBeDisabled();
});
