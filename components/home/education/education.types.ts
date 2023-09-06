export interface EducationData {
  title: string;
  school: string;
  description: string;
  projects: EducationProject[];
}

export interface EducationProject {
  title: string;
  description: string;
}
