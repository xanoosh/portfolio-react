import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge: ', () => {
  it('Should have text equal to the badge text prop', () => {
    render(<Badge text="badge" />);
    expect(screen.getByText('badge')).toBeInTheDocument();
  });

  it('Should have classes bg-slate-900 text-slate-400 if variant prop was not passed', () => {
    const { container } = render(<Badge text="badge" />);
    expect(container.firstChild).toHaveClass('bg-slate-900 text-slate-400');
  });

  it('Should have classes bg-slate-900 text-slate-400 if variant prop is equal to main', () => {
    const { container } = render(<Badge text="badge" variant="main" />);
    expect(container.firstChild).toHaveClass('bg-slate-900 text-slate-400');
  });
  it('Should have classes bg-pink-600 text-white if variant prop is equal to pink', () => {
    const { container } = render(<Badge text="badge" variant="pink" />);
    expect(container.firstChild).toHaveClass('bg-pink-600 text-white');
  });

  it('Should have classes text-xs font-medium px-2.5 py-1 if size prop was not passed', () => {
    const { container } = render(<Badge text="badge" />);
    expect(container.firstChild).toHaveClass('text-xs font-medium px-2.5 py-1');
  });

  it('Should have classes text-xs font-medium px-2.5 py-1 if size prop is equal sm', () => {
    const { container } = render(<Badge text="badge" size="sm" />);
    expect(container.firstChild).toHaveClass('text-xs font-medium px-2.5 py-1');
  });

  it('Should have classes text-sm font-lg px-4 py-1.5 if size prop is equal lg', () => {
    const { container } = render(<Badge text="badge" size="lg" />);
    expect(container.firstChild).toHaveClass('text-sm font-lg px-4 py-1.5');
  });
});
