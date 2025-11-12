import type { Meta, StoryObj } from '@storybook/react-vite';
import ExperienceSection from './ExperienceSection';
import { expect, within } from 'storybook/test';
import { ExperienceSectionProps } from '../../interfaces';

const meta = {
  title: 'Portfolio/ExperienceSection',
  component: ExperienceSection,
  tags: ['autodocs'],
} satisfies Meta<typeof ExperienceSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const experienceSectionAssertions = (
  experienceSection: HTMLElement,
  args: ExperienceSectionProps
) => {
  expect(experienceSection).toBeInTheDocument();
  expect(experienceSection).toHaveClass('flex flex-col gap-6 text-white');
  // title
  if (args.title && args?.title.length > 0) {
    const title = within(experienceSection).getByLabelText('experience-title');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe(args.title);
  }
  // text
  if (args.text && args?.text.length > 0) {
    const text = within(experienceSection).getByLabelText(
      'experience-description'
    );
    expect(text).toBeInTheDocument();
    expect(text.textContent).toBe(args.text);
  }
  // list
  if (args.list && args?.list.length > 0) {
    const list = within(experienceSection).getByLabelText('experience-list');
    expect(list).toBeInTheDocument();
    const listElements = within(list).getAllByLabelText(
      'experience-list-element'
    );
    expect(listElements).toHaveLength(args.list.length);
  }
};

export const ExampleExperienceSection: Story = {
  // decorators: [
  //   (Story) => (
  //     <div className="bg-slate-800 absolute inset-0 bg-pattern bg-no-repeat bg-center bg-cover bg-fixed w-full flex justify-center items-center">
  //       <Story />
  //     </div>
  //   ),
  // ],
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
  play: async ({ canvas, args }) => {
    const experienceSection = await canvas.findByLabelText(
      'experience-section'
    );
    experienceSectionAssertions(experienceSection, args);
  },
};
