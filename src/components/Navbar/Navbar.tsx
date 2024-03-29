import { Disclosure } from '@headlessui/react';
import storybookSvgPath from '../../img/storybook.svg';
import { NavLink } from 'react-router-dom';

export default function Navbar({
  navigation = [
    { name: 'Projects', link: '' },
    { name: 'About', link: 'about' },
  ],
}) {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-stretch justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
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
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="https://portfolio-react-vite-storybook.vercel.app"
              target="_blank"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
        </div>
      </div>
    </Disclosure>
  );
}
