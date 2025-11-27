import { ProjectCardProps } from '../interfaces';

export const projectsArray: ProjectCardProps[] = [
  {
    title: 'React portfolio',
    description:
      'This project -> my projects list and additional info. Upgraded from previous version (html+bootstrap on github pages), deployed on Vercel. No App link needed - You are already browsing it  :)',
    badges: [
      'Vite',
      'React',
      'React Router',
      'Headless Components',
      'Lazy',
      'Zustand',
      'Framer motion',
      'ES6',
      'Tailwind',
      'Typescript',
      'Vitest',
      'Jest',
      'React Testing Library',
    ],
    buttons: [
      {
        text: 'Code',
        url: 'https://github.com/xanoosh/portfolio-react',
        icon: 'codeIcon',
      },
    ],
  },
  {
    title: 'Storybook - React portfolio',
    description:
      'Documentation of React components, which were used to create this portfolio app, deployed on Vercel',
    badges: [
      'Vite',
      'React',
      'React Router',
      'Headless Components',
      'Lazy',
      'Framer motion',
      'ES6',
      'Tailwind',
      'Typescript',
      'Vitest',
      'Jest',
      'React Testing Library',
    ],
    buttons: [
      {
        text: 'App',
        url: 'https://portfolio-react-vite-storybook.vercel.app/storybook/index.html',
        icon: 'webIcon',
      },
      {
        text: 'Code',
        url: 'https://github.com/xanoosh/portfolio-react-storybook',
        icon: 'codeIcon',
      },
    ],
  },
  {
    title: 'Investment calculator',
    description:
      'Simple investment calculator app, which calculates the future value of an investment based on user input. Deployed on Vercel',
    badges: [
      'Vite',
      'React',
      'Nivo Charts',
      'Zustand',
      'Framer motion',
      'React Hook Form',
      'Tailwind',
      'Headless Components',
      'Typescript',
      'React-Use',
      'ES6',
    ],
    buttons: [
      {
        text: 'App',
        url: 'https://investment-calculator-red-five.vercel.app/',
        icon: 'webIcon',
      },
      {
        text: 'Code',
        url: 'https://github.com/xanoosh/investment-calculator',
        icon: 'codeIcon',
      },
    ],
  },
  {
    title: 'Weather app',
    description:
      '5 day forecast app, build with weather & geolocation API combined. Data is presented with charts from nivo, tailwind & headless components (Headless UI & Radix). Deployed on Vercel',
    badges: [
      'Vite',
      'React',
      'Nivo Charts',
      'React-Use',
      'Headless Components',
      'Framer motion',
      'TanStack Query',
      'REST API',
      'Zustand',
      'Typescript',
      'Tailwind',
    ],
    buttons: [
      {
        text: 'App',
        url: 'https://weather-app-blond-kappa.vercel.app/',
        icon: 'webIcon',
      },
      {
        text: 'Code',
        url: 'https://github.com/xanoosh/weather-app/',
        icon: 'codeIcon',
      },
    ],
  },
  {
    title: 'QR Code Generator',
    description:
      'Simple QR code generator app, which generates QR code based on user input. Deployed on Vercel',
    badges: [
      'Vite',
      'React',
      'Shadcn UI',
      'Zustand',
      'Tailwind',
      'Headless Components',
      'React Hook Form',
      'Zod',
      'Typescript',
    ],
    buttons: [
      {
        text: 'App',
        url: 'https://qr-code-generator-alpha-eight.vercel.app/',
        icon: 'webIcon',
      },
      {
        text: 'Code',
        url: 'https://github.com/xanoosh/qr-code-generator',
        icon: 'codeIcon',
      },
    ],
  },
  {
    title: 'Stat calculator',
    description:
      'React app for fuzzy searching pokemon (Fuse.js integration) and calculating their stats based on formula and received data. Deployed on Vercel. ',
    badges: [
      'Vite',
      'React',
      'Fuse.js',
      'Redux',
      'Redux Middleware',
      'TanStack Query',
      'Headless Components',
      'Local Storage',
      'Vitest',
      'React Testing Library',
      'REST API',
      'ES6',
      'SASS',
    ],
    buttons: [
      {
        text: 'App',
        url: 'https://vite-stat-checker.vercel.app/',
        icon: 'webIcon',
      },
      {
        text: 'Code',
        url: 'https://github.com/xanoosh/vite-stat-checker',
        icon: 'codeIcon',
      },
    ],
  },

  {
    title: 'Github user search',
    description:
      'App uses external Github API to fetch user projects data based on login provided. It uses front-end validation for empty field & displays messages based on response, deployed on Vercel',
    badges: [
      'Vite',
      'React',
      'TanStack Query',
      'React Hook Form',
      'React Router',
      'Lazy',
      'REST API',
      'ES6',
      'SASS',
      'BEM',
    ],
    buttons: [
      {
        text: 'App',
        url: 'https://github-user-search-five-opal.vercel.app',
        icon: 'webIcon',
      },
      {
        text: 'Code',
        url: 'https://github.com/xanoosh/github-user-search',
        icon: 'codeIcon',
      },
    ],
  },
  {
    title: 'Virtualized list',
    description:
      ' Simple app showcasing list virtualisation as well as lazy loading content. Both examples are built with custom hooks leveraging tanstack query and data consumption from 2 simple APIs. Deployed on Vercel',
    badges: [
      'Vite',
      'React',
      'TanStack Query',
      'Virtualisation',
      'React Router',
      'Lazy',
      'Typescript',
      'Tailwind',
      'REST API',
      'ES6',
    ],
    buttons: [
      {
        text: 'App',
        url: 'https://virtualised-list.vercel.app/',
        icon: 'webIcon',
      },
      {
        text: 'Code',
        url: 'https://github.com/xanoosh/virtualised-list',
        icon: 'codeIcon',
      },
    ],
  },
  {
    title: 'Terraforming calculator',
    description:
      'Simple app created in React Native with Expo. It was created to calculate resources in a board game, stores data locally. Build can be deployed to Android and IOS.',
    badges: ['React Native', 'Expo', 'Async Storage', 'ES6'],

    buttons: [
      {
        text: 'Code',
        url: 'https://github.com/xanoosh/terraforming-calculator-react-native',
        icon: 'codeIcon',
      },
    ],
  },
  {
    title: 'Snake',
    description:
      'Desktop only oldschool snake game, use arrow keys to move. Snake gets progressively faster.',
    badges: ['ES6', 'HTML', 'CSS'],

    buttons: [
      {
        text: 'App',
        url: 'https://xanoosh.github.io/portfolio/snake/',
        icon: 'webIcon',
      },
    ],
  },
  {
    title: "What's in my fridge app",
    description:
      'This app allowes you to search for recipes by ingredients you have. Created with zero-waste approach in mind. ',
    badges: ['REST API', 'ES6', 'HTML', 'CSS'],
    buttons: [
      {
        text: 'App',
        url: 'https://xanoosh.github.io/portfolio/recipe-api',
        icon: 'webIcon',
      },
    ],
  },
  {
    title: 'TimeZone app',
    description:
      'Simple app that calculates time in different time zones on input change. Consumes data from API on load.',
    badges: ['REST API', 'ES6', 'HTML', 'CSS'],

    buttons: [
      {
        text: 'App',
        url: 'https://xanoosh.github.io/portfolio/time-zones/',
        icon: 'webIcon',
      },
    ],
  },
  {
    title: 'Quiz',
    description:
      'Quiz app with customizable categories, difficulty and number of questions. Fetches data from external API.',
    badges: ['HTML', 'CSS', 'REST API', 'ES6'],

    buttons: [
      {
        text: 'App',
        url: 'https://xanoosh.github.io/portfolio/quiz-api/',
        icon: 'webIcon',
      },
    ],
  },
  {
    title: 'Texas Holdem Calculator',
    description:
      'Calculates the odds of winning for a player. Basically plays 10 000 poker games then displays result.',
    badges: ['ES6', 'HTML', 'CSS'],

    buttons: [
      {
        text: 'App',
        url: 'https://xanoosh.github.io/portfolio/poker-probability/',
        icon: 'webIcon',
      },
    ],
  },
  {
    title: 'Memo',
    description: 'Memory game with colored tiles. ',
    badges: ['ES6', 'HTML', 'CSS'],

    buttons: [
      {
        text: 'App',
        url: 'https://xanoosh.github.io/portfolio/memo/',
        icon: 'webIcon',
      },
    ],
  },
  {
    title: 'Dice Game',
    description: 'A simple dice game designed for 2 players.',
    badges: ['ES6', 'HTML', 'CSS'],

    buttons: [
      {
        text: 'App',
        url: 'https://xanoosh.github.io/portfolio/dice/',
        icon: 'webIcon',
      },
    ],
  },
];
export const badgesArray = [
  'Vite',
  'React',
  'TanStack Query',
  'Shadcn UI',
  'Headless Components',
  'React Hook Form',
  'Zod',
  'React Router',
  'Zustand',
  'Redux',
  'Redux Middleware',
  'Nivo Charts',
  'React-Use',
  'Framer motion',
  'React Native',
  'Tailwind',
  'Expo',
  'Lazy',
  'REST API',
  'Fuse.js',
  'Local Storage',
  'Async Storage',
  'Typescript',
  'Virtualisation',
  'Vitest',
  'Jest',
  'React Testing Library',
  'ES6',
  'SASS',
  'BEM',
  'HTML',
  'CSS',
];

