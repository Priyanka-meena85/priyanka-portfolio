export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "Full-Stack" | "AI & Automation" | "Backend / Systems";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics: string[];
  architecture: {
    frontend?: string;
    backend?: string;
    database?: string;
    auth?: string;
    deployment?: string;
  };
  highlights: string[];
  badge?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  tagline?: string;
  description: string[];
  technologies: string[];
  metrics: string[];
  icon: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    hot?: boolean;
  }[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights: string[];
}
