import skillsData from './Assets/Data/skills-data.js';

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
        const titleElement = document.createElement("h3");
        titleElement.textContent = skill.title;
        titleElement.className = "skill-title"
        skillElement.appendChild(titleElement);
        skillsCard.appendChild(skillElement);
      } 
      else if(skill.image) {
        const skillElement = document.createElement("div");
        skillElement.className = "skill";
        const imageElement = document.createElement("img");
        imageElement.setAttribute("aria-label", `${skill.title} image`);
        imageElement.setAttribute("src", `/Assets/Images/Skills-images/${skill.image}`);
        imageElement.className = `skill-image`;
        // iconElement.style.color = skill.iconColor || '';
        // iconElement.style.background = skill.iconBackground || '';
        skillElement.appendChild(imageElement);
        const titleElement = document.createElement("h3");
        titleElement.textContent = skill.title;
        titleElement.className = "skill-title"
        skillElement.appendChild(titleElement);
        skillsCard.appendChild(skillElement);
      }
      else {
        const skillListElement = document.createElement("li");
        skillListElement.innerText = skill.title
        skillsList.appendChild(skillListElement);
      }
    });
  }

  export default renderSkills