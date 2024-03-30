import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta = {
  title: 'Portfolio/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallMainBadge: Story = {
  args: {
    text: 'small main badge text',
    size: 'sm',
  },
};

export const LargeMainBadge: Story = {
  args: {
    text: 'large main badge text',
    size: 'lg',
  },
};

export const SmallSuccessBadge: Story = {
  args: {
    text: 'small success badge text',
    variant: 'success',
    size: 'sm',
  },
};

export const LargeSuccessBadge: Story = {
  args: {
    text: 'large success badge text',
    variant: 'success',
    size: 'lg',
  },
};

export const SmallMainBadgeWithRemoveButton: Story = {
  args: {
    text: 'small success badge with remove button text',
    size: 'sm',
    handleRemove: () => console.log('remove'),
  },
};
export const LargeMainBadgeWithRemoveButton: Story = {
  args: {
    text: 'large success badge with remove button text',
    size: 'lg',
    handleRemove: () => console.log('remove'),
  },
};

export const SmallSuccessBadgeWithRemoveButton: Story = {
  args: {
    text: 'small success badge with remove button text',
    variant: 'success',
    size: 'sm',
    handleRemove: () => console.log('remove'),
  },
};
export const LargeSuccessBadgeWithRemoveButton: Story = {
  args: {
    text: 'large success badge with remove button text',
    variant: 'success',
    size: 'lg',
    handleRemove: () => console.log('remove'),
  },
};
