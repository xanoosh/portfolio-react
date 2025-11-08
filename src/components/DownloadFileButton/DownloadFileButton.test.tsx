import '@testing-library/jest-dom';
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

  it('Should have classes bg-sky-700 ring-sky-700 if variant prop was not passed', () => {
    const { container } = render(
      <DownloadFileButton
        fileName="file"
        filePath="path"
        text="DownloadFileButton"
      />
    );
    expect(container.firstChild).toHaveClass('bg-sky-700 ring-sky-700');
  });

  it('Should have class bg-sky-700 ring-sky-700 if variant prop is equal to primary', () => {
    const { container } = render(
      <DownloadFileButton
        fileName="file"
        filePath="path"
        text="DownloadFileButton"
        variant="primary"
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
        variant="primary"
      />
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
