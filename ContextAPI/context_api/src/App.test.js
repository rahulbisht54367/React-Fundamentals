import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserProvider from './context/UserConext';
import App from './App';

test('renders home page by default', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
});
