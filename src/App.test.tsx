import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { persistor, store } from './store';

jest.mock('redux-persist/integration/react', () => ({
  PersistGate: ({ children }: { children: React.ReactNode }) => <>{children}</>, // Solo renderiza los hijos sin hacer nada
}));

test('renders learn react link', () => {
  render(<Provider store={store}><PersistGate loading={null} persistor={persistor}></PersistGate><App /></Provider>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
