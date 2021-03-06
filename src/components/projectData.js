import Kintsugi from "../images/project/kintsugi.gif";
import Scheduler from "../images/project/scheduler.gif";
import Jungle from "../images/project/Jungle.gif";
import WikiMap from "../images/project/wikimap.gif";
import PennyTracker from "../images/project/penny-tacker.png";
// import Natuor from "../images/Natour.gif";

export const projectData = [
  {
    id: 1,
    title: "Kintsugi",
    img: [Kintsugi],
    description:
      "Three people's team project to build an app that aims to promote accessibility to mental healthcare for immigrants by connection them tp providers of their cultural/ linguistic background.It allows to users to book an appointment with transcribed voice messages and able to have video chatting.",
    tech: [
      "React",
      "Express.js",
      "socket.io",
      "SCSS",
      "PostgreSQL",
      "Cypress",
    ],
    github: "https://github.com/Oaya/kintsugi",
    url: "https://625b5f2c08bfe0738c9980f5--scintillating-faloodeh-769e38.netlify.app/",
  },
  {
    id: 2,
    title: "Scheduler",
    img: [Scheduler],
    description:
      "React scheduling application that allows users to book, edit and cancel interview by picking up  an available interviewer and time  up to appointments each day. ",
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
    url: "https://relaxed-wright-b7e3dd.netlify.app/",
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
      "Three people's team project to develop an application that users are able to create editable maps and pins with google map.",
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
    url: "https://wiki-map-app.herokuapp.com/",
  },
  {
    id: 5,
    title: "Penny-tracker",
    img: [PennyTracker],
    description:
      "Budget app with react to track user's expenses and incomes. Users are able to see income and expenses with pie chart by categories.",
    tech: [
      "React",
      "React-chart.js",
      "Firebase",
      "SCSS",
      "date-fns",
    ],
    github:
      "https://github.com/Oaya/Penny-tracker",
    url: "https://oaya.github.io/Penny-tracker/#/",
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
