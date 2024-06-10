import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
// import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TooltipComponent from './TooltipComponent';

beforeEach(() => {
  global.ResizeObserver = class MockedResizeObserver {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
  };
});

describe('TooltipComponent: ', () => {
  it('Child element should have attribute data-state="closed" at the start', () => {
    const { container } = render(
      <section>
        <TooltipComponent text="tooltip text">
          <button>button</button>
        </TooltipComponent>
      </section>
    );
    expect(container.querySelector('button')).toHaveAttribute(
      'data-state',
      'closed'
    );
  });
  it('Child element should have attribute data-state="instant-open" if defaultOpen was passed', () => {
    const { container } = render(
      <section>
        <TooltipComponent text="tooltip text" defaultOpen>
          <button>button</button>
        </TooltipComponent>
      </section>
    );
    expect(container.querySelector('button')).toHaveAttribute(
      'data-state',
      'instant-open'
    );
  });

  it('Child element should have attribute data-state="delayed-open" on hover', async () => {
    const { container } = render(
      <section>
        <TooltipComponent text="tooltip text">
          <button>button</button>
        </TooltipComponent>
      </section>
    );
    fireEvent.mouseEnter(container.querySelector('button')!);
    await waitFor(() =>
      expect(container.querySelector('button')).toHaveAttribute(
        'data-state',
        'delayed-open'
      )
    );
  });
});
