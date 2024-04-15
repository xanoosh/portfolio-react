import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ExperienceSection from './ExperienceSection';

describe('ExperienceSection: ', () => {
  it('Should have title equal to the title prop', () => {
    render(<ExperienceSection title="title" />);
    expect(screen.getByText('title')).toBeInTheDocument();
  });
  it('Should have text equal to the text prop', () => {
    render(<ExperienceSection text="text" />);
    expect(screen.getByText('text')).toBeInTheDocument();
  });
  it('Should display ol if list prop length > 0', () => {
    const { container } = render(
      <ExperienceSection
        list={[{ title: 'title', date: 'date', responsibilities: [] }]}
      />
    );
    expect(container.querySelector('ol')).toBeInTheDocument();
  });
  it('Should display ul if list prop has responsibilities array with strings', () => {
    const { container } = render(
      <ExperienceSection
        list={[{ title: 'title', date: 'date', responsibilities: ['string'] }]}
      />
    );
    expect(container.querySelector('ol')).toBeInTheDocument();
  });
  it('Should display responsibility text from list prop', () => {
    render(
      <ExperienceSection
        list={[
          {
            title: 'title',
            date: 'date',
            responsibilities: ['responsibility'],
          },
        ]}
      />
    );
    expect(screen.getByText('responsibility')).toBeInTheDocument();
  });
});
