import {
  antdesign,
  api,
  axios,
  backend,
  bootstrap,
  canva,
  cert_dibimbing,
  cert_freecodecamp,
  cert_nusatech,
  coffee,
  creator,
  css,
  dashboards,
  dcrepes,
  dibimbing,
  express,
  figma,
  firebase,
  git,
  github2,
  gitlab,
  html,
  javascript,
  loan,
  mobile,
  mongodb,
  mongoose,
  mysql,
  nextjs,
  nodejs,
  nusa,
  office,
  pervite,
  postman,
  reactjs,
  redux,
  scss,
  sequelize,
  sociall,
  spark,
  tailwind,
  threejs,
  toastify,
  trv,
  tsParticles,
  typescript,
  vscode,
  vue,
  web,
  wordpress,
} from '../assets';

const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'project',
    title: 'Project',
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
  {
    title: 'Frontend Developer',
    company_name: 'Loan Market Indonesia',
    icon: loan,
    iconBg: '#fbbf24',
    date: 'Dec 2024 - Present',
    points: [
      'Create and enhance web application user interfaces using HTML, CSS, and JavaScript, ensuring functional and visually appealing designs.',
      'Build responsive and cross-browser compatible applications that perform seamlessly on various devices and platforms.',
      'Work closely with design teams to translate visual designs into functional front-end code and collaborate with back-end teams to integrate APIs and services.',
      'Apply best practices for web development, including security and accessibility standards, while staying informed about the latest front-end technologies and trends.',
    ],
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
    divisi: 'Frontend',
  },
  {
    name: 'CSS 3',
    icon: css,
    divisi: 'Frontend',
  },
  {
    name: 'JavaScript',
    icon: javascript,
    divisi: 'Frontend',
  },
  {
    name: 'TypeScript',
    icon: typescript,
    divisi: 'Frontend',
  },
  {
    name: 'React JS',
    icon: reactjs,
    divisi: 'Frontend',
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
    divisi: 'Frontend',
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
    divisi: 'Frontend',
  },
  {
    name: 'Node JS',
    icon: nodejs,
    divisi: 'Backend',
  },
  {
    name: 'Next JS',
    icon: nextjs,
    divisi: 'Frontend',
  },
  {
    name: 'Three JS',
    icon: threejs,
    divisi: 'Frontend',
  },
  {
    name: 'git',
    icon: git,
    divisi: 'others',
  },
  {
    name: 'figma',
    icon: figma,
    divisi: 'Frontend',
  },
  {
    name: 'wordpress',
    icon: wordpress,
    divisi: 'others',
  },
  {
    name: 'antdesign',
    icon: antdesign,
    divisi: 'Frontend',
  },
  {
    name: 'scss',
    icon: scss,
    divisi: 'Frontend',
  },
  {
    name: 'firebase',
    icon: firebase,
    divisi: 'Backend',
  },
  {
    name: 'gitlab',
    icon: gitlab,
    divisi: 'others',
  },
  {
    name: 'axios',
    icon: axios,
    divisi: 'Backend',
  },
  {
    name: 'bootstrap',
    icon: bootstrap,
    divisi: 'Frontend',
  },
  {
    name: 'canva',
    icon: canva,
    divisi: 'Frontend',
  },
  {
    name: 'tsParticles',
    icon: tsParticles,
    divisi: 'Frontend',
  },
  {
    name: 'office365',
    icon: office,
    divisi: 'others',
  },
  {
    name: 'toastify',
    icon: toastify,
    divisi: 'Frontend',
  },
  {
    name: 'github',
    icon: github2,
    divisi: 'others',
  },
  {
    name: 'vscode',
    icon: vscode,
    divisi: 'others',
  },
  {
    name: 'spark-ar',
    icon: spark,
    divisi: 'others',
  },
  {
    name: 'MongoDB',
    icon: mongodb,
    divisi: 'Backend',
  },
  {
    name: 'Mongoose',
    icon: mongoose,
    divisi: 'Backend',
  },
  {
    name: 'Express',
    icon: express,
    divisi: 'Backend',
  },
  {
    name: 'REST API',
    icon: api,
    divisi: 'Backend',
  },
  {
    name: 'Vue JS',
    icon: vue,
    divisi: 'Frontend',
  },
  {
    name: 'MySQL',
    icon: mysql,
    divisi: 'Backend',
  },
  {
    name: 'Sequelize',
    icon: sequelize,
    divisi: 'Backend',
  },
  {
    name: 'Postman',
    icon: postman,
    divisi: 'others',
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
    name: 'MERN Stack Developer',
    description:
      '"Restaurant Management System A project built with MERN stack, created to streamline operations. The platform includes robust features for managing inventory, order processing, and customer interactions.',
    tags: [
      {
        name: 'MongoDB',
        color: 'text-amber-100',
      },
      {
        name: 'Express',
        color: 'text-amber-600',
      },
      {
        name: 'React',
        color: 'text-rose-600',
      },
      {
        name: 'NodeJS',
        color: 'text-blue-600',
      },
    ],
    image: trv,
    source_code_link: 'https://github.com/daffatabiano/mernstack-clientside',
  },
  {
    name: 'Management System',
    description:
      'Efficient and robust dashboard management system. Handle all CRUD operations seamlessly with cutting-edge MEVN stack technology, crafted in just 3 days. Secure protected routes ensure only auth users.',
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
    image: dashboards,
    source_code_link:
      'https://github.com/daffatabiano/Rimba-Ananta-Vikasa-Indonesia',
  },
];

const certs = [
  {
    cert: cert_dibimbing,
    name: 'Frontend Developer',
    designation: 'May 2024',
    company: 'Dibimbing.ID',
    image: dibimbing,
  },
  {
    cert: cert_nusatech,
    name: 'Frontend Developer',
    designation: 'August 2024',
    company: 'Nusantech',
    image: nusa,
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
