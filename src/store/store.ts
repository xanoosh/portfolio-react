import { create } from 'zustand';
import { StoreInterface } from '../interfaces';
import { projectsArray } from '../globals/globals';

export const useActiveBadgesStore = create<StoreInterface>()((set, get) => ({
  activeProjects: projectsArray,
  activeBadges: [],

  filterProjects: (activeBadgesArray) =>
    set(() => {
      if (activeBadgesArray.length === 0) {
        return { activeProjects: projectsArray };
      } else {
        const filteredProjects = projectsArray.filter((project) =>
          activeBadgesArray.every((badge: string) =>
            project.badges.includes(badge)
          )
        );
        return { activeProjects: filteredProjects };
      }
    }),
  setActiveBadges: (activeBadgesArray) =>
    set(() => {
      get().filterProjects(activeBadgesArray);
      return { activeBadges: activeBadgesArray };
    }),
  handleBadgeClick: (badgeName) =>
    set((state) => {
      let newActiveBadgesArray;
      if (state.activeBadges.includes(badgeName)) {
        newActiveBadgesArray = state.activeBadges.filter(
          (el) => el !== badgeName
        );
        get().filterProjects(newActiveBadgesArray);
        return {
          activeBadges: newActiveBadgesArray,
        };
      } else {
        newActiveBadgesArray = [...state.activeBadges, badgeName];
        get().filterProjects(newActiveBadgesArray);
        return { activeBadges: newActiveBadgesArray };
      }
    }),
}));
