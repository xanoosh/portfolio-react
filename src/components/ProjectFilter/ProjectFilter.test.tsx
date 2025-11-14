import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import ProjectFilter from './ProjectFilter';
import userEvent from '@testing-library/user-event';

const setActiveBadgesMock = vi.fn();
const handleBadgeClickMock = vi.fn();
const badges = ['badge1', 'badge2', 'badge3'];

describe('ProjectFilter:', () => {
  it('Should display text "No active tag selected." if activeBadges array is empty', () => {
    render(
      <ProjectFilter
        badges={badges}
        activeBadges={[]}
        setActiveBadges={() => {}}
        handleBadgeClick={() => {}}
      />
    );
    expect(screen.getByText('No active tag selected.')).toBeInTheDocument();
  });

  it('Should display badges if activeBadges array is not empty', () => {
    render(
      <ProjectFilter
        badges={badges}
        activeBadges={['badge1', 'badge2']}
        setActiveBadges={() => {}}
        handleBadgeClick={() => {}}
      />
    );
    expect(screen.getByText('badge1')).toBeInTheDocument();
    expect(screen.getByText('badge2')).toBeInTheDocument();
  });

  it('Should display button with id listbox-button', () => {
    const { container } = render(
      <ProjectFilter
        badges={badges}
        activeBadges={[]}
        setActiveBadges={() => {}}
        handleBadgeClick={() => {}}
      />
    );
    expect(
      container.querySelector('button#listbox-button')
    ).toBeInTheDocument();
  });

  it('handleBadgeClickMock function should be called on each badge button click', () => {
    const { container } = render(
      <ProjectFilter
        badges={badges}
        activeBadges={['badge1', 'badge2']}
        setActiveBadges={() => {}}
        handleBadgeClick={handleBadgeClickMock}
      />
    );

    fireEvent.click(
      container.querySelector('div.bg-pink-600:first-of-type button')!
    );
    expect(handleBadgeClickMock).toHaveBeenCalledTimes(1);
  });

  it('Should display div with role listbox when listbox-trigger button is clicked', async () => {
    const { container } = render(
      <ProjectFilter
        badges={badges}
        activeBadges={[]}
        setActiveBadges={() => {}}
        handleBadgeClick={() => {}}
      />
    );
    userEvent.click(container.querySelector('button#listbox-button')!);
    await waitFor(() =>
      expect(container.querySelector('div[role=listbox]')).toBeInTheDocument()
    );
  });

  it('setActiveBadges function should be called on each listbox element click', () => {
    const { container } = render(
      <ProjectFilter
        badges={badges}
        activeBadges={[]}
        setActiveBadges={setActiveBadgesMock}
        handleBadgeClick={() => {}}
      />
    );

    fireEvent.click(container.querySelector('button#listbox-button')!);
    fireEvent.click(
      container.querySelector('div[role=listbox] div:first-of-type')!
    );
    expect(setActiveBadgesMock).toHaveBeenCalledTimes(1);
  });
});
