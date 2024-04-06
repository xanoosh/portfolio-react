import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge tests', () => {
  it('Should have text equal to the badge text prop', () => {
    render(<Badge text="badge" />);
    expect(screen.getByText('badge')).toBeInTheDocument();
  });

  it('Should have classes bg-slate-400 text-slate-700 if variant prop was not passed', () => {
    const { container } = render(<Badge text="badge" />);
    expect(container.firstChild).toHaveClass('bg-slate-400 text-slate-700');
  });

  it('Should have classes bg-slate-400 text-slate-700 if variant prop is equal to main', () => {
    const { container } = render(<Badge text="badge" variant="main" />);
    expect(container.firstChild).toHaveClass('bg-slate-400 text-slate-700');
  });
});
