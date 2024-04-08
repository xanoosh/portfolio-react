import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader: ', () => {
  it('Should be in the document', () => {
    render(<Loader />);
    expect(screen.getByTestId('oval-loading')).toBeInTheDocument();
  });
});
