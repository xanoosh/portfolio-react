import type { Meta, StoryObj } from '@storybook/react-vite';
import Navbar from './Navbar';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { expect, userEvent } from 'storybook/test';

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
      { name: 'Home', link: '/' },
      { name: 'About', link: '/about' },
    ],
    storybookLink: '#',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex gap-10 flex-col">
                <div className="overflow-hidden rounded-lg">
                  <Story />
                </div>
                <p className="text-white text-center">Home Page</p>
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="flex gap-10 flex-col">
                <div className="overflow-hidden rounded-lg">
                  <Story />
                </div>
                <p className="text-white text-center">About Page</p>
              </div>
            }
          />
        </Routes>
      </MemoryRouter>
    ),
  ],
  play: async ({ canvas }) => {
    expect(canvas.getByLabelText('main-navigation')).toBeInTheDocument();
    expect(await canvas.findByText('Home Page')).toBeInTheDocument();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //about nav click
    await userEvent.click(canvas.getByText('About'));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(await canvas.findByText('About Page')).toBeInTheDocument();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //home nav click
    await userEvent.click(canvas.getByText('Home'));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(await canvas.findByText('Home Page')).toBeInTheDocument();
  },
};
