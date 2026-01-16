
export interface CourseLink {
  label: string;
  url: string;
}

export interface Course {
  id: number;
  title: string;
  officialName: string;
  description: string;
  certification: string;
  links: CourseLink[];
  videoUrl?: string; // Nuevo: Enlace de YouTube específico
}
