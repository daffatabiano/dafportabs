import {
  antdesign,
  axios,
  backend,
  bootstrap,
  canva,
  coffee,
  creator,
  css,
  dcrepes,
  dibimbing,
  figma,
  firebase,
  git,
  gitlab,
  html,
  javascript,
  mobile,
  nextjs,
  nodejs,
  nusa,
  pervite,
  reactjs,
  redux,
  scss,
  sociall,
  tailwind,
  threejs,
  trv,
  typescript,
  web,
  wordpress,
} from '../assets';

const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'UI/UX Designer',
    icon: web,
  },
  {
    title: 'Problem Solver',
    icon: mobile,
  },
  {
    title: 'Website Designer',
    icon: backend,
  },
  {
    title: 'Wordpress Developer',
    icon: creator,
  },
];

const experiences = [
  {
    title: 'Crew Staff',
    company_name: 'Jaddi+',
    icon: dcrepes,
    iconBg: '#fbbf24',
    date: 'Feb 2021 - Nov 2023',
    points: [
      'Took orders,prepared meals, and collected orders. Assisted other team members to achieve goals on more than 200 million/month.',
      'Trained new team members on procedures, customer service and sales techniques',
      'Operator cash register to ring up final bill and process various forms of payment.',
      ' Work extra shift during busy periods and cover to reports daily sales for make a growth more value',
    ],
  },
  {
    title: 'Student Developer',
    company_name: 'Dibimbing.ID',
    icon: dibimbing,
    iconBg: '#fbbf24',
    date: 'Oct 2023 - May 2024',
    points: [
      'Exploring and Learning about HTML, CSS, and JavaScript from basic to advanced.',
      'Mastering modern technologies frameworks and libraries such as React, Redux, and Tailwind.',
      'Implementing responsive design and functionalities for web applications.',
      'Building and maintaining web from scratch using React and other related technologies.',
    ],
  },
  {
    title: 'Wordpress Developer',
    company_name: 'Pervite.com',
    icon: pervite,
    iconBg: '#fbbf24',
    date: 'June 2024 - Present (freelancer)',
    points: [
      'Plan, design and develop new WordPress themes specifically for wedding invitation websites according to client necessities.',
      'Implement the features needed for a wedding invitation website, such as RSVP forms, photo galleries, location maps, and integration with payment platforms.',
      'Work closely with the design, development and marketing teams to ensure the project runs according to plan.',
      'Ensure the themes developed are compatible with various browsers and devices.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Nusantech',
    icon: nusa,
    iconBg: '#fbbf24',
    date: 'May 2024 - Aug 2024',
    points: [
      'Develop and Maintain the user interface(UI) for the NusaLMS application.',
      'Improving user experience (UX) with responsive and interactive design.',
      'Collaborate with the Backend Team to ensure integration runs smoothly between the Frontend and Backend.',
      'Debugging and Testing to ensure the app goes well/ Daily reporting and koordinate with team above what im going everyday.',
    ],
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'wordpress',
    icon: wordpress,
  },
  {
    name: 'antdesign',
    icon: antdesign,
  },
  {
    name: 'scss',
    icon: scss,
  },
  {
    name: 'firebase',
    icon: firebase,
  },
  {
    name: 'gitlab',
    icon: gitlab,
  },
  {
    name: 'axios',
    icon: axios,
  },
  {
    name: 'bootstrap',
    icon: bootstrap,
  },
  {
    name: 'canva',
    icon: canva,
  },
];

const projects = [
  {
    name: 'Soci-ALL.',
    description:
      'This Sociall website was created with the rest API from dibimbing.id with the theme Photosharing aimed at photo interaction from all Sociall users and unlimited exploration.',
    tags: [
      {
        name: 'react',
        color: 'text-amber-100',
      },
      {
        name: 'restapi',
        color: 'text-amber-600',
      },
      {
        name: 'antdesign',
        color: 'text-blue-600',
      },
    ],
    image: sociall,
    source_code_link: 'https://github.com/daffatabiano/React_Project',
  },
  {
    name: 'T - Ravel - V',
    description:
      'To Ravel Find Freedom a travel  websiter designed to makes it easier on traveling. The website also offering controlling features, for the Admin role. Provide CRUD Service for admin.',
    tags: [
      {
        name: 'nextjs',
        color: 'text-amber-100',
      },
      {
        name: 'restapi',
        color: 'text-amber-600',
      },
      {
        name: 'sass',
        color: 'text-rose-600',
      },
      {
        name: 'tailwindcss',
        color: 'text-blue-600',
      },
    ],
    image: trv,
    source_code_link: 'https://github.com/daffatabiano/trv',
  },
  {
    name: "Coffee Terio's and Toast",
    description:
      'Easy and fast online coffee ordering application. Order a variety of coffee choices, from classic espresso to our special menu, straight from your phone. Choose the appropriate payment method .',
    tags: [
      {
        name: 'nextjs',
        color: 'text-amber-100',
      },
      {
        name: 'firebase',
        color: 'text-amber-600',
      },
      {
        name: 'sass',
        color: 'text-rose-600',
      },
      {
        name: 'antdesign',
        color: 'text-blue-600',
      },
    ],
    image: coffee,
    source_code_link: 'https://github.com/daffatabiano/NextTeriosCoffee',
  },
];

const certs = [
  {
    cert: cert_dibimbing,
    name: 'Frontend Developer',
    designation: 'May 2024',
    company: 'Dibimbing.ID',
    image: tesla,
  },
  {
    cert: cert_nusatech,
    name: 'Frontend Developer',
    designation: 'August 2024',
    company: 'Nusantech',
    image: meta,
  },
  {
    cert: cert_freecodecamp,
    name: 'Javascript Advanced',
    designation: 'February 2024',
    company: 'FCC',
    image:
      'https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg',
  },
];

export { navLinks, services, experiences, technologies, projects, certs };
