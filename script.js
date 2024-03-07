const projectsData = [
  {
    title: "NC-News Backend Project",
    description: "A backend Project using Postgres, Sql and render to go live, add /api to view all available endpoints",
    image: "./Assets/Images/database.png",
    github: "https://github.com/Gazdean/be-nc1-news1",
    liveProject:"https://newsflash-e6p1.onrender.com",
  },
  {
    title: "NC-News Frontend Project",
    description: "frontend react project which uses the NC-News backend project as an api",
    image: "./Assets/Images/nc-news-frontend.png",
    github: "https://github.com/Gazdean/fe-nc-news",
    liveProject:""
  },
  {
    title: "Flush Finder",
    description: "A local toilet finder app, use current location or a city drop down menu to find the toilets around you, allows filtering to help those with particular needs",
    image: "./Assets/Images/flush-finder.png",
    github: "https://github.com/OJ423/flush-finder",
    liveProject:"",
  },
];

const githubIcon = "fab fa-github"
const webIcon = "fas fa-globe";

function renderProjects() {

  const projectsContainer = document.getElementById("projects-container");

  projectsData.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className = "project";

    console.log(projectElement)

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

    const liveProjectAnchorElement = document.createElement("a")
    liveProjectAnchorElement.href = project.liveProject
    liveProjectAnchorElement.setAttribute("aria-label", `${project.title} Live Project Link`);
    liveProjectAnchorElement.className = `project-link`
  

    const githubIconElement = document.createElement("i")
    githubIconElement.className = `${githubIcon} right-icon`

    const liveProjectIconElement = document.createElement("i")
    liveProjectIconElement.className = `${webIcon} left-icon`

    githubAnchorElement.appendChild(githubIconElement)

    liveProjectAnchorElement.appendChild(liveProjectIconElement)

    iconContainer.appendChild(liveProjectAnchorElement)
    iconContainer.appendChild(githubAnchorElement)

    projectElement.appendChild(titleElement);
    projectElement.appendChild(imageElement);
    projectElement.appendChild(descriptionElement);
    projectElement.appendChild(iconContainer);

    projectsContainer.appendChild(projectElement);
   
    
  });
}

// Call the function when the page is loaded
document.addEventListener("DOMContentLoaded", renderProjects);
