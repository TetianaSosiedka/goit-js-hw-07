import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  divGallery: document.querySelector(".gallery"),
};
//======== Creating and rendering gallery ==========
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
markupGallery();
//======== Oupen modal window with img ==========
refs.divGallery.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  oupenModalWindow();
});

function oupenModalWindow() {
  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    animationSpeed: 250,
  });
  gallery.on("show.simplelightbox");
}

console.log(galleryItems);
