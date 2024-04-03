import type { Meta, StoryObj } from '@storybook/react';
import { within, expect, fn } from '@storybook/test';
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

const badgeUnitTests = async (
  canvasElement: HTMLElement,
  text: string,
  handleRemove?: () => void
) => {
  const canvas = within(canvasElement);
  await expect(canvas.getByText(text)).toBeInTheDocument();
  if (handleRemove) {
    await expect(canvas.getByLabelText('Close')).toBeInTheDocument();
  }
};

export const SmallMainBadge: Story = {
  args: {
    text: 'small main badge text',
    size: 'sm',
  },
  play: ({ canvasElement }) =>
    badgeUnitTests(canvasElement, 'small main badge text'),
};

export const LargeMainBadge: Story = {
  args: {
    text: 'large main badge text',
    size: 'lg',
  },
  play: ({ canvasElement }) =>
    badgeUnitTests(canvasElement, 'large main badge text'),
};

export const SmallSuccessBadge: Story = {
  args: {
    text: 'small success badge text',
    variant: 'success',
    size: 'sm',
  },
  play: ({ canvasElement }) =>
    badgeUnitTests(canvasElement, 'small success badge text'),
};

export const LargeSuccessBadge: Story = {
  args: {
    text: 'large success badge text',
    variant: 'success',
    size: 'lg',
  },
  play: ({ canvasElement }) =>
    badgeUnitTests(canvasElement, 'large success badge text'),
};

export const SmallMainBadgeWithRemoveButton: Story = {
  args: {
    text: 'small main badge with remove button text',
    size: 'sm',
    handleRemove: () => {
      fn();
    },
  },
  play: ({ args, canvasElement }) =>
    badgeUnitTests(
      canvasElement,
      'small main badge with remove button text',
      args.handleRemove
    ),
};
export const LargeMainBadgeWithRemoveButton: Story = {
  args: {
    text: 'large main badge with remove button text',
    size: 'lg',
    handleRemove: () => console.log('remove'),
  },
  play: ({ canvasElement }) =>
    badgeUnitTests(canvasElement, 'large main badge with remove button text'),
};

export const SmallSuccessBadgeWithRemoveButton: Story = {
  args: {
    text: 'small success badge with remove button text',
    variant: 'success',
    size: 'sm',
    handleRemove: () => console.log('remove'),
  },
  play: ({ canvasElement }) =>
    badgeUnitTests(
      canvasElement,
      'small success badge with remove button text'
    ),
};
export const LargeSuccessBadgeWithRemoveButton: Story = {
  args: {
    text: 'large success badge with remove button text',
    variant: 'success',
    size: 'lg',
    handleRemove: () => console.log('remove'),
  },
  play: ({ canvasElement }) =>
    badgeUnitTests(
      canvasElement,
      'large success badge with remove button text'
    ),
};
