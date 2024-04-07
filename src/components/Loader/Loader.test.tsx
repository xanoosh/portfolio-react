import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader: ', () => {
  it('Should have text equal to the badge text prop', () => {
    render(<Loader />);
    expect(screen.getByTestId('oval-loading')).toBeInTheDocument();
  });
});
