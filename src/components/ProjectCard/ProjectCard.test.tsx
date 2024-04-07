import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('Loader: ', () => {
  it('Should have text equal to the badge text prop', () => {
    render(
      <ProjectCard
        title="ProjectCard title"
        description="ProjectCard description"
        badges={['badge1', 'badge2']}
        buttons={[
          { text: 'button1', url: '' },
          { text: 'button2', url: '' },
        ]}
      />
    );
    expect(screen.getByText('ProjectCard title')).toBeInTheDocument();
  });
});
