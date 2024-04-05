import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
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

const downloadFileButtonUnitTests = async (
  canvasElement: HTMLElement,
  text: string
) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText(text);
  await expect(button).toBeInTheDocument();
};

export const DownloadFileButtonPrimary: Story = {
  args: {
    text: 'example primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'primary',
  },
  play: ({ canvasElement }) =>
    downloadFileButtonUnitTests(
      canvasElement,
      'example primary download button text'
    ),
};

export const DownloadFileButtonPink: Story = {
  args: {
    text: 'example pink download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'pink',
  },
  play: ({ canvasElement }) =>
    downloadFileButtonUnitTests(
      canvasElement,
      'example primary download button text'
    ),
};

export const DownloadFileButtonSecondary: Story = {
  args: {
    text: 'example secondary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'secondary',
  },
  play: ({ canvasElement }) =>
    downloadFileButtonUnitTests(
      canvasElement,
      'example secondary download button text'
    ),
};

export const DownloadFileButtonPrimaryDisabled: Story = {
  args: {
    text: 'example disabled primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'primary',
    disabled: true,
  },
  play: ({ canvasElement }) =>
    downloadFileButtonUnitTests(
      canvasElement,
      'example disabled primary download button text'
    ),
};

export const DownloadFileButtonPinkDisabled: Story = {
  args: {
    text: 'example disabled pink download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'pink',
    disabled: true,
  },
  play: ({ canvasElement }) =>
    downloadFileButtonUnitTests(
      canvasElement,
      'example disabled pink download button text'
    ),
};

export const DownloadFileButtonSecondaryDisabled: Story = {
  args: {
    text: 'example disabled secondary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'secondary',
    disabled: true,
  },
  play: ({ canvasElement }) =>
    downloadFileButtonUnitTests(
      canvasElement,
      'example disabled secondary download button text'
    ),
};
