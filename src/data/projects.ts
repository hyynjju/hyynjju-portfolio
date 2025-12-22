import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    slug: 'medeasy',
    title: 'MedEasy',
    category: 'Healthcare UX',
    description:
      'A conversational medication management app designed for elderly users and digitally marginalized groups.',
    longDescription:
      'MedEasy is a graduation project focused on reducing medication errors among elderly users and visually impaired individuals. The challenge was designing an interface that minimizes cognitive load while integrating advanced technologies such as OCR, NFC, and AI-based pill recognition.',
    process:
      'I led the entire UX/UI design process as the sole designer, from problem definition to wireframing and visual design. Close collaboration with backend and frontend developers was required to translate complex technical features into an accessible, dialogue-based interface.',
    outcome:
      'The project achieved high technical completeness and usability, winning a university award and placing 5th out of 300 teams in an external national competition. The app is fully implemented and demonstrates real-world feasibility.',
    tags: [
      'UXUI',
      'Accessibility',
      'React Native',
      'OCR',
      'NFC',
      'AI',
      'Team Project',
    ],

    thumbnail: '/assets/thumbnails/medeasy.png',
    icon: '/assets/icons/medeasy.png',
    pdfUrl: 'https://notion.so/your-notion-medeasy',
  },

  {
    id: '02',
    slug: 'yakk',
    title: 'Yakk',
    category: 'Language Learning',
    description:
      'An AI-powered simultaneous interpretation training service for advanced language learners.',
    longDescription:
      'Yakk is a solo project designed for intermediate to advanced foreign language learners. The service generates scripts using AI and provides real-time interpretation simulation through TTS, allowing users to practice under realistic conditions.',
    process:
      'I independently handled planning, UX/UI design, and frontend development. The focus was on fast iteration and deployability, prioritizing a simple but extensible structure over feature-heavy implementation.',
    outcome:
      'The service is fully deployed as a web application. While the feature set is intentionally minimal, the project demonstrates strong potential for UX iteration through real user testing and future expansion.',
    tags: [
      'UXUI',
      'Frontend',
      'AI',
      'Language Learning',
      'Solo Project',
      'Web',
    ],

    thumbnail: '/assets/thumbnails/yakk.png',
    icon: '/assets/icons/yakk.png',
    pdfUrl: 'https://notion.so/your-notion-yakk',
  },

  {
    id: '03',
    slug: 'mekki',
    title: 'MEKKI',
    category: 'Service Design',
    description:
      'A fictional bibimbap chain brand designed around customization, speed, and health-conscious dining.',
    longDescription:
      'MEKKI is a conceptual service design project inspired by the operational model of Subway. The project explores how customizable food experiences can be optimized for office workers seeking fast, healthy meals.',
    process:
      'The project is backed by surveys, in-depth interviews, and usability testing. As part of a design team, I contributed to UX strategy and interface design, focusing on clarity of choice and fast decision-making.',
    outcome:
      'MEKKI stands out as the most research-driven project in my portfolio, demonstrating my ability to translate user research into concrete service and UI concepts.',
    tags: ['UX Research', 'Service Design', 'Brand UI', 'Team Project'],

    thumbnail: '/assets/thumbnails/mekki.png',
    icon: '/assets/icons/mekki.png',
    pdfUrl: 'https://notion.so/your-notion-mekki',
  },

  {
    id: '04',
    slug: 'poom',
    title: 'Poom',
    category: 'Community Platform',
    description:
      'A community app concept for short-term Korean residents living abroad.',
    longDescription:
      'Poom is a solo design project addressing the fragmented information experience of short-term overseas residents. The app focuses on trusted peer-to-peer exchange for housing, second-hand goods, and local settlement tips.',
    process:
      'Based on surveys and in-depth interviews, I designed the information architecture and interaction flows to reduce uncertainty and trial-and-error during early settlement stages.',
    outcome:
      'Poom demonstrates strong visual completeness and trend awareness. While the project remains in the design phase, it clearly showcases my UX problem-definition and interface design capabilities.',
    tags: ['UXUI', 'Community', 'Research', 'Mobile App', 'Solo Project'],

    thumbnail: '/assets/thumbnails/poom.png',
    icon: '/assets/icons/poom.png',
    pdfUrl: 'https://notion.so/your-notion-poom',
  },
];
