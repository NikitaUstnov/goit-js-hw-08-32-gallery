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

console.dir(window.origin);
window.origin = "http://127.0.0.1:5510";
console.dir(window.origin);
