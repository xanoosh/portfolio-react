import type { Meta, StoryObj } from '@storybook/react-vite';
import Loader from './Loader';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Portfolio/Loader',
  component: Loader,
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

const loaderTestAssertions = (loaderComponent: HTMLElement) => {
  expect(loaderComponent).toBeInTheDocument();
  const loaderSvg = within(loaderComponent).getByTestId('oval-svg');
  expect(loaderSvg).toBeInTheDocument();
};

export const ExampleLoader: Story = {
  play: async ({ canvas }) => {
    const errorComponent = await canvas.findByLabelText('oval-loading');
    loaderTestAssertions(errorComponent);
  },
};
