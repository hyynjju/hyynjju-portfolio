export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;

  description: string;
  longDescription: string;
  process: string;
  outcome: string;

  tags: string[];
  icon: string;
  thumbnail: string;
  accentColor: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export enum Section {
  HERO = 'hero',
  PROJECTS = 'projects',
  ABOUT = 'about',
  AI = 'ai',
}
