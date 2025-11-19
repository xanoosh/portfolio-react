import TooltipComponent from '../../TooltipComponent/TooltipComponent';
import Badge from '../../Badge/Badge';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function ProjectFilterTooltip() {
  return (
    <TooltipComponent
      title="Filter projects by:"
      content={
        <ul className="list-square pl-5.5 space-y-2.5">
          <li>
            <strong>Selecting tags</strong> from this list
          </li>
          <li>
            Clicking
            <Badge
              text="inactive badge"
              variant="main"
              additionalClasses="inline-block transform scale-90 mx-0.5 w-26 text-center border border-slate-700"
            />
            - <strong>adds tag</strong> to the tag list
          </li>
          <li>
            Clicking
            <Badge
              text="active badge"
              variant="pink"
              additionalClasses="inline-block transform scale-90 mx-0.5 opacity-80 sm:w-auto !w-26 text-center"
            />
            - <strong>removes tag</strong> from the list
          </li>
        </ul>
      }
    >
      <div aria-label="project-filter-tooltip">
        <InformationCircleIcon
          tabIndex={0}
          className="transition-bg duration-300 ease-in-out w-5 h-5 rounded-full text-slate-400 hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-slate-800 focus:ring-offset-2 focus:ring-slate-300 focus:text-slate-300"
        />
      </div>
    </TooltipComponent>
  );
}
