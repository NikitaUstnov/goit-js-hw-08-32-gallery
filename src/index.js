import imagesDB from "./gallery-items.js";
const imagesGridRef = document.querySelector(".js-gallery");

const imagesGrid = imagesDB
  .map(
    ({ preview, description }) =>
      `<li class="gallery__item"><img class="gallery__image" src=${preview} alt=${description}/></li>`
  )
  .join(" ");

console.log(imagesGridRef);
imagesGridRef.insertAdjacentHTML("afterbegin", imagesGrid);
