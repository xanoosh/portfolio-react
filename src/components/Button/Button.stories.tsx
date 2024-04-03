import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
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

const buttonUnitTests = async (canvasElement: HTMLElement, text: string) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText(text);
  await expect(button).toBeInTheDocument();
};

export const ButtonPrimary: Story = {
  args: {
    text: 'example primary button text',
    url: '#',
    variant: 'primary',
  },
  play: ({ canvasElement }) =>
    buttonUnitTests(canvasElement, 'example primary button text'),
};

export const ButtonSecondary: Story = {
  args: {
    text: 'example secondary button text',
    url: '#',
    variant: 'secondary',
  },
  play: ({ canvasElement }) =>
    buttonUnitTests(canvasElement, 'example secondary button text'),
};

export const DisabledButtonPrimary: Story = {
  args: {
    text: 'example disabled primary button text',
    url: '#',
    variant: 'primary',
    disabled: true,
  },
  play: ({ canvasElement }) =>
    buttonUnitTests(canvasElement, 'example disabled primary button text'),
};

export const DisabledButtonSecondary: Story = {
  args: {
    text: 'example disabled secondary button text',
    url: '#',
    variant: 'secondary',
    disabled: true,
  },
  play: ({ canvasElement }) =>
    buttonUnitTests(canvasElement, 'example disabled secondary button text'),
};

export const ButtonPrimaryWebIcon: Story = {
  args: {
    text: 'example primary button with web icon',
    url: '#',
    variant: 'primary',
    icon: 'webIcon',
  },
  play: ({ canvasElement }) =>
    buttonUnitTests(canvasElement, 'example primary button with web icon'),
};

export const ButtonPrimaryCodeIcon: Story = {
  args: {
    text: 'example primary button with code icon',
    url: '#',
    variant: 'primary',
    icon: 'codeIcon',
  },
  play: ({ canvasElement }) =>
    buttonUnitTests(canvasElement, 'example primary button with code icon'),
};

export const ButtonSecondaryWebIcon: Story = {
  args: {
    text: 'example secondary button with web icon',
    url: '#',
    variant: 'secondary',
    icon: 'webIcon',
  },
  play: ({ canvasElement }) =>
    buttonUnitTests(canvasElement, 'example secondary button with web icon'),
};

export const ButtonSecondaryCodeIcon: Story = {
  args: {
    text: 'example secondary button with code icon',
    url: '#',
    variant: 'secondary',
    icon: 'codeIcon',
  },
  play: ({ canvasElement }) =>
    buttonUnitTests(canvasElement, 'example secondary button with code icon'),
};
