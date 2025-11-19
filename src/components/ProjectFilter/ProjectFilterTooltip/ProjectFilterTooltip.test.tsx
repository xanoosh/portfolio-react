import { render, screen } from '@testing-library/react';
import ProjectFilterTooltip from './ProjectFilterTooltip';

describe('ProjectFilterTooltip:', () => {
  it('Should display text "No active tag selected." if activeBadges array is empty', () => {
    render(<ProjectFilterTooltip />);
    expect(screen.getByLabelText('project-filter-tooltip')).toBeInTheDocument();
  });
});
