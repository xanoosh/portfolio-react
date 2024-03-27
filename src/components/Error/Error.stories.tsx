import type { Meta, StoryObj } from '@storybook/react';
import Error from './Error';

const meta = {
  title: 'Portfolio/Error',
  component: Error,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleError: Story = {
  args: {
    text: 'example Error text',
  },
};

export const AnotherError: Story = {
  args: {
    text: 'another Error text',
  },
};
