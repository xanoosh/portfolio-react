import type { Meta, StoryObj } from '@storybook/react';
import { within, expect, fn } from '@storybook/test';
import Badge from './Badge';

// import testResults from '../../../test-output.json';
// import { withTests } from '@storybook/addon-jest';

const meta = {
  title: 'Portfolio/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  // decorators: [withTests({ testResults })],
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

export const SmallPinkBadge: Story = {
  args: {
    text: 'small pink badge text',
    variant: 'pink',
    size: 'sm',
  },
  play: ({ canvasElement }) =>
    badgeUnitTests(canvasElement, 'small pink badge text'),
};

export const LargePinkBadge: Story = {
  args: {
    text: 'large pink badge text',
    variant: 'pink',
    size: 'lg',
  },
  play: ({ canvasElement }) =>
    badgeUnitTests(canvasElement, 'large pink badge text'),
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

export const SmallPinkBadgeWithRemoveButton: Story = {
  args: {
    text: 'small pink badge with remove button text',
    variant: 'pink',
    size: 'sm',
    handleRemove: () => console.log('remove'),
  },
  play: ({ canvasElement }) =>
    badgeUnitTests(canvasElement, 'small pink badge with remove button text'),
};
export const LargePinkBadgeWithRemoveButton: Story = {
  args: {
    text: 'large pink badge with remove button text',
    variant: 'pink',
    size: 'lg',
    handleRemove: () => console.log('remove'),
  },
  play: ({ canvasElement }) =>
    badgeUnitTests(canvasElement, 'large pink badge with remove button text'),
};
