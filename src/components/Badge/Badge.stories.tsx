import type { Meta, StoryObj } from '@storybook/react-vite';
import { screen } from '@testing-library/react';

// import { render } from '@testing-library/react';

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

export const SmallPinkBadge: Story = {
  args: {
    text: 'small pink badge text',
    variant: 'pink',
    size: 'sm',
  },
  play: async ({ canvasElement }) => {
    const text = await screen.findByText('badge', undefined, {
      container: canvasElement,
    });
    expect(text).toBeInTheDocument();
    const container = canvasElement.firstElementChild!;
    expect(container).toHaveClass('bg-custom-pink text-white');
  },
};
export const LargePinkBadge: Story = {
  args: {
    text: 'large pink badge text',
    variant: 'pink',
    size: 'lg',
  },
};
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
export const SmallPinkBadgeWithRemoveButton: Story = {
  args: {
    text: 'small pink badge with remove button text',
    variant: 'pink',
    size: 'sm',
    handleRemove: () => console.log('remove'),
  },
};
export const LargePinkBadgeWithRemoveButton: Story = {
  args: {
    text: 'large pink badge with remove button text',
    variant: 'pink',
    size: 'lg',
    handleRemove: () => console.log('remove'),
  },
};
export const SmallMainBadgeWithRemoveButton: Story = {
  args: {
    text: 'small main badge with remove button text',
    size: 'sm',
    handleRemove: () => console.log('remove'),
  },
};
export const LargeMainBadgeWithRemoveButton: Story = {
  args: {
    text: 'large main badge with remove button text',
    size: 'lg',
    handleRemove: () => console.log('remove'),
  },
};
