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

export const DownloadFileButtonPrimary: Story = {
  args: {
    text: 'example primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'primary',
  },
};
export const DownloadFileButtonPink: Story = {
  args: {
    text: 'example pink download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'pink',
  },
};
export const DownloadFileButtonSecondary: Story = {
  args: {
    text: 'example secondary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'secondary',
  },
};
export const DownloadFileButtonPrimaryDisabled: Story = {
  args: {
    text: 'example disabled primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'primary',
    disabled: true,
  },
};
export const DownloadFileButtonPinkDisabled: Story = {
  args: {
    text: 'example disabled pink download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'pink',
    disabled: true,
  },
};
export const DownloadFileButtonSecondaryDisabled: Story = {
  args: {
    text: 'example disabled secondary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'secondary',
    disabled: true,
  },
};
