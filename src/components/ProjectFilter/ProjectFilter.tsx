import {
  ListboxButton,
  ListboxOption,
  Listbox,
  ListboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import Badge from '../Badge/Badge';
import { ProjectFilterProps } from '../../interfaces';
import { AnimatePresence, motion } from 'framer-motion';

export default function ProjectFilter({
  badges,
  activeBadges,
  setActiveBadges,
  handleBadgeClick,
}: ProjectFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      aria-label="project-filter-component"
      className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 md:gap-8 p-6 rounded-lg shadow bg-slate-800"
    >
      {/* Select */}
      <Listbox value={activeBadges} onChange={setActiveBadges} multiple>
        <div className="md:col-span-2 relative">
          <ListboxButton
            id="listbox-button"
            className="relative w-full cursor-default rounded-lg bg-slate-900 py-3 px-4 text-left shadow-md focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-4 focus:ring-offset-slate-800 sm:text-sm"
          >
            <span className="block truncate text-white">
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
            {badges.map((tag, i) => (
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
      {/* tagList: */}
      <div className="flex gap-4 items-center flex-wrap md:col-span-4">
        {activeBadges.length === 0 ? (
          <p className="text-slate-400 text-sm pl-1">No active tag selected.</p>
        ) : null}
        {activeBadges.length > 0 ? (
          <AnimatePresence>
            {activeBadges.map((activeBadge, i) =>
              activeBadge ? (
                <motion.div
                  initial={{ x: -5, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{
                    x: -5,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    type: 'tween',
                  }}
                  key={i}
                >
                  <Badge
                    text={activeBadge}
                    variant="pink"
                    size="sm"
                    handleRemove={() => handleBadgeClick(activeBadge)}
                  />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        ) : null}
      </div>
    </motion.div>
  );
}
