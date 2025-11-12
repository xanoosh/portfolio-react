import type { Meta, StoryObj } from '@storybook/react-vite';
import ProjectCard from './ProjectCard';

const meta = {
  title: 'Portfolio/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleProjectCard: Story = {
  args: {
    title: 'example title',
    description: 'example project card description',
    badges: ['badge1', 'badge2'],
    buttons: [{ text: 'example button', url: '' }],
  },
};

export const ProjectCardWithoutTitle: Story = {
  args: {
    title: '',
    description: 'project card without title',
    badges: ['badge1', 'badge2'],
    buttons: [{ text: 'example button', url: '' }],
  },
};

export const ProjectCardWithoutDescription: Story = {
  args: {
    title: 'project card without description',
    description: '',
    badges: ['badge1', 'badge2'],
    buttons: [{ text: 'example button', url: '' }],
  },
};

export const ProjectCardWithoutBadges: Story = {
  args: {
    title: 'project card without badges',
    description: 'this is project card without badges',
    badges: [],
    buttons: [{ text: 'example button', url: '' }],
  },
};

export const ProjectCardWithoutButtons: Story = {
  args: {
    title: 'project card without buttons',
    description: 'this is project card without buttons',
    badges: ['badge1', 'badge2'],
    buttons: [],
  },
};
