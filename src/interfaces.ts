interface ProjectButton {
  name: string;
  url: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  badges: string[];
  buttons: ProjectButton[];
}
