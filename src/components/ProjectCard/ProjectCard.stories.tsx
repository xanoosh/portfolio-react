import type { Meta, StoryObj } from '@storybook/react-vite';
import ProjectCard from './ProjectCard';
import { expect, within } from 'storybook/test';
import { ProjectCardProps } from '../../interfaces';

const meta = {
  title: 'Portfolio/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const projectCardTestAssertions = (
  projectCard: HTMLElement,
  args: ProjectCardProps
) => {
  expect(projectCard).toBeInTheDocument();
  //title
  if (args?.title) {
    const title = within(projectCard).getByLabelText('project-card-title');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe(args.title);
  }
  //description
  if (args?.description) {
    const description = within(projectCard).getByLabelText(
      'project-card-description'
    );
    expect(description).toBeInTheDocument();
    expect(description.textContent).toBe(args.description);
  }
  //badges
  if (args?.badges && args?.badges.length > 0) {
    const badgesContainer = within(projectCard).getByLabelText(
      'project-card-skills'
    );
    expect(badgesContainer).toBeInTheDocument();
    const badges = within(badgesContainer).getAllByRole('badge');
    expect(badges).toHaveLength(args.badges.length);
  }
  //buttons
  if (args?.buttons && args?.buttons.length > 0) {
    const buttons = within(projectCard).getAllByRole('button');
    expect(buttons).toHaveLength(args.buttons.length);
  }
};

export const ExampleProjectCard: Story = {
  args: {
    title: 'example title',
    description: 'example project card description',
    badges: ['badge1', 'badge2'],
    buttons: [{ text: 'example button', url: '' }],
  },
  play: async ({ canvas, args }) => {
    const projectCard = canvas.getByLabelText('project-card');
    projectCardTestAssertions(projectCard, args);
  },
};

export const ProjectCardWithoutTitle: Story = {
  args: {
    title: '',
    description: 'project card without title',
    badges: ['badge1', 'badge2'],
    buttons: [{ text: 'example button', url: '' }],
  },
  play: async ({ canvas, args }) => {
    const projectCard = canvas.getByLabelText('project-card');
    projectCardTestAssertions(projectCard, args);
  },
};

export const ProjectCardWithoutDescription: Story = {
  args: {
    title: 'project card without description',
    description: '',
    badges: ['badge1', 'badge2'],
    buttons: [{ text: 'example button', url: '' }],
  },
  play: async ({ canvas, args }) => {
    const projectCard = canvas.getByLabelText('project-card');
    projectCardTestAssertions(projectCard, args);
  },
};

export const ProjectCardWithoutBadges: Story = {
  args: {
    title: 'project card without badges',
    description: 'this is project card without badges',
    badges: [],
    buttons: [{ text: 'example button', url: '' }],
  },
  play: async ({ canvas, args }) => {
    const projectCard = canvas.getByLabelText('project-card');
    projectCardTestAssertions(projectCard, args);
  },
};

export const ProjectCardWithoutButtons: Story = {
  args: {
    title: 'project card without buttons',
    description: 'this is project card without buttons',
    badges: ['badge1', 'badge2'],
    buttons: [],
  },
  play: async ({ canvas, args }) => {
    const projectCard = canvas.getByLabelText('project-card');
    projectCardTestAssertions(projectCard, args);
  },
};
