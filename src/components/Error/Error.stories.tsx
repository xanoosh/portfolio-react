import type { Meta, StoryObj } from '@storybook/react-vite';
import Error from './Error';
import { expect } from 'storybook/test';
import { ErrorProps } from '../../interfaces';

const errorTestAssertions = (errorComponent: HTMLElement, args: ErrorProps) => {
  expect(errorComponent).toBeInTheDocument();
  expect(errorComponent).toHaveClass('text-rose-600 font-semibold');
  expect(errorComponent).toHaveTextContent(`Error: ${args.text}`);
};

const meta = {
  title: 'Portfolio/Error',
  component: Error,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 backdrop-blur-sm px-12 py-6 rounded-lg shadow bg-slate-800/50 justify-center items-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleError: Story = {
  args: {
    text: 'example Error text',
  },
  play: async ({ canvas, args }) => {
    const errorComponent = canvas.getByRole('alert');
    errorTestAssertions(errorComponent, args);
  },
};
