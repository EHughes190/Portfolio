import FB from "../assets/images/Flappy-Clone.png";
import JSC from "../assets/images/JS-Calculator.png";
import MT from "../assets/images/Morse-Translator.png";

const projects = [
  {
    title: "Flappy Clone",
    img: FB,
    // img: "https://drive.google.com/uc?export=view&id=1xnpzcP5YMyvb4fCykaiBd5utHdDzpa-V",
    githubUrl: "https://github.com/EHughes190/Flappy-Clone",
    pagesUrl: "https://ehughes190.github.io/Flappy-Clone/",
    skills: ["HTML", "SCSS", "JavaScript"],
    description:
      "A browser based, infinite runner game, built using HTML, SCSS and JavaScript. The core functionality of the game is created using JavaScript. The game features a session based highscore system, and crisp collision detection. Although the game is best enjoyed on a mobile/ portrait device, it is scalable to any device width.",
    id: "a",
  },

  {
    title: "JS Calculator",
    img: JSC,
    //img: "https://drive.google.com/uc?export=view&id=1xCP9a7DZpzC4TACMZSP8hW3KfUunSeRO",
    githubUrl: "https://github.com/EHughes190/JS-Calculator",
    pagesUrl: "https://ehughes190.github.io/JS-Calculator/",
    skills: ["HTML", "SCSS", "JavaScript", "Cypress"],
    description:
      "A calculator built with JavaScript, HTML and SCSS. This project allowed me to practise my JS skills and fundamentals, as well as implement e2e testing using cypress.",
    id: "b",
  },

  {
    title: "Morse Translator",
    img: MT,
    // img: "https://drive.google.com/uc?export=view&id=1jEgn1EvGIAR1zUiv63BIs0k_E4RxJSA2",
    githubUrl: "https://github.com/EHughes190/morse-translator",
    pagesUrl: "https://ehughes190.github.io/morse-translator/",
    skills: ["HTML", "SCSS", "JavaScript", "Jest"],
    description:
      "A transaltor app built using HTML, SCSS AND JavaScript. This project allows an input to be translated from English to Morse, and vice versa. I was able to implement Unit testing using Jest in this project. The main functionality of the translation is based around two functions, which contain an object of alpha/numeric key: value pairs.",
    id: "c",
  },
];

export default projects;
