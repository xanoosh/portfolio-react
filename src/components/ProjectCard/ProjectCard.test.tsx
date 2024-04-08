import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
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
  it('Should display badges.text if badges array prop is passed & not empty', () => {
    render(<ProjectCard badges={['badge1', 'badge2']} />);
    expect(screen.getByText('badge1')).toBeInTheDocument();
    expect(screen.getByText('badge2')).toBeInTheDocument();
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
});
