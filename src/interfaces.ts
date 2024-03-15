interface ProjectButton {
  name: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  badges: string[];
  buttons: ProjectButton[];
}
