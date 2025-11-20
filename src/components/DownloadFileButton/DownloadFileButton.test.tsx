import { render, screen, fireEvent } from '@testing-library/react';
import DownloadFileButton from './DownloadFileButton';

import { vi } from 'vitest';
import { downloadPDF } from '../../utils';

vi.mock('../../utils', () => ({
  downloadPDF: vi.fn(),
}));

describe('DownloadFileButton: ', () => {
  it('Should render element with role button', () => {
    render(
      <DownloadFileButton
        fileName="file"
        filePath="path"
        text="DownloadFileButton"
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Should not render element if text prop is empty', () => {
    render(<DownloadFileButton fileName="file" filePath="path" text="" />);
    expect(() => screen.getByRole('button')).toThrow();
  });

  it('Should have text equal to the DownloadFileButton text prop', () => {
    render(
      <DownloadFileButton
        fileName="file"
        filePath="path"
        text="DownloadFileButton"
      />
    );
    expect(screen.getByRole('button')).toHaveTextContent('DownloadFileButton');
  });

  it('Should have classes bg-sky-700 ring-sky-700', () => {
    render(
      <DownloadFileButton
        fileName="file"
        filePath="path"
        text="DownloadFileButton"
      />
    );
    expect(screen.getByRole('button')).toHaveClass('bg-sky-700 ring-sky-700');
  });

  it('Should display svg', () => {
    const { container } = render(
      <DownloadFileButton
        fileName="file"
        filePath="path"
        text="DownloadFileButton"
      />
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('Icon (svg) should have attribute aria-hidden="true"', () => {
    const { container } = render(
      <DownloadFileButton
        fileName="file"
        filePath="path"
        text="DownloadFileButton"
      />
    );
    expect(container.querySelector('svg')).toHaveAttribute(
      'aria-hidden',
      'true'
    );
  });

  it('Should call downloadPDF function once on each button click', () => {
    render(
      <DownloadFileButton
        fileName="file"
        filePath="path"
        text="DownloadFileButton"
      />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(downloadPDF).toHaveBeenCalledTimes(1);
  });

  it('Should call downloadPDF function with arguments ("file", "path")', () => {
    render(
      <DownloadFileButton
        fileName="file"
        filePath="path"
        text="DownloadFileButton"
      />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(downloadPDF).toHaveBeenCalledWith('file', 'path');
  });
});
