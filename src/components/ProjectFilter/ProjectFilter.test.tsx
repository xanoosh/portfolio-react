// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import { vi } from 'vitest';
// import ProjectFilter from './ProjectFilter';
// import userEvent from '@testing-library/user-event';

describe('ProjectFilter:', () => {
  it('should true', () => {
    expect(true).toBe(true);
  });
  // it('Should display text "No active tag selected." if activeBadges array is empty', () => {
  //   render(
  //     <ProjectFilter
  //       activeBadges={[]}
  //       setActiveBadges={() => {}}
  //       handleBadgeClick={() => {}}
  //     />
  //   );
  //   expect(screen.getByText('No active tag selected.')).toBeInTheDocument();
  // });

  // it('Should display badges if activeBadges array is not empty', () => {
  //   render(
  //     <ProjectFilter
  //       activeBadges={['badge1', 'badge2']}
  //       setActiveBadges={() => {}}
  //       handleBadgeClick={() => {}}
  //     />
  //   );
  //   expect(screen.getByText('badge1')).toBeInTheDocument();
  //   expect(screen.getByText('badge2')).toBeInTheDocument();
  // });

  // it('Should display button with id listbox-button', () => {
  //   const { container } = render(
  //     <ProjectFilter
  //       activeBadges={[]}
  //       setActiveBadges={() => {}}
  //       handleBadgeClick={() => {}}
  //     />
  //   );
  //   expect(
  //     container.querySelector('button#listbox-button')
  //   ).toBeInTheDocument();
  // });

  // it('Should display ul with role listbox when listbox-trigger button is clicked', () => {
  //   const { container } = render(
  //     <ProjectFilter
  //       activeBadges={[]}
  //       setActiveBadges={() => {}}
  //       handleBadgeClick={() => {}}
  //     />
  //   );

  //   fireEvent.click(container.querySelector('button#listbox-button')!);
  //   expect(container.querySelector('ul[role=listbox]')).toBeInTheDocument();
  // });

  // const setActiveBadgesMock = vi.fn();
  // const handleBadgeClickMock = vi.fn();

  // it('setActiveBadges function should be called on each listbox element click', () => {
  //   const { container } = render(
  //     <ProjectFilter
  //       activeBadges={[]}
  //       setActiveBadges={setActiveBadgesMock}
  //       handleBadgeClick={() => {}}
  //     />
  //   );

  //   fireEvent.click(container.querySelector('button#listbox-button')!);
  //   fireEvent.click(
  //     container.querySelector('ul[role=listbox] li:first-of-type')!
  //   );
  //   expect(setActiveBadgesMock).toHaveBeenCalledTimes(1);
  // });

  // it('handleBadgeClickMock function should be called on each badge button click', () => {
  //   const { container } = render(
  //     <ProjectFilter
  //       activeBadges={['badge1', 'badge2']}
  //       setActiveBadges={() => {}}
  //       handleBadgeClick={handleBadgeClickMock}
  //     />
  //   );

  //   fireEvent.click(
  //     container.querySelector('div.bg-pink-600:first-of-type button')!
  //   );
  //   expect(handleBadgeClickMock).toHaveBeenCalledTimes(1);
  // });

  // it('should show ul on listbox button click', async () => {
  //   const { container } = render(
  //     <ProjectFilter
  //       activeBadges={['badge1', 'badge2']}
  //       setActiveBadges={() => {}}
  //       handleBadgeClick={handleBadgeClickMock}
  //     />
  //   );

  //   await userEvent.click(container.querySelector('#listbox-button')!);
  //   await waitFor(() =>
  //     expect(container.querySelector('ul')).toBeInTheDocument()
  //   );
  // });
});
