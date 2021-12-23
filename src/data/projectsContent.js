import searchgit from "../images/searchgit.png";
import javazol from "../images/javazol.png";
import countdown from "../images/countdown.png";
import draw from "../images/draw.png";


export const ProjectsContent = [
  {
    link: "https://github.com/izolama/github-profile",
    img: searchgit,
    name: "github-profile",
    excerpt: `This is a prject i made to search github user profile and open source in github.`,
    tools: "JavaScript · CSS · Html · GithubApi"
  },
  {
    link: `${window.location.origin}`,
    img: javazol,
    name: "javazol (this website)",
    excerpt: `A personal website simulating the Google Search platform. Developed with
    HTML, CSSS and React`,
    tools: "React · CSS"
  },
  {
    link: "https://github.com/izolama/Countdown",
    img: countdown,
    name: "Countdown New Years",
    excerpt: `A project to provide countdown new years to open source projects.`,
    tools: "Html · CSS · Javascript"
  },
  {
    link: "https://github.com/izolama/Drawing-app",
    img: draw,
    name: "Drawing",
    excerpt: `A project to provide countdown new years to open source projects.`,
    tools: "JavaScript · Html · CSS "
  }
];
