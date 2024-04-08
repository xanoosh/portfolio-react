import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar: ', () => {
  it('Should display text of each element.name from navigation prop', () => {
    render(
      <Navbar
        navigation={[
          { name: 'firstEl', link: '' },
          { name: 'secondEl', link: '' },
          { name: 'thirdEl', link: '' },
        ]}
        storybookLink="#"
      />
    );
    expect(screen.getByText('firstEl')).toBeInTheDocument();
    expect(screen.getByText('secondEl')).toBeInTheDocument();
    expect(screen.getByText('thirdEl')).toBeInTheDocument();
  });
});
