import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fireEvent, fn } from 'storybook/test';
import Badge from './Badge';
import { within } from '@testing-library/react';
import { BadgeProps } from '../../interfaces';

const meta = {
  title: 'Portfolio/Badge',
  component: Badge,

  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

const onClickMockFn = fn();

const badgeTestAssertions = (badge: HTMLElement, args: BadgeProps) => {
  //badge tests
  expect(badge).toBeInTheDocument();
  expect(badge.textContent).toBe(args.text);
  expect(badge).toHaveClass(
    args.variant === 'pink'
      ? 'bg-pink-600 text-white'
      : 'bg-slate-900 text-slate-400'
  );
  expect(badge).toHaveClass(
    args.size === 'lg'
      ? 'text-sm font-lg px-4 py-1.5'
      : 'text-xs font-medium px-2.5 py-1'
  );
  //remove button tests (optional)
  if (args.handleRemove) {
    const badgeButton = within(badge).getByLabelText('close');
    expect(badgeButton).toBeInTheDocument();
    expect(onClickMockFn).not.toHaveBeenCalled();
    fireEvent.click(badgeButton);
    expect(onClickMockFn).toHaveBeenCalledTimes(1);
  }
};

export const SmallPinkBadge: Story = {
  args: {
    text: 'small pink badge text',
    variant: 'pink',
    size: 'sm',
  },
  play: async ({ canvas, args }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, args);
  },
};
export const LargePinkBadge: Story = {
  args: {
    text: 'large pink badge text',
    variant: 'pink',
    size: 'lg',
  },
  play: async ({ canvas, args }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, args);
  },
};
export const SmallMainBadge: Story = {
  args: {
    text: 'small main badge text',
    size: 'sm',
  },
  play: async ({ canvas, args }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, args);
  },
};
export const LargeMainBadge: Story = {
  args: {
    text: 'large main badge text',
    size: 'lg',
  },
  play: async ({ canvas, args }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, args);
  },
};
export const SmallPinkBadgeWithRemoveButton: Story = {
  args: {
    text: 'small pink badge with remove button text',
    variant: 'pink',
    size: 'sm',
    handleRemove: onClickMockFn,
  },
  play: async ({ canvas, args }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, args);
  },
};
export const LargePinkBadgeWithRemoveButton: Story = {
  args: {
    text: 'large pink badge with remove button text',
    variant: 'pink',
    size: 'lg',
    handleRemove: onClickMockFn,
  },
  play: async ({ canvas, args }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, args);
  },
};
export const SmallMainBadgeWithRemoveButton: Story = {
  args: {
    text: 'small main badge with remove button text',
    size: 'sm',
    handleRemove: onClickMockFn,
  },
  play: async ({ canvas, args }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, args);
  },
};
export const LargeMainBadgeWithRemoveButton: Story = {
  args: {
    text: 'large main badge with remove button text',
    size: 'lg',
    handleRemove: onClickMockFn,
  },
  play: async ({ canvas, args }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, args);
  },
};
