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

export const ActiveFirstElementElementsNavbar: Story = {
  args: {
    navigation: [
      { name: 'Element 1', href: '', current: true },
      { name: 'Element 2', href: '', current: false },
      { name: 'Element 3', href: '', current: false },
    ],
  },
};

export const InactiveElementsNavbar: Story = {
  args: {
    navigation: [
      { name: 'Element 1', href: '', current: false },
      { name: 'Element 2', href: '', current: false },
      { name: 'Element 3', href: '', current: false },
    ],
  },
};
