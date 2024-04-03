import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import Loader from './Loader';

const meta = {
  title: 'Portfolio/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

const loaderUnitTests = async (canvasElement: HTMLElement, text: string) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText(text);
  await expect(button).toBeInTheDocument();
};

export const ExampleLoader: Story = {
  play: ({ canvasElement }) => loaderUnitTests(canvasElement, 'LOADING'),
};
