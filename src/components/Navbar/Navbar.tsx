import { NavLink } from 'react-router-dom';
import { NavbarProps } from '../../interfaces';
import storybookSvgPath from '../../img/storybook.svg';
import reactLogoPath from '../../img/react-logo.svg';

export default function Navbar({ navigation, storybookLink }: NavbarProps) {
  if (!navigation) return null;
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-6 sm:px-12">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-stretch justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src={'../../img/react-logo.svg'}
                alt="React Logo"
              />
            </div>
            <div className="ml-6">
              <div className="flex space-x-4">
                {navigation.map(({ name, link }, i) => (
                  <NavLink
                    key={i}
                    to={link}
                    end
                    className={({ isActive }) => {
                      return `rounded-md px-3 py-2 text-sm font-medium ${
                        isActive
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`;
                    }}
                  >
                    {name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          {storybookLink ? (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a
                href={storybookLink}
                target="_blank"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Storybook</span>
                <img
                  className="h-6 w-6"
                  src={'../../img/storybook.svg'}
                  alt="storybook svg"
                />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
