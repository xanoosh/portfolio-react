import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProjectFilter from './ProjectFilter';

describe('ProjectFilter: ', () => {
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
  it('Should display badges if activeBadges array is not empty', () => {
    render(
      <ProjectFilter
        activeBadges={['badge1', 'badge2']}
        setActiveBadges={() => {}}
        handleBadgeClick={() => {}}
      />
    );
    expect(screen.getByText('badge1')).toBeInTheDocument();
    expect(screen.getByText('badge2')).toBeInTheDocument();
  });
});
