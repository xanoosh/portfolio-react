import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
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

const errorUnitTests = async (canvasElement: HTMLElement, text: string) => {
  const canvas = within(canvasElement);
  const errorText = canvas.getByText(text);
  await expect(errorText).toBeInTheDocument();
};

export const ExampleError: Story = {
  args: {
    text: 'example Error text',
  },
  play: ({ canvasElement }) =>
    errorUnitTests(canvasElement, 'Error: example Error text'),
};
