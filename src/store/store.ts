import { create } from 'zustand';

interface ActiveBadgesInterface {
  activeBadges: string[];
  setActiveBadges: (badgeName: string[]) => void;
  handleBadgeClick: (badgeName: string) => void;
}

export const useActiveBadgesStore = create<ActiveBadgesInterface>()((set) => ({
  activeBadges: [],
  setActiveBadges: (activeBadgesArray) =>
    set(() => ({ activeBadges: activeBadgesArray })),
  handleBadgeClick: (badgeName) =>
    set((state) => {
      if (state.activeBadges.includes(badgeName)) {
        return {
          activeBadges: state.activeBadges.filter((el) => el !== badgeName),
        };
      } else {
        return { activeBadges: [...state.activeBadges, badgeName] };
      }
    }),
}));
