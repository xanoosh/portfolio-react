import type { Meta, StoryObj } from '@storybook/react-vite';
import DownloadFileButton from './DownloadFileButton';
import { expect, within } from 'storybook/test';
import { DownloadFileButtonProps } from '../../interfaces';

const meta = {
  title: 'Portfolio/DownloadFileButton',
  component: DownloadFileButton,
  tags: ['autodocs'],
} satisfies Meta<typeof DownloadFileButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const downloadButtonAssertions = (
  downloadBtn: HTMLElement,
  args: DownloadFileButtonProps
) => {
  expect(downloadBtn).toBeInTheDocument();
  expect(downloadBtn.textContent).toBe(args.text);
  if (!args.disabled) expect(downloadBtn).toBeEnabled();
  else expect(downloadBtn).toBeDisabled();
  const downloadBtnIcon = within(downloadBtn).getByLabelText('icon');
  expect(downloadBtnIcon).toBeInTheDocument();
  expect(downloadBtnIcon).toHaveAttribute('aria-hidden', 'true');
};

export const DownloadFileButtonEnabled: Story = {
  args: {
    text: 'example primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
  },
  play: async ({ canvas, args }) => {
    const downloadBtn = canvas.getByRole('button');
    downloadButtonAssertions(downloadBtn, args);
  },
};

export const DownloadFileButtonDisabled: Story = {
  args: {
    text: 'example disabled primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    disabled: true,
  },
  play: async ({ canvas, args }) => {
    const downloadBtn = canvas.getByRole('button');
    downloadButtonAssertions(downloadBtn, args);
  },
};
