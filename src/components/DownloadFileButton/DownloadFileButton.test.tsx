import { render, screen } from '@testing-library/react';
import DownloadFileButton from './DownloadFileButton';

describe('DownloadFileButton: ', () => {
  it('Should have text equal to the DownloadFileButton text prop', () => {
    render(
      <DownloadFileButton
        fileName="file"
        filePath="path"
        text="DownloadFileButton"
      />
    );
    expect(screen.getByText('DownloadFileButton')).toBeInTheDocument();
  });

  it('Should have classes bg-sky-700 ring-sky-700', () => {
    const { container } = render(
      <DownloadFileButton
        fileName="file"
        filePath="path"
        text="DownloadFileButton"
      />
    );
    expect(container.firstChild).toHaveClass('bg-sky-700 ring-sky-700');
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
});
