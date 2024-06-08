// import { Dispatch, SetStateAction } from 'react';
import { ReactNode } from 'react';

export interface SingleProjectInterface {
  title: string;
  description: string;
  badges: string[];
  buttons: {
    text: string;
    url: string;
    icon: string;
  }[];
}

export interface ProjectCardProps {
  title?: string;
  description?: string;
  badges: string[];
  activeBadges?: string[];
  buttons?: ButtonProps[];
  handleBadgeClick?: (badgeName: string) => void;
}

export interface ButtonProps {
  text: string;
  url: string;
  variant?: 'primary' | 'pink' | 'secondary';
  disabled?: boolean;
  icon?: string;
}
export interface DownloadFileButtonProps {
  text: string;
  fileName: string;
  filePath: string;
  variant?: 'primary' | 'pink' | 'secondary';
  disabled?: boolean;
}

export interface RemoveButtonProps {
  onClick: undefined | (() => void);
}

export interface BadgeProps {
  text: string;
  variant?: 'main' | 'pink';
  size?: 'sm' | 'lg';
  handleRemove?: undefined | (() => void);
  handleClick?: undefined | (() => void);
}

export interface TooltipComponentProps {
  children: ReactNode;
  text: string;
  defaultOpen?: boolean;
  delayDuration?: number;
}

export interface ProjectFilterProps {
  activeBadges: string[];
  setActiveBadges: (value: string[]) => void;
  handleBadgeClick: (badgeName: string) => void;
}

export interface NavbarProps {
  navigation: { name: string; link: string }[] | undefined;
  storybookLink: string;
}

interface ExperienceListElement {
  title: string;
  date: string;
  responsibilities: string[];
}

export interface ExperienceSectionProps {
  title?: string;
  text?: string;
  list?: ExperienceListElement[];
}

export interface StoreInterface {
  activeProjects: ProjectCardProps[];
  activeBadges: string[];
  filterProjects: (activeBadgesArray: string[]) => void;
  setActiveBadges: (activeBadgesArray: string[]) => void;
  handleBadgeClick: (badgeName: string) => void;
}
