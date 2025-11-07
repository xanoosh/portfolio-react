import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button: ', () => {
  it('Should have text equal to the button text prop', () => {
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

  it('Should not display svg is icon prop is undefined', () => {
    const { container } = render(
      <Button url="" text="button" variant="primary" />
    );
    expect(container.querySelector('svg')).not.toBeInTheDocument();
  });

  it('Should display svg is icon prop is codeIcon', () => {
    const { container } = render(
      <Button url="" icon="codeIcon" text="button" variant="primary" />
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  it('Should display svg is icon prop is webIcon', () => {
    const { container } = render(
      <Button url="" icon="webIcon" text="button" variant="primary" />
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
