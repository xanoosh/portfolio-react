import { Dispatch, SetStateAction } from 'react';

interface ProjectButton {
  text: string;
  url: string;
  icon?: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  badges: string[];
  buttons: ProjectButton[];
}

export interface ButtonProps {
  text: string;
  url: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  icon?: string;
}

export interface RemoveButtonProps {
  onClick: undefined | (() => void);
}

export interface BadgeProps {
  text: string;
  variant?: 'main' | 'success';
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
}
