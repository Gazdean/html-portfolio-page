import projectsData from './Assets/Data/projects-data.js';
import skillsData from './Assets/Data/skills-data.js';

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

function renderSkills() {

  const skillsCard = document.getElementById("skills-icons");
  const skillsList = document.getElementById("skills-list");

  skillsData.forEach((skill) => {
    

  if(skill.icon) {
    const skillElement = document.createElement("div");
    skillElement.className = "skill";
    const iconElement = document.createElement("i");
    iconElement.setAttribute("aria-label", `${skill.title} icon`);
    iconElement.className = `${skill.icon} skill-icon`;
    iconElement.style.color = skill.iconColor || '';
    iconElement.style.background = skill.iconBackground || '';
    skillElement.appendChild(iconElement);
    const titleElement = document.createElement("h5");
    titleElement.textContent = skill.title;
    titleElement.className = "skill-title"
    skillElement.appendChild(titleElement);
    skillsCard.appendChild(skillElement);
  } else {
    const skillListElement = document.createElement("li");
    skillListElement.innerText = skill.title
    skillsList.appendChild(skillListElement);
  }
  });
}



// Call the function when the page is loaded
document.addEventListener("DOMContentLoaded", renderProjects);
document.addEventListener("DOMContentLoaded", renderSkills);