import { render, screen } from '@testing-library/react';
import Error from './Error';

describe('Error: ', () => {
  it('Should render error component if text prop is passed', () => {
    render(<Error text="text" />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
  it('Should not render error component if text prop is empty', () => {
    render(<Error text="" />);
    expect(() => screen.getByRole('alert')).toThrow();
  });
  it('Error component should have classes: "flex justify-center items-center backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50"', () => {
    render(<Error text="text" />);
    expect(screen.getByRole('alert')).toHaveClass(
      'text-rose-600 font-semibold'
    );
  });

  it('Error component should have text equal to: Error: text prop value', () => {
    const textValue = 'testing text value';
    render(<Error text={textValue} />);
    expect(screen.getByRole('alert')).toHaveTextContent(`Error: ${textValue}`);
  });
});
