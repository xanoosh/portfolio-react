import type { Meta, StoryObj } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../../../.jest-test-results.json';
import Loader from './Loader';

const meta = {
  title: 'Portfolio/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  decorators: [withTests({ results })],
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleLoader: Story = {};
