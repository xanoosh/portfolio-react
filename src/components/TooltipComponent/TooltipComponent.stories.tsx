import type { Meta, StoryObj } from '@storybook/react-vite';
import TooltipComponent from './TooltipComponent';
import { expect, userEvent } from 'storybook/test';
import { TooltipProps } from '@radix-ui/react-tooltip';

const tooltipTestAssertions = async (
  tooltipTrigger: HTMLElement,
  args: TooltipProps
) => {
  const waitFn = () => new Promise((resolve) => setTimeout(resolve, 600));
  if (args?.defaultOpen) {
    await waitFn();
    expect(tooltipTrigger).toHaveAttribute('data-state', 'instant-open');
    await userEvent.unhover(tooltipTrigger);
    await waitFn();
    expect(tooltipTrigger).toHaveAttribute('data-state', 'closed');
    await waitFn();
    await userEvent.hover(tooltipTrigger);
    await waitFn();
    expect(tooltipTrigger).toHaveAttribute('data-state', 'delayed-open');
  } else {
    expect(tooltipTrigger).toBeInTheDocument();
    await waitFn();
    expect(tooltipTrigger).toHaveAttribute('data-state', 'closed');
    await userEvent.hover(tooltipTrigger);
    await waitFn();
    expect(tooltipTrigger).toHaveAttribute('data-state', 'delayed-open');
    await userEvent.unhover(tooltipTrigger);
    await waitFn();
    expect(tooltipTrigger).toHaveAttribute('data-state', 'closed');
  }
};

const meta = {
  title: 'Portfolio/TooltipComponent',
  component: TooltipComponent,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 backdrop-blur-sm p-6 h-60 w-90 rounded-lg shadow bg-slate-800/50 justify-center items-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TooltipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTooltipComponent: Story = {
  args: {
    title: 'Title',
    content: <span>Example tooltip text</span>,
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
    title: 'Title',
    content: <span>Example tooltip text</span>,
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
    title: 'Title',
    content: <span>Example tooltip text</span>,
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
