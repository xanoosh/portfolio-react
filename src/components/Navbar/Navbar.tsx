import { NavLink } from 'react-router-dom';
import { NavbarProps } from '../../interfaces';
import storybookSvgPath from '../../img/storybook.svg';
import logoPath from '../../img/react-logo.svg';

export default function Navbar({ navigation, storybookLink }: NavbarProps) {
  if (!navigation) return null;
  return (
    <nav className="bg-slate-800">
      <div className="mx-auto px-6 sm:px-12">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-stretch justify-start">
            <div className="flex shrink-0 items-center">
              <img className="h-8 w-auto" src={logoPath} alt="React Logo" />
            </div>
            <div className="ml-6">
              <div className="flex space-x-4">
                {navigation.map(({ name, link }, i) => (
                  <NavLink
                    key={i}
                    to={link}
                    end
                    className={({ isActive }) => {
                      return `rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-slate-800 focus:ring-offset-4 ${
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
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-slate-800 focus:ring-offset-4"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Storybook</span>
                <img
                  className="h-6 w-6"
                  src={storybookSvgPath}
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
