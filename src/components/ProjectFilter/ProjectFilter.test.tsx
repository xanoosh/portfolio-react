import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProjectFilter from './ProjectFilter';

describe('Loader: ', () => {
  it('Should display text "no active badges available" if activeBadges array is empty', () => {
    render(
      <ProjectFilter
        activeBadges={[]}
        setActiveBadges={() => {}}
        handleBadgeClick={() => {}}
      />
    );
    expect(screen.getByText('no active badges available')).toBeInTheDocument();
  });
});
