import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  divGallery: document.querySelector(".gallery"),
};
//======== Creating and rendering gallery ==========
function markupGallery(galleryItems) {
  galleryItems.map((galleryItem) => {
    refs.divGallery.insertAdjacentHTML(
      "beforeend",
      markupElementGallery(galleryItem)
    );
  });
}
function markupElementGallery({ preview, original, description }) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}
markupGallery(galleryItems);

console.log(galleryItems);
