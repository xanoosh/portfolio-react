import { useActiveBadgesStore } from '../../../store/store';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { badgesArray } from '../../../globals/globals';

export default function ProjectFilterSelect() {
  const { activeBadges, setActiveBadges } = useActiveBadgesStore();
  return (
    <Listbox value={activeBadges} onChange={setActiveBadges} multiple>
      <div className="min-w-50 relative">
        <ListboxButton
          aria-label="project-filter-select"
          id="listbox-button"
          className="w-full transition-bg duration-300 ease-in-out cursor-default rounded-lg bg-slate-900 py-3 px-4 text-left shadow-md focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-4 focus:ring-offset-slate-800 text-sm"
        >
          <span className="block truncate text-slate-400">
            Filter projects by tag
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-white"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>
        <ListboxOptions
          modal={false}
          className="absolute z-10 mt-2 max-h-60 top-11 left-0 right-0 overflow-auto rounded-md bg-slate-900 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
        >
          {badgesArray.map((tag, i) => (
            <ListboxOption
              key={i}
              value={tag}
              className={`relative cursor-default select-none py-3 pl-10 pr-4 text-slate-300 hover:bg-sky-700 hover:text-white focus:outline-none data-focus:bg-sky-700 data-focus:text-white data-selected:text-pink-600 data-focus:data-selected:text-white hover:data-selected:text-white`}
            >
              <>
                <span
                  className={`block truncate ${
                    activeBadges.includes(tag) ? 'font-medium' : 'font-normal'
                  }`}
                >
                  {tag}
                </span>
                {activeBadges.includes(tag) ? (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                ) : null}
              </>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
