import imagesDB from "./gallery-items.js";
const imagesGridRef = document.querySelector(".js-gallery");
const modalWithImages = document.querySelector(".js-lightbox");
const fullscreenImg = document.querySelector(".lightbox__image");
const overlayEl = document.querySelector(".lightbox__overlay");
// const imageContainerEl = document.querySelector(".lightbox__content");
const closeModalBtnEl = document.querySelector(
  '[data-action="close-lightbox"]'
);

const imagesGrid = ({ preview, description, original }) => {
  const galleryItems = document.createElement("li");

  const galleryImgItem = document.createElement("img");

  galleryImgItem.src = preview;
  galleryImgItem.alt = description;
  galleryImgItem.setAttribute("data-fullscreen", original);

  galleryItems.appendChild(galleryImgItem);

  return galleryItems;
};

const renderGallery = imagesDB.map(imagesGrid);
imagesGridRef.append(...renderGallery);

imagesGridRef.addEventListener("click", showModalWithImg);

function showModalWithImg(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  modalWithImages.classList.add("is-open");
  fullscreenImg.src = e.target.dataset.fullscreen;
}

closeModalBtnEl.addEventListener("click", closeModalOnBtnClick);
function closeModalOnBtnClick() {
  modalWithImages.classList.remove("is-open");
  fullscreenImg.src = "";
}

overlayEl.addEventListener("click", closeModalOnOwerlayClick);

function closeModalOnOwerlayClick(e) {
  console.log(e.currentTarget);
  if (e.target.nodeName === "IMG") {
    return;
  }
  modalWithImages.classList.remove("is-open");
}

document.addEventListener("keydown", (e) => {
  if (modalWithImages.classList.contains("is-open")) {
    if (e.keyCode === 27) {
      modalWithImages.classList.remove("is-open");
      fullscreenImg.src = "";
    }
  }
});
