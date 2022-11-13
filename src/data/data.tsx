import {
  AcademicCapIcon,
  CalendarIcon,
  //DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpeg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
//import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import profilepic from '../images/profilepic.jpg';
//import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  //TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Joseph Sidley Portfolio Website',
  description: "Site built using Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Joseph Sidley.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Johannesburg/Cape Town based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        as a <strong className="text-stone-100">Research Assistant at the University of Cape Town</strong> helping build a visual, extensible,
        microbial carbohydrate database web-tool to help in vaccine research.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can find me playing squash or football,
        playing my saxophone, or hiking through the Magaliesberg and Cape mountains.
      </p>
    </>
  ),
  actions: [
    /*{
      href: '/src/assets/JosephSidleyCurriculumVitae.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },*/
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Throughout my time as a student at the University of Cape Town, I have become increasingly interested in the use of computer science and statistics in the analysis of large datasets, particularly using statistical techniques and machine learning to uncover insights that may be invisible using traditional analytics, with a particular focus on the use of neural networks and evolutionary computation in understanding these datasets and working on multidimensional problems. I have also worked on web development and software development projects and have enjoyed these immensely. These skills that I have developed could be employed in potentially any area of industry. Working at SovTech would be such an amazing oppurtunity for me as I am so excited to get into the real world of software engineering and to get to learn from such amazing people working with such modern and exciting brands. The idea of doing such modern development with a uniquely African perspective is something I really resonate with. I am excited to learn where my skills will best be applied, through working on different projects with different teams. I have heard amazing things about the culture at SovTech, and I would love to be a part of that.`,
  aboutItems: [
    {label: 'Location', text: 'Johannesburg, South Africa', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'South African/English', Icon: FlagIcon},
    {label: 'Interests', text: 'Football, Saxophone, Hiking, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Cape Town', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'University of Cape Town and Get Smart Tutoring Agency', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Javascript',
        level: 6,
      },
      
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 10,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'PHP',
        level: 4,
      },
    ],
  },
  {
    name: 'Data Analysis',
    skills: [
      {
        name: 'Python + Frameworks',
        level: 9,
      },
      {
        name: 'R',
        level: 8,
      },
      {
        name: 'SQL',
        level: 7,
      },
    ],
  },
];
export const aboutData2: About = {
  profileImageSrc: profilepic,
  description: `Throughout my time as a student at the University of Cape Town, I have become increasingly interested in the use of computer science and statistics in the analysis of large datasets, particularly using statistical techniques and machine learning to uncover insights that may be invisible using traditional analytics, with a particular focus on the use of neural networks and evolutionary computation in understanding these datasets and working on multidimensional problems. I have also worked on web development and software development projects and have enjoyed these immensely. These skills that I have developed could be employed in potentially any area of industry. `,
  aboutItems: [
    {label: 'Location', text: 'Johannesburg, South Africa', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'South African/English', Icon: FlagIcon},
    {label: 'Interests', text: 'Football, Saxophone, Hiking, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Cape Town', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'University of Cape Town and Get Smart Tutoring Agency', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Propositional Logic Caclulator',
    description: 'This project involved building a full stack solution to calculate the output of propositional logic statements',
    url: 'https://github.com/joesidley',
    image: porfolioImage1,
  },
  {
    title: 'Honours project: Glycan3DB',
    description: 'My final year thesis was concerned with the development and implementation of a database dashboard web tool named Glycan3DB for carbohydrate visualisation and research. This was a full stack development project, incorporating database design, front end and back end development',
    url: 'https://github.com/joesidley',
    image: porfolioImage5,
  },
  {
    title: 'Backend: Metaheuristics',
    description: 'This java project involved creating a genetic algorithm and an ant colony optimiser in order to complete the Capacitated Vehicle Routing Problem with Time-Windows',
    url: 'https://github.com/joesidley',
    image: porfolioImage3,
  },
  {
    title: 'Artifical Intelligence: Convolutional Neural Network',
    description: 'This project used tensorflow and keras in order to develop a CNN for classification of chest x-rays into classes of lungs with bacterial and viral pneumonia, or healthy lungs',
    url: 'https://github.com/joesidley',
    image: porfolioImage4,
  }/*,
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  }*/
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2014 - 2018',
    location: 'St John\'s College',
    title: 'Matric',
    content: <p>I acheived 6 distictions including a 95% in mathematics, and an average of 88%, whilst being a prefect and participating in many sports, music clubs and other societies.</p>,
  },
  {
    date: '2019 - 2021',
    location: 'Univeristy of Cape Town',
    title: 'Bachelor of Sciences in Computer Science and Applied Statistics',
    content: <p>Having acquired a merit scholarship to UCT, I went on to be in the Dean's List for First Year and acheived a 74% GPA.</p>,
  },
  {
    date: '2022',
    location: 'University of Cape Town',
    title: 'Honours in Computer Sciences',
    content: <p>This honours year included course work and thesis work (Glycan3DB) and although my marks are not completely out yet, I currently have a 78%GPA.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2020 - Present',
    location: 'Get Smart Tutors',
    title: 'Mathematics and Physical Science Tutor',
    content: (
      <p>
        I have been tutoring grade 7-12s in Mathematics, Advanced Programme Mathematics, Physics and Chemistry since my second year of univeristy. This teaching position gave be a good sense of responsibility and helped my ability to explain concepts. I also often worked with students in need through the Students for a Better Future initiative started by Get Smart which was extremely rewarding.
      </p>
    ),
  },
  {
    date: 'November 2022 - December 2022 (Expected)',
    location: 'University of Cape Town',
    title: 'Research Assistant to Prof. Michelle Kuttel',
    content: (
      <p>
        My supervisor requested that I continued my honour's project for a month after university as a paid research assistant in order to expand the scope and usability of the dashboard. This has been an immensely enjoyable experience as a lot of hard work went in this project and turning it into a daily use tool is extremely gratifying.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
/*export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};*/

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'joesidley1@gmail.com',
      href: 'mailto:joesidley1@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Johannesburg, South Africa',
      href: 'https://www.google.com/maps/place/Parkview,+Johannesburg,+2122/@-26.1636525,28.0277004,15z/data=!3m1!4b1!4m5!3m4!1s0x1e950c629612beb9:0x89241453f36153f8!8m2!3d-26.1614439!4d28.0273914',
    },
    {
      type: ContactType.Instagram,
      text: '@joesidley',
      href: 'https://www.instagram.com/joesidley/',
    },
    {
      type: ContactType.Github,
      text: 'joesidley',
      href: 'https://github.com/joesidley',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/joesidley'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/joseph-sidley-6394b6229/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/joesidley/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/joe_sidley'},
];
