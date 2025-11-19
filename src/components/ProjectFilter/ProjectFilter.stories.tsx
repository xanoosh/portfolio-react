import type { Meta, StoryObj } from '@storybook/react-vite';
import ProjectFilter from './ProjectFilter';
import { expect } from 'storybook/test';

const meta = {
  title: 'Portfolio/ProjectFilter',
  component: ProjectFilter,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

const projectFilterTestAssertions = (projectFilter: HTMLElement) => {
  expect(projectFilter).toBeInTheDocument();
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

  play: async ({ canvas }) => {
    const projectFilter = canvas.getByLabelText('project-filter-component');
    projectFilterTestAssertions(projectFilter);
  },
};
