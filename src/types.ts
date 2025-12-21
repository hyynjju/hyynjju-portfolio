
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  asciiArt: string;
  tags: string[];
  link: string;
  process: string;
  outcome: string;
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
