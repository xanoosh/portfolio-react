import { render, screen } from '@testing-library/react';
import Button from './Button';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Button: ', () => {
  it('Should renter element with role button', () => {
    render(<Button url="" text="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Should have text equal to the button text prop', () => {
    render(<Button url="" text="button" />);
    expect(screen.getByRole('button')).toHaveTextContent('button');
  });
  it('Should not render if text prop is empty', () => {
    render(<Button url="" text="" />);
    expect(() => screen.getByRole('button')).toThrow();
  });
  it('Should have classes bg-sky-700 ring-sky-700 if variant prop was not passed', () => {
    render(<Button url="" text="button" />);
    expect(screen.getByRole('button')).toHaveClass('bg-sky-700 ring-sky-700');
  });
  it('Should have class bg-sky-700 ring-sky-700 if variant prop is equal to primary', () => {
    render(<Button url="" text="button" variant="primary" />);
    expect(screen.getByRole('button')).toHaveClass('bg-sky-700 ring-sky-700');
  });
  it('Should have class bg-slate-900 ring-pink-600 if variant prop is equal to secondary', () => {
    render(<Button url="" text="button" variant="secondary" />);
    expect(screen.getByRole('button')).toHaveClass(
      'bg-slate-900 ring-pink-600'
    );
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
  it('Icon (svg) should have attribute aria-hidden="true"', () => {
    const { container } = render(
      <Button url="" icon="webIcon" text="button" variant="primary" />
    );
    expect(container.querySelector('svg')).toHaveAttribute(
      'aria-hidden',
      'true'
    );
  });
  // mock window.open function
  const onClickMockFn = vi.fn();
  window.open = onClickMockFn;
  it('Should call onClick function once on each button click', async () => {
    render(<Button url="" icon="webIcon" text="button" variant="primary" />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(onClickMockFn).toHaveBeenCalledTimes(1);
  });
  it('Should call onClick with arguments ("url", "_blank", "noopener,noreferrer")', async () => {
    render(<Button url="url" icon="webIcon" text="button" variant="primary" />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(onClickMockFn).toHaveBeenCalledWith(
      'url',
      '_blank',
      'noopener,noreferrer'
    );
  });
});
