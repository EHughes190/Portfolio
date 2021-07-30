import FB from "../assets/images/Flappy-Clone.png";
import JSC from "../assets/images/JS-Calculator.png";
import MT from "../assets/images/Morse-Translator.png";
import TT from "../assets/images/Ticket-Tracker.png";
import PA from "../assets/images/Punk-API.png";
import SM from "../assets/images/SCI-MX.png";
import TST from "../assets/images/tennis-ball.png";
import FS from "../assets/images/Food-And-Stuff.png";

import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoLogoFirebase } from "react-icons/io5";
import { SiJest, SiMaterialUi } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const projects = [
  {
    title: "Food and Stuff",
    img: FS,
    githubUrl: "https://github.com/EHughes190/Food-and-Stuff",
    hostedUrl: "https://e-commerce-1bb99.web.app/",
    skills: [<SiMaterialUi />, <FaReact />, <IoLogoFirebase />, <FiFigma />],
    description:
      "A fun, dummy e-commerce checkout experience. The project utilises commerce.js to make API calls for products, and uses React for the front-end. Material UI is used for the design.",
    id: "1",
  },
  {
    title: "Flappy Clone",
    img: FB,
    // img: "https://drive.google.com/uc?export=view&id=1xnpzcP5YMyvb4fCykaiBd5utHdDzpa-V",
    githubUrl: "https://github.com/EHughes190/Flappy-Clone",
    hostedUrl: "https://ehughes190.github.io/Flappy-Clone/",
    skills: [<FaHtml5 />, <FaSass />, <FaJsSquare />],
    description:
      "A browser based, infinite runner game, built using HTML, SCSS and JavaScript. The core functionality of the game is created using JavaScript.  Although the game is best enjoyed on a mobile/ portrait device, it is scalable to any device width.",
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
    title: "Morse Translator",
    img: MT,
    // img: "https://drive.google.com/uc?export=view&id=1jEgn1EvGIAR1zUiv63BIs0k_E4RxJSA2",
    githubUrl: "https://github.com/EHughes190/morse-translator",
    hostedUrl: "https://ehughes190.github.io/morse-translator/",
    skills: [<FaHtml5 />, <FaSass />, <FaJsSquare />, <SiJest />],
    description:
      "A translator app built using HTML, SCSS and JavaScript. This project allows an input to be translated from English to Morse, and vice versa. This was a TDD project using Jest.",
    id: "4",
  },
  {
    title: "Team Ticket Tracker",
    img: TT,
    githubUrl: "https://github.com/EHughes190/ticket-tracker",
    hostedUrl: "https://ehughes190.github.io/ticket-tracker/",
    skills: [<FaReact />, <FaSass />],
    description:
      "An app to track individual employee's ticket count. Built in 3 hours to practice pair programming.",
    id: "5",
  },
  {
    title: "SCI-MX Fitness Tracker",
    img: SM,
    githubUrl: "https://github.com/nology-tech/sci-mx",
    hostedUrl: "https://client-project-f60f4.firebaseapp.com/",
    skills: [<FaSass />, <FaReact />, <IoLogoFirebase />, <FiFigma />],
    description:
      "This React and Firebase project was created in collaboration with Ross Richardson and Gemma Peakman from SCIMX and the Fiji intake from the _nology software development course.",
    id: "6",
  },
  {
    title: "JS Calculator",
    img: JSC,
    //img: "https://drive.google.com/uc?export=view&id=1xCP9a7DZpzC4TACMZSP8hW3KfUunSeRO",
    githubUrl: "https://github.com/EHughes190/JS-Calculator",
    hostedUrl: "https://ehughes190.github.io/JS-Calculator/",
    skills: [<FaHtml5 />, <FaSass />, <FaJsSquare />, "Cypress"],
    description:
      "A calculator built with JavaScript, HTML and SCSS. This project allowed me to practise my JS skills and fundamentals, as well as implement e2e testing using cypress.",
    id: "7",
  },
  {
    title: "Tennis Score Tracker",
    img: TST,
    // img: "https://drive.google.com/uc?export=view&id=1xnpzcP5YMyvb4fCykaiBd5utHdDzpa-V",
    githubUrl: "https://github.com/EHughes190/Tennis-Score-Tracker",
    hostedUrl: "https://github.com/EHughes190/Tennis-Score-Tracker",
    skills: [<FaReact />, <FaSass />, <FaJava />, <FiFigma />, <GrMysql />],
    description:
      "UNDER CONSTRUCTION. A full stack web app to track the scores of your tennis matches with friends.",
    id: "8",
  },
];

export default projects;
