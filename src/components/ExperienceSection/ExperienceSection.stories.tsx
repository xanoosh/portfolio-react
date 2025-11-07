import type { Meta, StoryObj } from '@storybook/react-vite';
import ExperienceSection from './ExperienceSection';

const meta = {
  title: 'Portfolio/ExperienceSection',
  component: ExperienceSection,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExperienceSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleExperienceSection: Story = {
  args: {
    title: 'example title',
    text: 'example ExperienceSection text',
    list: [
      {
        title: 'example list title',
        date: 'example date string',
        responsibilities: [
          'example responsibility 1',
          'example responsibility 2',
          'example responsibility 3',
        ],
      },
    ],
  },
};
