import imagesDB from "./gallery-items.js";
const imagesGridRef = document.querySelector(".js-gallery");
const modalWithImages = document.querySelector(".js-lightbox");
const fullscreenImg = document.querySelector(".lightbox__image");

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

modalWithImages.addEventListener("click", closeModal);
function closeModal() {
  modalWithImages.classList.remove("is-open");
  fullscreenImg.src = "";
}

modalWithImages.addEventListener("keydown", closeModalOnEscButton);

function closeModalOnEscButton(e) {
  console.log(e.key);
}
