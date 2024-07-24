const projectsData = [
  {
    title: "NC-News Backend Project",
    description: "A backend Project using Postgres, Sql and render to go live, add /a.p.i. to view all available endpoints",
    image: "./Assets/Images/database.png",
    github: "https://github.com/Gazdean/be-nc1-news1",
    liveProject:"https://newsflash-e6p1.onrender.com"
  },
  {
    title: "NC-News Frontend Project",
    description: "A react project,  which uses the NC-News backend project as an a.p.i.",
    image: "./Assets/Images/nc-news-frontend.png",
    github: "https://github.com/Gazdean/fe-nc-news",
    liveProject:"https://gd-nc-news.netlify.app/"
  },
  {
    title: "Flush Finder",
    description: "A toilet finder app, use current location or a city drop down menu to find the toilets around you, allows filtering to help those with particular needs",
    image: "./Assets/Images/flush-finder.png",
    github: "https://github.com/OJ423/flush-finder",
    liveProject:""
  },
  {
    title: "Squircles Game",
    description: "A spatial memory game built with React and styled using Bootstrap. The player is shown 3 squircle shapes which must then be recreated using 3 sliders.  Two game stories are available, a random practice game and a daily game which is the same for all players this uses local storage to keep track of the player's stats ",
    image: "./Assets/Images/squirclesgame.png",
    github: "https://github.com/OJ423/flush-finder",
    liveProject:"https://squirclesgame.com/"
  },
  {
    title: "Gather Events",
    description: "An events platform for a small business, allowing staff to create events and share with users. Users can sign up for events and add them to their personal calendar. Built using React, React-Bootstrap and Firebase for authentication, it also utilises several API's including Google calendar API, Unsplash API for images and interacts with the Eventbrite API to create and fetch events ",
    image: "./Assets/Images/gatherEvents.png",
    github: "https://github.com/Gazdean/events-front-end",
    liveProject:"https://gatherevents.netlify.app/"
  },
];

const githubIcon = "fab fa-github"
const webIcon = "fas fa-globe";

function renderProjects() {

  const projectsContainer = document.getElementById("projects-container");

  projectsData.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className = "project";

    const titleElement = document.createElement("h3");
    titleElement.textContent = project.title;
    titleElement.className = "project-title";

    const imageElement = document.createElement("img");
    imageElement.src = project.image;
    imageElement.alt = `a screen shot of the ${project.title} project`;
    imageElement.className = "project-image";

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = project.description;
    descriptionElement.className = "project-description";

    // Link Div anchor and icons

    const iconContainer = document.createElement("div");
    iconContainer.className = "icon-container";

    const githubAnchorElement = document.createElement("a")
    githubAnchorElement.href = project.github
    githubAnchorElement.setAttribute("aria-label", `${project.title} GitHub Link`);
    githubAnchorElement.className = `project-link`

    const githubIconElement = document.createElement("i")
    githubIconElement.className = `${githubIcon} right-icon`

    githubAnchorElement.appendChild(githubIconElement)

    iconContainer.appendChild(githubAnchorElement)

  

    if(project.liveProject.length) {
    const liveProjectAnchorElement = document.createElement("a")
    liveProjectAnchorElement.href = project.liveProject
    liveProjectAnchorElement.setAttribute("aria-label", `${project.title} Live Project Link`);
    liveProjectAnchorElement.className = `project-link`
  
    const liveProjectIconElement = document.createElement("i")
    liveProjectIconElement.className = `${webIcon} left-icon`

    liveProjectAnchorElement.appendChild(liveProjectIconElement)

    iconContainer.appendChild(liveProjectAnchorElement)
    }

    projectElement.appendChild(titleElement);
    projectElement.appendChild(imageElement);
    projectElement.appendChild(descriptionElement);
    projectElement.appendChild(iconContainer);

    projectsContainer.appendChild(projectElement);
   
  });
}

// Call the function when the page is loaded
document.addEventListener("DOMContentLoaded", renderProjects);