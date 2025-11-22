import { render, screen } from '@testing-library/react';
import ExperienceSection from './ExperienceSection';

describe('ExperienceSection: ', () => {
  it('Should render component', () => {
    render(<ExperienceSection />);
    expect(screen.getByLabelText('experience-section')).toBeInTheDocument();
  });

  it('Should render title if title prop is passed', () => {
    render(<ExperienceSection title="title" />);
    expect(screen.getByLabelText('experience-title')).toBeInTheDocument();
  });

  it('Should not render title if title prop is not passed', () => {
    render(<ExperienceSection />);
    expect(() => screen.getByLabelText('experience-title')).toThrow();
  });

  it('Should have title equal to the title prop', () => {
    render(<ExperienceSection title="title" />);
    expect(screen.getByLabelText('experience-title')).toHaveTextContent(
      'title'
    );
  });
  it('Should render description if text prop is passed', () => {
    render(<ExperienceSection text="text" />);
    expect(screen.getByLabelText('experience-description')).toBeInTheDocument();
  });
  it('Should not render description if text prop is not passed', () => {
    render(<ExperienceSection />);
    expect(() => screen.getByLabelText('experience-description')).toThrow();
  });
  it('Description should have text equal to the text prop', () => {
    render(<ExperienceSection text="text" />);
    expect(screen.getByLabelText('experience-description')).toHaveTextContent(
      'text'
    );
  });
  it('Should display list if list prop is passed', () => {
    render(
      <ExperienceSection
        list={[{ title: 'title', date: 'date', responsibilities: [] }]}
      />
    );
    expect(screen.getByLabelText('experience-list')).toBeInTheDocument();
  });
  it('Should not display list if list prop is not passed', () => {
    render(<ExperienceSection />);
    expect(() => screen.getByLabelText('experience-list')).toThrow();
  });
  it('Should display title string from list prop', () => {
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
    expect(screen.getByText('title')).toBeInTheDocument();
  });
  it('Should display date string from list prop', () => {
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
    expect(screen.getByText('date')).toBeInTheDocument();
  });
  it('Should display responsibility string from list prop', () => {
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
