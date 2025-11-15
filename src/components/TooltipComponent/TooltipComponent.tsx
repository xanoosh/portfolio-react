import * as Tooltip from '@radix-ui/react-tooltip';
import { TooltipComponentProps } from '../../interfaces';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function TooltipComponent({
  children,
  title,
  content,
  defaultOpen = false,
  delayDuration = 300,
}: TooltipComponentProps) {
  return (
    <Tooltip.Provider delayDuration={delayDuration}>
      <Tooltip.Root defaultOpen={defaultOpen}>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={`rounded-lg bg-slate-900 text-slate-400 text-sm`}
            sideOffset={6}
          >
            <div className="p-4 space-y-3">
              {title ? (
                <div className="flex gap-2 items-center">
                  <InformationCircleIcon className="w-7 h-7" />{' '}
                  <h2 className="text-lg font-bold">{title}</h2>
                </div>
              ) : (
                <InformationCircleIcon className="w-7 h-7" />
              )}

              <div>{content}</div>
            </div>

            <Tooltip.Arrow className="fill-slate-900 w-4 h-2" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
