import type { Meta, StoryObj } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../../../.jest-test-results.json';
import Button from './Button';

const meta = {
  title: 'Portfolio/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  decorators: [withTests({ results })],
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonPrimary: Story = {
  args: {
    text: 'example primary button text',
    url: '#',
    variant: 'primary',
  },
};

export const ButtonPink: Story = {
  args: {
    text: 'example pink button text',
    url: '#',
    variant: 'pink',
  },
};
export const ButtonSecondary: Story = {
  args: {
    text: 'example secondary button text',
    url: '#',
    variant: 'secondary',
  },
};
export const DisabledButtonPrimary: Story = {
  args: {
    text: 'example disabled primary button text',
    url: '#',
    variant: 'primary',
    disabled: true,
  },
};
export const DisabledButtonPink: Story = {
  args: {
    text: 'example disabled pink button text',
    url: '#',
    variant: 'pink',
    disabled: true,
  },
};
export const DisabledButtonSecondary: Story = {
  args: {
    text: 'example disabled secondary button text',
    url: '#',
    variant: 'secondary',
    disabled: true,
  },
};
export const ButtonPrimaryWebIcon: Story = {
  args: {
    text: 'example primary button with web icon',
    url: '#',
    variant: 'primary',
    icon: 'webIcon',
  },
};
export const ButtonPrimaryCodeIcon: Story = {
  args: {
    text: 'example primary button with code icon',
    url: '#',
    variant: 'primary',
    icon: 'codeIcon',
  },
};
export const ButtonPinkWebIcon: Story = {
  args: {
    text: 'example pink button with web icon',
    url: '#',
    variant: 'pink',
    icon: 'webIcon',
  },
};
export const ButtonPinkCodeIcon: Story = {
  args: {
    text: 'example pink button with code icon',
    url: '#',
    variant: 'pink',
    icon: 'codeIcon',
  },
};
export const ButtonSecondaryWebIcon: Story = {
  args: {
    text: 'example secondary button with web icon',
    url: '#',
    variant: 'secondary',
    icon: 'webIcon',
  },
};
export const ButtonSecondaryCodeIcon: Story = {
  args: {
    text: 'example secondary button with code icon',
    url: '#',
    variant: 'secondary',
    icon: 'codeIcon',
  },
};
