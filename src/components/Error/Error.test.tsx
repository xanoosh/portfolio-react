import { render, screen } from '@testing-library/react';
import Error from './Error';

describe('Error: ', () => {
  it('Should render error component if text prop is passed', () => {
    render(<Error text="text" />);
    expect(screen.getByLabelText('error-container')).toBeInTheDocument();
  });
  it('Should not render error component if text prop is empty', () => {
    render(<Error text="" />);
    expect(() => screen.getByLabelText('error-container')).toThrow();
  });
  it('Error component should have classes: "flex justify-center items-center backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50"', () => {
    render(<Error text="text" />);
    expect(screen.getByLabelText('error-container')).toHaveClass(
      'flex justify-center items-center backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50'
    );
  });
  it('Error component paragraph should render', () => {
    render(<Error text="text" />);
    expect(screen.getByLabelText('error-text')).toBeInTheDocument();
  });
  it('Error component paragraph should have class text-rose-600', () => {
    render(<Error text="text" />);
    expect(screen.getByLabelText('error-text')).toHaveClass(
      'text-rose-600 font-semibold'
    );
  });
  it('Error component paragraph should have text equal to: Error: text prop value', () => {
    const textValue = 'testing text value';
    render(<Error text={textValue} />);
    expect(screen.getByLabelText('error-container')).toHaveTextContent(
      `Error: ${textValue}`
    );
  });
});
