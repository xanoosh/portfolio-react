import type { Meta, StoryObj } from '@storybook/react-vite';
import TooltipComponent from './TooltipComponent';

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
    delayDuration: 500,
    children: <p>hover to see tooltip text</p>,
  },
};

export const InstantOpenTooltipComponent: Story = {
  args: {
    text: 'tooltip text',
    defaultOpen: false,
    delayDuration: 0,
    children: <p>hover to see tooltip text instantly</p>,
  },
};
export const DefaultOpenTooltipComponent: Story = {
  args: {
    text: 'tooltip text',
    defaultOpen: true,
    delayDuration: 500,
    children: <p>tooltip open on mount, hover to toggle.</p>,
  },
};
