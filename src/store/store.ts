import { create } from 'zustand';
import { StoreInterface } from '../interfaces';
import { projectsArray } from '../globals/globals';

export const useActiveBadgesStore = create<StoreInterface>()((set, get) => ({
  activeProjects: projectsArray,
  activeBadges: [],

  filterProjects: () =>
    set((state) => {
      if (state.activeBadges.length === 0) {
        return { activeProjects: projectsArray };
      } else {
        const filteredProjects = state.activeProjects.filter((project) =>
          state.activeBadges.every((badge: string) =>
            project.badges.includes(badge)
          )
        );
        return { activeProjects: filteredProjects };
      }
    }),

  saveActiveBadges: (activeBadgesArray) =>
    set(() => {
      return { activeBadges: activeBadgesArray };
    }),
  toggleActiveBadge: (badgeName) =>
    set((state) => {
      get().filterProjects();
      if (state.activeBadges.includes(badgeName)) {
        return {
          activeBadges: state.activeBadges.filter((el) => el !== badgeName),
        };
      } else {
        return { activeBadges: [...state.activeBadges, badgeName] };
      }
    }),
  setActiveBadges: (activeBadgesArray) => {
    get().saveActiveBadges(activeBadgesArray);
    get().filterProjects();
  },

  handleBadgeClick: (badgeName) => {
    get().toggleActiveBadge(badgeName);
    get().filterProjects();
  },
}));

//remove filterprojects OR implement it with arument not the state (badges array)
// remove saveactivebadges & toggleActiveBadge , 3 actions should be enough
