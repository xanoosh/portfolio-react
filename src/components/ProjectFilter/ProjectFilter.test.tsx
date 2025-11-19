import { render, screen } from '@testing-library/react';
import ProjectFilter from './ProjectFilter';

describe('ProjectFilter:', () => {
  it('Should display text "No active tag selected." if activeBadges array is empty', () => {
    render(<ProjectFilter />);
    expect(
      screen.getByLabelText('project-filter-component')
    ).toBeInTheDocument();
  });
});
