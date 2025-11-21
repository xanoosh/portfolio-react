import type { Meta, StoryObj } from '@storybook/react-vite';
import Error from './Error';
import { expect, within } from 'storybook/test';
import { ErrorProps } from '../../interfaces';

const errorTestAssertions = (errorComponent: HTMLElement, args: ErrorProps) => {
  expect(errorComponent).toBeInTheDocument();
  expect(errorComponent).toHaveClass(
    'flex justify-center items-center backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50'
  );
  const paragraph = within(errorComponent).getByLabelText('error-text');
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveClass('text-rose-600 font-semibold');
  expect(paragraph).toHaveTextContent(`Error: ${args.text}`);
};

const meta = {
  title: 'Portfolio/Error',
  component: Error,
  tags: ['autodocs'],
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleError: Story = {
  args: {
    text: 'example Error text',
  },
  play: async ({ canvas, args }) => {
    const errorComponent = canvas.getByLabelText('error-container');
    errorTestAssertions(errorComponent, args);
  },
};
