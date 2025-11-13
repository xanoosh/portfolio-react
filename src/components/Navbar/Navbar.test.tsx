import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import { NavbarProps } from '../../interfaces';
import userEvent from '@testing-library/user-event';

const MockedHomePage = () => <h1>Home Page</h1>;
const MockedAboutPage = () => <h1>About Page</h1>;

const createWrapper = (navbarProps: NavbarProps) => {
  return ({ children }: { children?: React.ReactNode }) => (
    <MemoryRouter initialEntries={['/']}>
      <>
        <Navbar {...navbarProps} />
        <div role="main">
          <Routes>
            <Route path="/" element={<MockedHomePage />} />
            <Route path="/about" element={<MockedAboutPage />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
        {children}
      </>
    </MemoryRouter>
  );
};

describe('Navigation tests', () => {
  it('Navbar should be in the document', () => {
    const wrapper = createWrapper({ navigation: [], storybookLink: '' });
    render(<div />, { wrapper });
    expect(screen.getByLabelText('main-navigation')).toBeInTheDocument();
  });
  it('Storybook link should not be visible if storybookLink is not provided', () => {
    const wrapper = createWrapper({ navigation: [] });
    render(<div />, { wrapper });
    expect(() => screen.getByLabelText('storybook-link')).toThrow();
  });
  it('Storybook link should be visible if storybookLink is provided', () => {
    const wrapper = createWrapper({ navigation: [], storybookLink: '#' });
    render(<div />, { wrapper });
    expect(screen.getByLabelText('storybook-link')).toBeInTheDocument();
  });

  it('Should display Home Page content on root route', () => {
    const wrapper = createWrapper({
      navigation: [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
      ],
      storybookLink: '',
    });
    render(<div />, { wrapper });
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  it('Should display About Page content on /about route', async () => {
    const wrapper = createWrapper({
      navigation: [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
      ],
      storybookLink: '',
    });
    render(<div />, { wrapper });
    await userEvent.click(screen.getByText('About'));

    expect(screen.getByText('About Page')).toBeInTheDocument();
  });
});
