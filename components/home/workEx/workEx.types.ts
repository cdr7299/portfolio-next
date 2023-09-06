export interface WorkData {
  title: string;
  value: string;
  color: string;
  descriptionTitle: string;
  description: string;
  projects: Project[];
}

export interface Project {
  project_title: string;
  description: string;
  tech_used: TechUsed[];
}

export interface TechUsed {
  title: string;
  icon: string;
}
