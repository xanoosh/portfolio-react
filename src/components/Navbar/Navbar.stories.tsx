import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import { withTests } from '@storybook/addon-jest';
import results from '../../../.jest-test-results.json';
import Navbar from './Navbar';

const meta = {
  title: 'Portfolio/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  decorators: [withTests({ results }), withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleNavbar: Story = {
  args: {
    navigation: [
      { name: 'firstEl', link: '' },
      { name: 'secondEl', link: '' },
      { name: 'thirdEl', link: '' },
    ],
    storybookLink: '#',
  },
};
