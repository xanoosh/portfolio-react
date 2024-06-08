import * as Tooltip from '@radix-ui/react-tooltip';
import { TooltipComponentProps } from '../../interfaces';

export default function TooltipComponent({
  children,
  text,
  defaultOpen = false,
  delayDuration = 500,
}: TooltipComponentProps) {
  return (
    <Tooltip.Provider delayDuration={delayDuration}>
      <Tooltip.Root defaultOpen={defaultOpen}>
        <Tooltip.Trigger>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={`rounded-lg shadow bg-slate-800 text-slate-300 text-xs py-2 px-4`}
            sideOffset={3}
          >
            {text}
            <Tooltip.Arrow className="fill-slate-800" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
