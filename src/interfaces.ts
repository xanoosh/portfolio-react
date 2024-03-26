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

export interface BadgeProps {
  text: string;
}
