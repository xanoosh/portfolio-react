import type { Meta, StoryObj } from '@storybook/react-vite';
import ProjectFilter from './ProjectFilter';
import { expect, within, userEvent } from 'storybook/test';

const meta = {
  title: 'Portfolio/ProjectFilter',
  component: ProjectFilter,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

const waitFn = () => new Promise((resolve) => setTimeout(resolve, 800));

const projectFilterTestAssertions = async (projectFilter: HTMLElement) => {
  expect(projectFilter).toBeInTheDocument();
  await waitFn();
  const tooltip = within(projectFilter).getByLabelText(
    'project-filter-tooltip'
  );
  await userEvent.hover(tooltip);
  await waitFn();
  await userEvent.unhover(tooltip);
  await waitFn();
  const select = within(projectFilter).getByLabelText('project-filter-select');
  expect(select).toBeInTheDocument();
  await waitFn();
  await userEvent.click(select);
  const options = within(projectFilter).getAllByRole('option');
  await waitFn();
  await userEvent.click(options[0]);
  await waitFn();
  await userEvent.click(options[1]);
  await waitFn();
  await userEvent.click(options[2]);
  await waitFn();
  await userEvent.click(select);
};

export const ExampleProjectFilter: Story = {
  args: {},

  play: async ({ canvas }) => {
    const projectFilter = canvas.getByLabelText('project-filter-component');
    projectFilterTestAssertions(projectFilter);
  },
};
