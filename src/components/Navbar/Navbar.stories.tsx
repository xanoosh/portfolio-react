import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

const meta = {
  title: 'Portfolio/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleNavbar: Story = {
  args: {
    navigation: [
      { name: 'Element 1', link: '' },
      { name: 'Element 2', link: '' },
      { name: 'Element 3', link: '' },
    ],
  },
};
