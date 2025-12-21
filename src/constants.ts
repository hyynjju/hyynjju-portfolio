import { Project } from './types';

export const DESIGNER_NAME = 'Hyunju Cho';
export const DESIGNER_ROLE =
  'Senior Experience Designer & Interaction Engineer';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'QUANTUM FLOW',
    category: 'Financial Ecosystem',
    description:
      'Orchestrating the future of decentralized asset management through high-density visual hierarchies.',
    longDescription:
      'Quantum Flow is a radical reimagining of the institutional trading experience. The primary challenge was translating multidimensional blockchain data into a cohesive, high-performance interface that minimizes decision-paralysis for high-frequency traders.',
    tags: ['Systems Design', 'Interaction Logic', 'WebGL'],
    link: '#',
    process:
      "We deconstructed traditional trading patterns into 'atomic interaction nodes'. By applying a gravity-based hierarchy to market data, we enabled traders to intuitively sense market momentum before analyzing the numbers.",
    outcome:
      'Reduced cognitive strain reported by 40% in beta groups and optimized trade execution speed by 15% through predictive UI state transitions.',
    asciiArt: `
  [  CORE_SYNAPSE  ]
  |  ..............  |
  |  :  01001011  :  |
  |  :  11010010  :  |
  |  :  DYNAMIC_H  :  |
  |  ..............  |
    `,
  },
  {
    id: '02',
    title: 'KINETIC IDENTITY',
    category: 'Generative Branding',
    description:
      'A living visual system for a global mobility startup that adapts in real-time to physical velocity.',
    longDescription:
      'Identity is no longer static. For Velocity Mobility, we developed a generative brand system that exists as code. The logo and visual assets morph based on GPS data and vehicle speed, creating a unique kinetic signature for every journey.',
    tags: ['Creative Coding', 'Brand Systems', 'Real-time'],
    link: '#',
    process:
      "Utilizing custom SVG displacement filters mapped to velocity vectors, we created a design language that feels 'alive'. The system was built as a lightweight JS library integrated into the brand's fleet of IoT devices.",
    outcome:
      "The world's first velocity-reactive brand system, resulting in a 300% increase in social media engagement and a CES Innovation nomination.",
    asciiArt: `
     ( ( VELOCITY ) )
    /   ~~~~~   ~~~~~ \\
   |   [ MORPH_V2 ]   |
    \\   ~~~~~   ~~~~~ /
     |__|         |__|
    `,
  },
  {
    id: '03',
    title: 'NEURAL CANVAS',
    category: 'AI Interaction Lab',
    description:
      'An experimental design tool that maps subconscious eye-movement to spatial layout generation.',
    longDescription:
      'How do we design at the speed of thought? Neural Canvas is an R&D project exploring gaze-tracking as a primary design input. By monitoring visual attention patterns, the software suggests layout optimizations and color balances automatically.',
    tags: ['Interaction R&D', 'AI/ML', 'UX Vision'],
    link: '#',
    process:
      "Collaborating with cognitive scientists, we mapped 'Design Intent' to specific eye fixation patterns. We built a bridge between the browser's camera input and a generative layout engine.",
    outcome:
      'Proven to reduce initial layout ideation time by 60%. Currently being developed as a standalone plug-in for major design platforms.',
    asciiArt: `
    /\\   [ NEURAL ]
   /  \\    |  |
  /____\\   |  |
 [ CANVAS_R&D_09 ]
    `,
  },
  {
    id: '04',
    title: 'ETHOS OS',
    category: 'Product OS',
    description:
      'A minimalist operating system designed for cognitive health and deep work environments.',
    longDescription:
      'Ethos OS is a response to the attention economy. It is a highly opinionated, black-and-white operating system for e-ink devices that prioritizes text-based communication and structural hierarchy over dopamine-driven visuals.',
    tags: ['OS Design', 'Accessibility', 'Wellness'],
    link: '#',
    process:
      "Stripping away all non-essential UI. We focused on typography as the primary interface element, using vertical rhythm and white space as functional 'features' rather than just aesthetics.",
    outcome:
      'Users reported a 55% increase in daily focus time and a significant reduction in digital anxiety levels during a 3-month focus group study.',
    asciiArt: `
  +------------------+
  |  ETHOS_SYSTEM_V  |
  |  --------------  |
  |  [ FOCUS_MODE ]  |
  |  NO_DISTRACTION  |
  +------------------+
    `,
  },
];
