import type { Meta, StoryObj } from '@storybook/react';
import ProjectCard from './ProjectCard';

const meta = {
  title: 'Portfolio/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleProjectCard: Story = {
  args: {
    title: 'example title',
    description: 'example project card description',
    badges: ['badge1', 'badge2'],
    buttons: [{ name: 'example button', url: '' }],
  },
};
