import galleryData from './Assets/Data/gallery-data.js'

function renderGallery() {

    const galleryItems = document.getElementById("gallery-items");
  
    galleryData.forEach((galleryItem) => {

        const galleryItemElement = document.createElement("div");
        galleryItemElement.className = "gallery-item";
        
        const imageElement = document.createElement("img");
        imageElement.className = "gallery-image";
        imageElement.src = galleryItem.imageSrc;
        imageElement.alt = galleryItem.altText;
        
        galleryItemElement.appendChild(imageElement);

        const titleElement = document.createElement("p");
        titleElement.className = "gallery-image-title"
        titleElement.innerText = galleryItem.title;

        galleryItemElement.appendChild(titleElement);

        galleryItems.appendChild(galleryItemElement);
    });
  }

export default renderGallery