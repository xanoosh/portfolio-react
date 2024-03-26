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

export const ExampleBadge: Story = {
  args: {
    text: 'example badge text',
  },
};

export const AnotherBadge: Story = {
  args: {
    text: 'another badge text',
  },
};