export const storybookLink =
  'https://portfolio-react-vite-storybook.vercel.app/storybook/index.html';

export const techStack = [
  {
    title: 'React Framework',
    technologies: [
      'React',
      'React Hooks',
      'Vite',
      'Shadcn UI',
      'Headless Components',
      'Radix-UI',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'React-i18next',
      'React Router',
      'Code Splitting (Lazy)',
      'React Use',
      'Framer Motion',
      'Nivo Charts',
      'React Native',
      'Expo',
    ],
  },
  {
    title: 'Backend',
    technologies: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Unit Tests',
    technologies: ['React Testing Library', 'Jest', 'Vitest'],
  },
  {
    title: 'State Management',
    technologies: ['Zustand', 'Redux', 'Redux Middleware'],
  },

  {
    title: 'Tools',
    technologies: ['Jira', 'GitLab', 'Git', 'Github', 'Storybook'],
  },
  {
    title: 'Styling',
    technologies: ['CSS', 'SASS', 'BEM', 'Tailwind'],
  },
  {
    title: 'General',
    technologies: [
      'Javascript',
      'Typescript',
      'JQuery',
      'REST API',
      'Local Storage',
      'Async Storage',
      'SEO',
      'HTML',
      'PHP',
      'Smarty',
    ],
  },
  {
    title: 'Wordpress',
    technologies: ['Wordpress', 'ACF', 'CPT UI', 'Contact Form 7'],
  },
];

