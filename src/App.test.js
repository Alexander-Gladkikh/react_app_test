import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/hello world/i);
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('renders learn react ',  async () => {
    render(<App />);
    const helloWorldElem = await screen.findByText(/data/i)
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloWorldElem).toHaveStyle({color: 'red'});
  });
  test('Click event', () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn')
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  })
})

