import { render, screen } from '@testing-library/react';
import ProjectFilterBadges from './ProjectFilterBadges';

describe('ProjectFilterBadges:', () => {
  it('Should display div with label "project-filter-badges"', () => {
    render(<ProjectFilterBadges />);
    expect(screen.getByLabelText('project-filter-badges')).toBeInTheDocument();
  });
  it('Should display text "No active tag selected."', () => {
    render(<ProjectFilterBadges />);
    expect(screen.getByText('No active tag selected.')).toBeInTheDocument();
  });
});
