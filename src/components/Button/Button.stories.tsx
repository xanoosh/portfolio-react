import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Portfolio/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonPrimary: Story = {
  args: {
    text: 'example primary button text',
    url: '#',
    variant: 'primary',
    disabled: false,
  },
};

export const ButtonSecondary: Story = {
  args: {
    text: 'example secondary button text',
    url: '#',
    variant: 'secondary',
    disabled: false,
  },
};

export const DisabledButtonPrimary: Story = {
  args: {
    text: 'example primary button text',
    url: '#',
    variant: 'primary',
    disabled: true,
  },
};

export const DisabledButtonSecondary: Story = {
  args: {
    text: 'example secondary button text',
    url: '#',
    variant: 'secondary',
    disabled: true,
  },
};
