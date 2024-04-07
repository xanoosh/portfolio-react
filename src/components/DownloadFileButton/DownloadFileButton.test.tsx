import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DownloadFileButton from './DownloadFileButton';

describe('DownloadFileButton: ', () => {
  it('Should have text equal to the badge text prop', () => {
    render(
      <DownloadFileButton
        fileName="file"
        filePath="path"
        text="DownloadFileButton"
      />
    );
    expect(screen.getByText('DownloadFileButton')).toBeInTheDocument();
  });

  it('Should have classes bg-custom-blue ring-custom-blue if variant prop was not passed', () => {
    const { container } = render(
      <DownloadFileButton
        fileName="file"
        filePath="path"
        text="DownloadFileButton"
      />
    );
    expect(container.firstChild).toHaveClass('bg-custom-blue ring-custom-blue');
  });

  it('Should have class bg-custom-blue ring-custom-blue if variant prop is equal to primary', () => {
    const { container } = render(
      <DownloadFileButton
        fileName="file"
        filePath="path"
        text="DownloadFileButton"
        variant="primary"
      />
    );
    expect(container.firstChild).toHaveClass('bg-custom-blue ring-custom-blue');
  });
});
