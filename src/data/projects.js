import FB from "../assets/images/Flappy-Clone.png";
import JSC from "../assets/images/JS-Calculator.png";
import MT from "../assets/images/Morse-Translator.png";
import TT from "../assets/images/Ticket-Tracker.png";
import PA from "../assets/images/Punk-API.png";
import SM from "../assets/images/SCI-MX.png";

const projects = [
  {
    title: "Flappy Clone",
    img: FB,
    // img: "https://drive.google.com/uc?export=view&id=1xnpzcP5YMyvb4fCykaiBd5utHdDzpa-V",
    githubUrl: "https://github.com/EHughes190/Flappy-Clone",
    hostedUrl: "https://ehughes190.github.io/Flappy-Clone/",
    skills: ["HTML", "SCSS", "JavaScript"],
    description:
      "A browser based, infinite runner game, built using HTML, SCSS and JavaScript. The core functionality of the game is created using JavaScript.  Although the game is best enjoyed on a mobile/ portrait device, it is scalable to any device width.",
    id: "1",
  },
  {
    title: "Punk API",
    img: PA,
    githubUrl: "https://github.com/EHughes190/Punk-API",
    hostedUrl: "https://punk-api-c310d.web.app/",
    skills: ["React", "SCSS", "Firebase", "Figma"],
    description:
      "An app which fetches information from the Punk API, and displays this information as cards. The results can be filtered by ABV %, and by 'Classics', or by searching directly. Hosted with Firebase.",
    id: "2",
  },
  {
    title: "Morse Translator",
    img: MT,
    // img: "https://drive.google.com/uc?export=view&id=1jEgn1EvGIAR1zUiv63BIs0k_E4RxJSA2",
    githubUrl: "https://github.com/EHughes190/morse-translator",
    hostedUrl: "https://ehughes190.github.io/morse-translator/",
    skills: ["HTML", "SCSS", "JavaScript", "Jest"],
    description:
      "A translator app built using HTML, SCSS and JavaScript. This project allows an input to be translated from English to Morse, and vice versa. This was a TDD project using Jest.",
    id: "3",
  },
  {
    title: "Team Ticket Tracker",
    img: TT,
    githubUrl: "https://github.com/EHughes190/ticket-tracker",
    hostedUrl: "https://ehughes190.github.io/ticket-tracker/",
    skills: ["React", "SCSS"],
    description:
      "An app to track individual employee's ticket count. Built in 3 hours to practice pair programming.",
    id: "4",
  },
  {
    title: "JS Calculator",
    img: JSC,
    //img: "https://drive.google.com/uc?export=view&id=1xCP9a7DZpzC4TACMZSP8hW3KfUunSeRO",
    githubUrl: "https://github.com/EHughes190/JS-Calculator",
    hostedUrl: "https://ehughes190.github.io/JS-Calculator/",
    skills: ["HTML", "SCSS", "JavaScript", "Cypress"],
    description:
      "A calculator built with JavaScript, HTML and SCSS. This project allowed me to practise my JS skills and fundamentals, as well as implement e2e testing using cypress.",
    id: "5",
  },
  {
    title: "SCI-MX Fitness Tracker",
    img: SM,
    githubUrl: "https://github.com/nology-tech/sci-mx",
    hostedUrl: "https://client-project-f60f4.firebaseapp.com/",
    skills: ["SCSS", "React", "Firebase", "Figma"],
    description:
      "This React and Firebase project was created in collaboration with Ross Richardson and Gemma Peakman from SCIMX and the Fiji intake from the _nology software development course.",
    id: "6",
  },
];

export default projects;
