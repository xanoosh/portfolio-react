import type { Meta, StoryObj } from '@storybook/react-vite';
import ProjectFilterSelect from './ProjectFilterSelect';
import { expect } from 'storybook/test';

const meta = {
  title: 'Portfolio/ProjectFilter/ProjectFilterSelect',
  component: ProjectFilterSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectFilterSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const projectFilterSelectTestAssertions = (
  projectFilterSelect: HTMLElement
) => {
  expect(projectFilterSelect).toBeInTheDocument();
};

export const ExampleProjectFilter: Story = {
  args: {},
  play: async ({ canvas }) => {
    const projectFilterSelect = canvas.getByLabelText('project-filter-select');
    projectFilterSelectTestAssertions(projectFilterSelect);
  },
};
