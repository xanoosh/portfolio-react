import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fireEvent, fn } from 'storybook/test';
import Badge from './Badge';
import { within } from '@testing-library/react';

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

const onClickMockFn = fn();

const badgeTestAssertions = (
  badge: HTMLElement,
  text: string,
  variant: 'main' | 'pink',
  size: 'sm' | 'lg',
  hasBtn?: boolean
) => {
  //badge tests
  expect(badge).toBeInTheDocument();
  expect(badge.textContent).toBe(text);
  expect(badge).toHaveClass(
    variant === 'main'
      ? 'bg-slate-900 text-slate-400'
      : 'bg-pink-600 text-white'
  );
  expect(badge).toHaveClass(
    size === 'sm'
      ? 'text-xs font-medium px-2.5 py-1'
      : 'text-sm font-lg px-4 py-1.5'
  );
  //remove button tests (optional)
  if (hasBtn) {
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
  play: async ({ canvas }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, 'small pink badge text', 'pink', 'sm');
  },
};
export const LargePinkBadge: Story = {
  args: {
    text: 'large pink badge text',
    variant: 'pink',
    size: 'lg',
  },
  play: async ({ canvas }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, 'large pink badge text', 'pink', 'lg');
  },
};
export const SmallMainBadge: Story = {
  args: {
    text: 'small main badge text',
    size: 'sm',
  },
  play: async ({ canvas }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, 'small main badge text', 'main', 'sm');
  },
};
export const LargeMainBadge: Story = {
  args: {
    text: 'large main badge text',
    size: 'lg',
  },
  play: async ({ canvas }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, 'large main badge text', 'main', 'lg');
  },
};
export const SmallPinkBadgeWithRemoveButton: Story = {
  args: {
    text: 'small pink badge with remove button text',
    variant: 'pink',
    size: 'sm',
    handleRemove: onClickMockFn,
  },
  play: async ({ canvas }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(
      badge,
      'small pink badge with remove button text',
      'pink',
      'sm',
      true
    );
  },
};
export const LargePinkBadgeWithRemoveButton: Story = {
  args: {
    text: 'large pink badge with remove button text',
    variant: 'pink',
    size: 'lg',
    handleRemove: onClickMockFn,
  },
  play: async ({ canvas }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(
      badge,
      'large pink badge with remove button text',
      'pink',
      'lg',
      true
    );
  },
};
export const SmallMainBadgeWithRemoveButton: Story = {
  args: {
    text: 'small main badge with remove button text',
    size: 'sm',
    handleRemove: onClickMockFn,
  },
  play: async ({ canvas }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(
      badge,
      'small main badge with remove button text',
      'main',
      'sm',
      true
    );
  },
};
export const LargeMainBadgeWithRemoveButton: Story = {
  args: {
    text: 'large main badge with remove button text',
    size: 'lg',
    handleRemove: onClickMockFn,
  },
  play: async ({ canvas }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(
      badge,
      'large main badge with remove button text',
      'main',
      'lg',
      true
    );
  },
};
