import type { Meta, StoryObj } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../../../.jest-test-results.json';
import Error from './Error';

const meta = {
  title: 'Portfolio/Error',
  component: Error,
  parameters: {
    layout: 'centered',
  },
  decorators: [withTests({ results })],
  tags: ['autodocs'],
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleError: Story = {
  args: {
    text: 'example Error text',
  },
};
