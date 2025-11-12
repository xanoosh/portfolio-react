import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';
import { within } from '@testing-library/react';
import { expect, fireEvent, fn } from 'storybook/test';
import { ButtonProps } from '../../interfaces';

const meta = {
  title: 'Portfolio/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const onClickMockFn = fn();
window.open = onClickMockFn;

const buttonTestAssertions = (btn: HTMLElement, args: ButtonProps) => {
  // button tests
  expect(btn).toBeInTheDocument();
  expect(btn.textContent).toBe(args.text);
  expect(btn).toHaveClass(
    args.variant === 'secondary'
      ? 'bg-slate-900 ring-pink-600 text-pink-600'
      : 'bg-sky-700 ring-sky-700 text-white'
  );
  // click event tests, disabled/enabled tests
  expect(onClickMockFn).not.toHaveBeenCalled();
  fireEvent.click(btn);
  expect(onClickMockFn).toHaveBeenCalledTimes(args?.disabled ? 0 : 1);
  if (!args?.disabled) {
    expect(window.open).toHaveBeenCalledWith(
      args.url,
      '_blank',
      'noopener,noreferrer'
    );
  }
  if (args.disabled) {
    expect(btn).toHaveClass('cursor-not-allowed opacity-70');
    expect(window.open).not.toHaveBeenCalledWith(
      args?.url,
      '_blank',
      'noopener,noreferrer'
    );
  }
  //button icon tests
  if (args?.icon) {
    const btnIcon = within(btn).getByLabelText('icon');
    expect(btnIcon).toBeInTheDocument();
    expect(btnIcon).toHaveAttribute('aria-hidden', 'true');
  }
};

export const ButtonPrimary: Story = {
  args: {
    text: 'example primary button text',
    url: '#',
    variant: 'primary',
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button');
    buttonTestAssertions(button, args);
  },
};

export const ButtonSecondary: Story = {
  args: {
    text: 'example secondary button text',
    url: '#',
    variant: 'secondary',
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button');
    buttonTestAssertions(button, args);
  },
};

export const DisabledButtonPrimary: Story = {
  args: {
    text: 'example disabled primary button text',
    url: '#',
    variant: 'primary',
    disabled: true,
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button');
    buttonTestAssertions(button, args);
  },
};

export const DisabledButtonSecondary: Story = {
  args: {
    text: 'example disabled secondary button text',
    url: '#',
    variant: 'secondary',
    disabled: true,
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button');
    buttonTestAssertions(button, args);
  },
};
export const ButtonPrimaryWebIcon: Story = {
  args: {
    text: 'example primary button with web icon',
    url: '#',
    variant: 'primary',
    icon: 'webIcon',
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button');
    buttonTestAssertions(button, args);
  },
};
export const ButtonPrimaryCodeIcon: Story = {
  args: {
    text: 'example primary button with code icon',
    url: '#',
    variant: 'primary',
    icon: 'codeIcon',
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button');
    buttonTestAssertions(button, args);
  },
};

export const ButtonSecondaryWebIcon: Story = {
  args: {
    text: 'example secondary button with web icon',
    url: '#',
    variant: 'secondary',
    icon: 'webIcon',
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button');
    buttonTestAssertions(button, args);
  },
};

export const ButtonSecondaryCodeIcon: Story = {
  args: {
    text: 'example secondary button with code icon',
    url: '#',
    variant: 'secondary',
    icon: 'codeIcon',
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button');
    buttonTestAssertions(button, args);
  },
};