export const experience = {
  title: 'About me',
  text: 'My job experience in a nutshell, you can download my CV or navigate to my Github or LinkedIn account in the section below',
  list: [
    {
      title: 'HRLink | Frontend Developer - React',
      date: '08.2022 – 02.2024',
      responsibilities: [
        'Maintenance and development work in the ATS system and additional modules written in React',
        'Redesigning the system - rewriting parts of the ATS system into React using the technologies listed in the React Framework section',
        'Unit testing of React components',
      ],
    },
    {
      title: 'Gorillas.dev | Frontend Developer - React',
      date: '09.2021 – 08.2025',
      responsibilities: [
        'Maintenance and developmental work on a web application supporting the servicing and rental of printers, written in React',
        'Utilizing Redux for state management',
        'Using Apollo GraphQL for API interactions',
      ],
    },
    {
      title: 'DNS Group | Web Developer',
      date: '06.2019 - 09.2020',
      responsibilities: [
        'Creating website templates in WordPress tailored to client requirements',
        'Client communication and discussing the direction of project development',
        'Optimizing websites for search engines (SEO)',
      ],
    },
    {
      title: 'Page Interactive | Web Developer',
      date: '01.2019 - 06.2019',
      responsibilities: [
        'Involvement in the process of designing and prototyping websites',
        'Creating website templates using ACF and CPT UI in WordPress',
      ],
    },
  ],
};
