import FB from "../assets/images/Flappy-Clone.png";
import JSC from "../assets/images/JS-Calculator.png";
import MT from "../assets/images/Morse-Translator.png";
import PA from "../assets/images/Punk-API.png";
import FS from "../assets/images/Food-And-Stuff.png";
import NN from "../assets/images/Next-News.png";
import PT from "../assets/images/platformer.png";
import GS from "../assets/images/go.png";

import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoLogoFirebase } from "react-icons/io5";
import { SiJest, SiMaterialui, SiNextdotjs } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { GrGolang } from "react-icons/gr";

const projects = [
  {
    title: "2D Platformer Template",
    img: PT,
    githubUrl: "https://github.com/EHughes190/platformer-template",
    hostedUrl: "",
    skills: [<FaHtml5 />, <SiTypescript />],
    description:
      "A 2d platformer template built using HTML Canvas in both TS and JS to give the starting building blocks for any 2d game",
    id: "7",
  },
  {
    title: "GO Web Scraper",
    img: GS,
    githubUrl: "https://github.com/EHughes190/simple-go-scraper",
    hostedUrl: "",
    skills: [<GrGolang />],
    description: "A simple web scraper built in Go, utilising GoQuery package",
    id: "8",
  },
  {
    title: "Next News",
    img: NN,
    githubUrl: "https://github.com/EHughes190/Next-News",
    hostedUrl: "https://next-news-chi.vercel.app/",
    skills: [
      <SiNextdotjs />,
      <FaReact />,
      <FaSass />,
      <FiFigma />,
      <SiTypescript />,
    ],
    description:
      "A news app that displays current news stories from across several categories. Built using next.js and Typescript, the pages are rendered on build, fetching from the newsapi.org. Figma, Framer motion and SCSS are used for the styling.",
    id: "1",
  },
  {
    title: "Food and Stuff",
    img: FS,
    githubUrl: "https://github.com/EHughes190/Food-and-Stuff",
    hostedUrl: "https://e-commerce-1bb99.web.app/",
    skills: [<SiMaterialui />, <FaReact />, <IoLogoFirebase />, <FiFigma />],
    description:
      "A fun, dummy e-commerce checkout experience. The project utilises commerce.js to make API calls for products, and uses React for the front-end. Material UI is used for the design.",
    id: "2",
  },
  {
    title: "Punk API",
    img: PA,
    githubUrl: "https://github.com/EHughes190/Punk-API",
    hostedUrl: "https://punk-api-c310d.web.app/",
    skills: [<FaReact />, <FaSass />, <IoLogoFirebase />, <FiFigma />],
    description:
      "An app which fetches information from the Punk API, and displays this information as cards. The results can be filtered by ABV %, and by 'Classics', or by searching directly. Hosted with Firebase.",
    id: "3",
  },
  {
    title: "Flappy Clone",
    img: FB,
    githubUrl: "https://github.com/EHughes190/Flappy-Clone",
    hostedUrl: "https://ehughes190.github.io/Flappy-Clone/",
    skills: [<FaHtml5 />, <FaSass />, <FaJsSquare />],
    description:
      "A browser based, infinite runner game, built using HTML, SCSS and JavaScript. The core functionality of the game is created using JavaScript.  Although the game is best enjoyed on a mobile/ portrait device, it is scalable to any device width.",
    id: "4",
  },
  {
    title: "Morse Translator",
    img: MT,
    githubUrl: "https://github.com/EHughes190/morse-translator",
    hostedUrl: "https://ehughes190.github.io/morse-translator/",
    skills: [<FaHtml5 />, <FaSass />, <FaJsSquare />, <SiJest />],
    description:
      "A translator app built using HTML, SCSS and JavaScript. This project allows an input to be translated from English to Morse, and vice versa. This was a TDD project using Jest.",
    id: "5",
  },
  {
    title: "JS Calculator",
    img: JSC,
    githubUrl: "https://github.com/EHughes190/JS-Calculator",
    hostedUrl: "https://ehughes190.github.io/JS-Calculator/",
    skills: [<FaHtml5 />, <FaSass />, <FaJsSquare />, <SiCypress />],
    description:
      "A calculator built with JavaScript, HTML and SCSS. This project allowed me to practise my JS skills and fundamentals, as well as implement e2e testing using cypress.",
    id: "6",
  },
];

export default projects;
