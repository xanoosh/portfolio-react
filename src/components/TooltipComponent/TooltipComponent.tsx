import * as Tooltip from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';

export default function TooltipComponent({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
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
