import { render, screen } from '@testing-library/react';
import Error from './Error';

describe('Error: ', () => {
  it('Should have text equal to the error text prop', () => {
    render(<Error text="text" />);
    expect(screen.getByText('Error: text')).toBeInTheDocument();
  });
});
