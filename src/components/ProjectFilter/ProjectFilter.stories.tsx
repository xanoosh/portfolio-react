import type { Meta, StoryObj } from '@storybook/react';
import ProjectFilter from './ProjectFilter';

const meta = {
  title: 'Portfolio/ProjectFilter',
  component: ProjectFilter,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleProjectFilter: Story = {};
