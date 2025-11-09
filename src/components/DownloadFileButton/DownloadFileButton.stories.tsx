import type { Meta, StoryObj } from '@storybook/react-vite';
import DownloadFileButton from './DownloadFileButton';

const meta = {
  title: 'Portfolio/DownloadFileButton',
  component: DownloadFileButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DownloadFileButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DownloadFileButtonEnabled: Story = {
  args: {
    text: 'example primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
  },
};

export const DownloadFileButtonDisabled: Story = {
  args: {
    text: 'example disabled primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    disabled: true,
  },
};
