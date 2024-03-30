interface ProjectButton {
  text: string;
  url: string;
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
  setActiveBadges: any;
  handleBadgeClick: (badgeName: string) => void;
}
