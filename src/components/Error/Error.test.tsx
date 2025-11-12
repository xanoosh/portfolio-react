import { render, screen } from '@testing-library/react';
import Error from './Error';

describe('Error: ', () => {
  it('Should render error component if text prop is passed', () => {
    render(<Error text="text" />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
  it('Error component should have class text-rose-600', () => {
    render(<Error text="text" />);
    expect(screen.getByRole('alert')).toHaveClass('text-rose-600');
  });
  it('Error component should have text equal to: Error: text prop value', () => {
    render(<Error text="text" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Error: text');
  });
});
