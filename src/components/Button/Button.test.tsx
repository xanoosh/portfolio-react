import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button: ', () => {
  it('Should have text equal to the badge text prop', () => {
    render(<Button url="" text="button" />);
    expect(screen.getByText('button')).toBeInTheDocument();
  });

  it('Should have classes bg-custom-blue ring-custom-blue if variant prop was not passed', () => {
    const { container } = render(<Button url="" text="button" />);
    expect(container.firstChild).toHaveClass('bg-custom-blue ring-custom-blue');
  });

  it('Should have class bg-custom-blue ring-custom-blue if variant prop is equal to primary', () => {
    const { container } = render(
      <Button url="" text="button" variant="primary" />
    );
    expect(container.firstChild).toHaveClass('bg-custom-blue ring-custom-blue');
  });
});
