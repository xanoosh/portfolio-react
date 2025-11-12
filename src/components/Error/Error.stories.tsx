import type { Meta, StoryObj } from '@storybook/react-vite';
import Error from './Error';
import { expect } from 'storybook/test';
import { ErrorProps } from '../../interfaces';

const errorTestAssertions = (errorComponent: HTMLElement, args: ErrorProps) => {
  expect(errorComponent).toBeInTheDocument();
  expect(errorComponent).toHaveClass('text-rose-600');
  if (args.text.length > 0) {
    expect(errorComponent.textContent).toBe(`Error: ${args.text}`);
  } else {
    expect(errorComponent).not.toHaveTextContent(`Error: ${args.text}`);
  }
};

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
  play: async ({ canvas, args }) => {
    const errorComponent = await canvas.findByRole('alert');
    errorTestAssertions(errorComponent, args);
  },
};
