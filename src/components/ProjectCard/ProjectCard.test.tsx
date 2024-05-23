import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('ProjectCard: ', () => {
  it('Should display title if title prop was passed', () => {
    render(<ProjectCard title="ProjectCard title" />);
    expect(screen.getByText('ProjectCard title')).toBeInTheDocument();
  });

  it('Should display description if description prop was passed', () => {
    render(<ProjectCard description="ProjectCard description" />);
    expect(screen.getByText('ProjectCard description')).toBeInTheDocument();
  });

  it('Should display buttons if buttons array prop is passed & not empty', () => {
    render(
      <ProjectCard
        buttons={[
          { text: 'button1', url: '' },
          { text: 'button2', url: '' },
        ]}
      />
    );
    expect(screen.getByText('button1')).toBeInTheDocument();
    expect(screen.getByText('button2')).toBeInTheDocument();
  });

  it('Should display badges text if badges array prop is passed & not empty', () => {
    render(<ProjectCard badges={['badge1', 'badge2']} />);
    expect(screen.getByText('badge1')).toBeInTheDocument();
    expect(screen.getByText('badge2')).toBeInTheDocument();
  });
  const handleBadgeClickMock = jest.fn();
  it('handleBadgeClick should be called on badge click', () => {
    render(
      <ProjectCard
        badges={['badge1', 'badge2']}
        handleBadgeClick={handleBadgeClickMock}
      />
    );
    fireEvent.click(screen.getByText('badge1')!);
    expect(handleBadgeClickMock).toHaveBeenCalledTimes(1);
  });

  it('Badge should have classes bg-slate-900 text-slate-400 by default', () => {
    const { container } = render(<ProjectCard badges={['badge1']} />);
    expect(
      container.querySelector('.bg-slate-900.text-slate-400')
    ).toBeInTheDocument();
  });
  it('Badge should have classes bg-custom-pink text-white if badge text is included in activeBadges array', () => {
    const { container } = render(
      <ProjectCard badges={['badge1']} activeBadges={['badge1']} />
    );
    expect(
      container.querySelector('.bg-custom-pink.text-white')
    ).toBeInTheDocument();
  });
});
