import type { Meta, StoryObj } from '@storybook/react-vite';
import ProjectFilterTooltip from './ProjectFilterTooltip';
import { expect } from 'storybook/test';

const meta = {
  title: 'Portfolio/ProjectFilter/projectFilterTooltip',
  component: ProjectFilterTooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectFilterTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const projectFilterTooltipTestAssertions = (
  projectFilterTooltip: HTMLElement
) => {
  expect(projectFilterTooltip).toBeInTheDocument();
};

export const ExampleProjectFilter: Story = {
  args: {},
  play: async ({ canvas }) => {
    const projectFilterTooltip = canvas.getByLabelText(
      'project-filter-tooltip'
    );
    projectFilterTooltipTestAssertions(projectFilterTooltip);
  },
};
