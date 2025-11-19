import type { Meta, StoryObj } from '@storybook/react-vite';
import ProjectFilterBadges from './ProjectFilterBadges';
import { expect } from 'storybook/test';

const meta = {
  title: 'Portfolio/ProjectFilter/ProjectFilterBadges',
  component: ProjectFilterBadges,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectFilterBadges>;

export default meta;
type Story = StoryObj<typeof meta>;

const projectFilterBadgesTestAssertions = (
  projectFilterBadges: HTMLElement
) => {
  expect(projectFilterBadges).toBeInTheDocument();
};

export const ExampleProjectFilter: Story = {
  args: {},
  play: async ({ canvas }) => {
    const projectFilterBadges = canvas.getByLabelText('project-filter-badges');
    projectFilterBadgesTestAssertions(projectFilterBadges);
  },
};
