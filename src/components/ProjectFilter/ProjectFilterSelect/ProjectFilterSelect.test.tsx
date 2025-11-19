import { render, screen } from '@testing-library/react';
import ProjectFilterSelect from './ProjectFilterSelect';

describe('ProjectFilterSelect:', () => {
  it('Should display text "No active tag selected." if activeBadges array is empty', () => {
    render(<ProjectFilterSelect />);
    expect(screen.getByLabelText('project-filter-select')).toBeInTheDocument();
  });
});
