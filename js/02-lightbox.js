import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  divGallery: document.querySelector(".gallery"),
};
//===============================================
function markupGallery() {
  galleryItems.map((galleryItem) => {
    refs.divGallery.insertAdjacentHTML(
      "beforeend",
      markupElementGallery(galleryItem)
    );
  });
}
function markupElementGallery({ preview, original, description }) {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}
//===============================================
function oupenModalWindow() {
  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  gallery.refresh();
}

markupGallery(); //Creating and rendering gallery
oupenModalWindow(); //Oupen modal window with img

console.log(galleryItems);
