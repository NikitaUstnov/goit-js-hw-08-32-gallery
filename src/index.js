import imagesDB from "./gallery-items.js";
const imagesGridRef = document.querySelector(".js-gallery");
const modalWithImages = document.querySelector(".js-lightbox");
const imagesGrid = imagesDB
  .map(
    ({ preview, description }) =>
      `<li class="gallery__item"><img class="gallery__image" src=${preview} alt=${description}/></li>`
  )
  .join(" ");

imagesGridRef.insertAdjacentHTML("afterbegin", imagesGrid);

imagesGridRef.addEventListener("click", showModalWithImg);

function showModalWithImg(e) {
  if (e.target.nodeName === "IMG") {
    openModal();
  }
}

function openModal() {
  modalWithImages.classList.add("is-open");
}
