import { Dispatch, SetStateAction } from 'react';

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
  badges?: string[];
  buttons?: ButtonProps[];
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
}

export interface ProjectFilterProps {
  activeBadges: string[];
  setActiveBadges: Dispatch<SetStateAction<string[]>>;
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
