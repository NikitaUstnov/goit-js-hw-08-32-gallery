import imagesDB from "./gallery-items.js";
import refs from "./refs.js";

// render gallery
const imagesGrid = ({ preview, description, original }) => {
  const galleryItems = document.createElement("li");

  const galleryImgItem = document.createElement("img");

  galleryImgItem.src = preview;
  galleryImgItem.alt = description;
  galleryImgItem.classList.add("gallery__image");
  galleryImgItem.setAttribute("data-fullscreen", original);

  galleryItems.appendChild(galleryImgItem);

  return galleryItems;
};

const renderGallery = imagesDB.map(imagesGrid);
refs.imagesGridRef.append(...renderGallery);

// open modal

refs.imagesGridRef.addEventListener("click", (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  refs.modalWithImages.classList.add("is-open");
  refs.fullscreenImg.src = e.target.dataset.fullscreen;
});

// close modal on button click

refs.closeModalBtnEl.addEventListener("click", () => {
  refs.modalWithImages.classList.remove("is-open");
  refs.fullscreenImg.src = "";
});

// close modal on overlay click

refs.overlayEl.addEventListener("click", (e) => {
  if (e.target.nodeName === "IMG") {
    return;
  }
  refs.modalWithImages.classList.remove("is-open");
  refs.fullscreenImg.src = "";
});

// close modal on Escape key press

document.addEventListener("keydown", (e) => {
  if (refs.modalWithImages.classList.contains("is-open")) {
    if (e.keyCode === 27) {
      refs.modalWithImages.classList.remove("is-open");
      refs.fullscreenImg.src = "";
    }
  }
});

// image swicher in modal window

refs.imagesGridRef.addEventListener("click", (e) => {
  let currentElementIndex = renderGallery.indexOf(e.target.parentNode);

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 39 && currentElementIndex < renderGallery.length - 1) {
      currentElementIndex += 1;
    }
    if (e.keyCode === 37 && currentElementIndex > 0) {
      currentElementIndex -= 1;
    }

    refs.fullscreenImg.src =
      renderGallery[currentElementIndex].firstChild.dataset.fullscreen;
  });
});
