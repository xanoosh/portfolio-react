import type { Meta, StoryObj } from '@storybook/react-vite';
import TooltipComponent from './TooltipComponent';
import { expect, userEvent } from 'storybook/test';
import { TooltipProps } from '@radix-ui/react-tooltip';

const tooltipTestAssertions = async (
  tooltipTrigger: HTMLElement,
  args: TooltipProps
) => {
  if (args?.defaultOpen) {
    expect(tooltipTrigger).toHaveAttribute('data-state', 'instant-open');
    await new Promise((resolve) => setTimeout(resolve, args.delayDuration));
    await userEvent.unhover(tooltipTrigger);
    await new Promise((resolve) => setTimeout(resolve, args.delayDuration));
  }
  expect(tooltipTrigger).toBeInTheDocument();
  expect(tooltipTrigger).toHaveAttribute('data-state', 'closed');
  await userEvent.hover(tooltipTrigger);
  await new Promise((resolve) => setTimeout(resolve, args.delayDuration));
  expect(tooltipTrigger).toHaveAttribute('data-state', 'delayed-open');
  await userEvent.unhover(tooltipTrigger);
  await new Promise((resolve) => setTimeout(resolve, args.delayDuration));
  expect(tooltipTrigger).toHaveAttribute('data-state', 'closed');
};

const meta = {
  title: 'Portfolio/TooltipComponent',
  component: TooltipComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof TooltipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTooltipComponent: Story = {
  args: {
    text: 'tooltip text',
    defaultOpen: false,
    delayDuration: 300,
    children: (
      <p
        data-testid="tooltip-trigger"
        className="text-white underline cursor-pointer"
      >
        hover to see tooltip text
      </p>
    ),
  },
  play: async ({ canvas, args }) => {
    const tooltipTrigger = canvas.getByTestId('tooltip-trigger');
    tooltipTestAssertions(tooltipTrigger, args);
  },
};

export const InstantOpenTooltipComponent: Story = {
  args: {
    text: 'tooltip text',
    defaultOpen: false,
    delayDuration: 0,
    children: (
      <p
        data-testid="tooltip-trigger"
        className="text-white underline cursor-pointer"
      >
        hover to see tooltip text instantly
      </p>
    ),
  },
  play: async ({ canvas, args }) => {
    const tooltipTrigger = canvas.getByTestId('tooltip-trigger');
    tooltipTestAssertions(tooltipTrigger, args);
  },
};
export const DefaultOpenTooltipComponent: Story = {
  args: {
    text: 'tooltip text',
    defaultOpen: true,
    delayDuration: 300,
    children: (
      <p
        data-testid="tooltip-trigger"
        className="text-white underline cursor-pointer"
      >
        tooltip open on mount, hover to toggle.
      </p>
    ),
  },
  play: async ({ canvas, args }) => {
    const tooltipTrigger = canvas.getByTestId('tooltip-trigger');
    tooltipTestAssertions(tooltipTrigger, args);
  },
};
