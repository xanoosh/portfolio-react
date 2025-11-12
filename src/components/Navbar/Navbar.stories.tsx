import type { Meta, StoryObj } from '@storybook/react-vite';
import Navbar from './Navbar';

const meta = {
  title: 'Portfolio/Navbar',
  component: Navbar,
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
