import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import { within, expect } from '@storybook/test';
import Navbar from './Navbar';

const meta = {
  title: 'Portfolio/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: withRouter,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const navbarUnitTests = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  await expect(canvas.getByText('firstEl')).toBeInTheDocument();
  await expect(canvas.getByText('secondEl')).toBeInTheDocument();
  await expect(canvas.getByText('thirdEl')).toBeInTheDocument();
};

export const ExampleNavbar: Story = {
  args: {
    navigation: [
      { name: 'firstEl', link: '' },
      { name: 'secondEl', link: '' },
      { name: 'thirdEl', link: '' },
    ],
    storybookLink: '#',
  },
  play: ({ canvasElement }) => navbarUnitTests(canvasElement),
};
