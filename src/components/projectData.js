import Kintsugi from "../images/kintsugi.gif";
import Scheduler from "../images/scheduler.gif";
import Jungle from "../images/Jungle.gif";
import WikiMap from "../images/wikimap.gif";
import PennyTracker from "../images/penny-tacker.png";
import Natuor from "../images/Natour.gif";

export const projectData = [
  {
    id: 1,
    title: "Kintsugi",
    img: [Kintsugi],
    description:
      "3 person team project to build an app that aims to promote accessibility to mental healthcare for immigrants by connection them tp providers of their cultural/linguistic background. It allows to users to book an appointment with transcribed voice messages and able to have video chatting.",
    tech: [
      "React",
      "Express.js",
      "socket.io",
      "SCSS",
      "PostgreSQL",
      "Cypress",
    ],
    github: "https://github.com/Oaya/kintsugi",
  },
  {
    id: 2,
    title: "Scheduler",
    img: [Scheduler],
    description:
      "React scheduling application that allows users to book and cancel interview up to appointments each day.",
    tech: [
      "React",
      "Axios",
      "Node.js",
      "WebSockets",
      "PostgreSQL",
      "Cypress",
      "Jest",
      "Storybook",
    ],
    github: "https://github.com/Oaya/Scheduler",
  },
  {
    id: 3,
    title: "Jungle-rails",
    img: [Jungle],
    description:
      "A mini e-commerce application built with Rails 4.2 for purposes of teaching Rails by example. Tested application using RSpec and Capybara.",
    tech: [
      "Ruby on Rails",
      "PostgreSQL",
      "RSpec",
      "Capybara",
    ],
    github:
      "https://github.com/Oaya/jungle-rails",
  },
  {
    id: 4,
    title: "Map-wiki",
    img: [WikiMap],
    description:
      "3 person team project to build an app that create editable maps with pins",
    tech: [
      "jQuery",
      "Node.js",
      "Express.js",
      "Google map API",
      "SCSS",
      "cookie-parser",
      "ejs",
    ],
    github: "https://github.com/Oaya/T2_midterm",
  },
  {
    id: 5,
    title: "Penny-tracker",
    img: [PennyTracker],
    description:
      "Budget app with react to track user's expenses and incomes",
    tech: [
      "React",
      "React-chart.js",
      "Firebase",
      "SCSS",
      "date-fns",
    ],
    github: "https://github.com/Oaya/pennytraker",
  },
  // {
  //   id: 6,
  //   title: "Natours",
  //   img: [Natuor],
  //   description: "A responsive design website of tourist company",
  //   tech: ['SCSS'],
  //   github: "https://github.com/Oaya/Natours",
  // }
];
