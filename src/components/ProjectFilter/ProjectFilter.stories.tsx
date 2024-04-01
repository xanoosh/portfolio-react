import type { Meta, StoryObj } from '@storybook/react';
import ProjectFilter from './ProjectFilter';
import { useState } from 'react';

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

const ExampleProjectFilterRender = () => {
  const [activeBadges, setActiveBadges] = useState<string[]>([]);
  const handleBadgeClick = (badgeName: string) => {
    if (activeBadges.includes(badgeName)) {
      setActiveBadges((prev) => prev.filter((el) => el !== badgeName));
    } else {
      setActiveBadges((prev) => [...prev, badgeName]);
    }
  };
  return (
    <ProjectFilter
      activeBadges={activeBadges}
      setActiveBadges={setActiveBadges}
      handleBadgeClick={handleBadgeClick}
    />
  );
};

export const ExampleProjectFilter: Story = {
  render: () => <ExampleProjectFilterRender />,
};
