import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import Badge from '../Badge/Badge';
import { ProjectFilterProps } from '../../interfaces';
import { badgesArray } from '../../globals';
import { AnimatePresence, motion } from 'framer-motion';

export default function ProjectFilter({
  activeBadges,
  setActiveBadges,
  handleBadgeClick,
}: ProjectFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="w-full grid grid-cols-2 gap-8 p-6 border rounded-lg shadow bg-slate-800/50 border-slate-700"
    >
      {/* Select */}
      <Listbox value={activeBadges} onChange={setActiveBadges} multiple>
        <div className="relative z-10">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">Filter projects by tag</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-slate-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {badgesArray.map((tag, i) => (
              <Listbox.Option
                key={i}
                value={tag}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-[#646cff] text-white' : 'text-gray-900'
                  }`
                }
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
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
      {/* tagList: */}
      <div className="flex gap-4 items-center flex-wrap">
        {activeBadges.length === 0 ? (
          <p className="text-white">no active tag</p>
        ) : null}
        {activeBadges.length > 0 ? (
          <AnimatePresence>
            {activeBadges.map((activeBadge, i) => (
              <Badge
                key={i}
                text={activeBadge}
                variant="pink"
                size="sm"
                handleRemove={() => handleBadgeClick(activeBadge)}
              />
            ))}
          </AnimatePresence>
        ) : null}
      </div>
    </motion.div>
  );
}
