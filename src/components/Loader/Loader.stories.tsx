import type { Meta, StoryObj } from '@storybook/react-vite';
import Loader from './Loader';

const meta = {
  title: 'Portfolio/Loader',
  component: Loader,
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleLoader: Story = {};
