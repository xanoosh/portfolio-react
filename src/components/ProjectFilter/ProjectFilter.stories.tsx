import type { Meta, StoryObj } from '@storybook/react-vite';
import ProjectFilter from './ProjectFilter';
import { ProjectFilterProps } from '../../interfaces';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Portfolio/ProjectFilter',
  component: ProjectFilter,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

const projectFilterTestAssertions = (
  projectFilter: HTMLElement,
  args: ProjectFilterProps
) => {
  expect(projectFilter).toBeInTheDocument();
  expect(within(projectFilter).getAllByRole('badge').length).toBe(
    args.activeBadges.length
  );
};

const badges = ['badge1', 'badge2', 'badge3'];
let activeBadges = ['badge1'];
const setActiveBadges = (newBadgesArray: string[]) => {
  return (activeBadges = [...newBadgesArray]);
};
const handleBadgeClick = (badgeName: string) => {
  activeBadges = activeBadges.filter((el) => el !== badgeName);
};

export const ExampleProjectFilter: Story = {
  args: {
    badges: badges,
    activeBadges: activeBadges,
    setActiveBadges: setActiveBadges,
    handleBadgeClick: handleBadgeClick,
  },

  play: async ({ canvas, args }) => {
    const projectFilter = canvas.getByLabelText('project-filter-component');
    projectFilterTestAssertions(projectFilter, args);
  },
};
