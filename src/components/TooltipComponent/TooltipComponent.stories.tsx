import type { Meta, StoryObj } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../../../.jest-test-results.json';
import TooltipComponent from './TooltipComponent';

const meta = {
  title: 'Portfolio/TooltipComponent',
  component: TooltipComponent,
  parameters: {
    layout: 'centered',
  },
  decorators: [withTests({ results })],
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
