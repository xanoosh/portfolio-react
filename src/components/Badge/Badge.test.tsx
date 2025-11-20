import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge: ', () => {
  it('Should render element with role badge', () => {
    render(<Badge text="badge" />);
    expect(screen.getByRole('badge')).toBeInTheDocument();
  });
  it('Should not render element if text prop is empty', () => {
    render(<Badge text="" />);
    expect(() => screen.getByRole('badge')).toThrow();
  });
  it('Should have text equal to the badge text prop', () => {
    render(<Badge text="badge" />);
    expect(screen.getByRole('badge')).toHaveTextContent('badge');
  });

  it('Should have classes bg-slate-900 text-slate-400 if variant prop was not passed', () => {
    render(<Badge text="badge" />);
    expect(screen.getByRole('badge')).toHaveClass(
      'bg-slate-900 text-slate-400'
    );
  });

  it('Should have classes bg-slate-900 text-slate-400 if variant prop is equal to main', () => {
    render(<Badge text="badge" variant="main" />);
    expect(screen.getByRole('badge')).toHaveClass(
      'bg-slate-900 text-slate-400'
    );
  });
  it('Should have classes bg-pink-600 text-white if variant prop is equal to pink', () => {
    render(<Badge text="badge" variant="pink" />);
    expect(screen.getByRole('badge')).toHaveClass('bg-pink-600 text-white');
  });

  it('Should have classes text-xs font-medium px-2.5 py-1 if size prop was not passed', () => {
    render(<Badge text="badge" />);
    expect(screen.getByRole('badge')).toHaveClass(
      'text-xs font-medium px-2.5 py-1'
    );
  });

  it('Should have classes text-xs font-medium px-2.5 py-1 if size prop is equal sm', () => {
    render(<Badge text="badge" size="sm" />);
    expect(screen.getByRole('badge')).toHaveClass(
      'text-xs font-medium px-2.5 py-1'
    );
  });

  it('Should have classes text-sm font-lg px-4 py-1.5 if size prop is equal lg', () => {
    render(<Badge text="badge" size="lg" />);
    expect(screen.getByRole('badge')).toHaveClass(
      'text-sm font-lg px-4 py-1.5'
    );
  });
});
