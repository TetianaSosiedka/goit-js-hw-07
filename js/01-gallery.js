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
markupGallery();

//===================================================================

refs.divGallery.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const UrlLargeImage = takeUrlLargeImage(event); //Delegation and getting the url of a large image
  oupenModalWindow(UrlLargeImage); // oupen modal window with img
});

function takeUrlLargeImage(event) {
  event.preventDefault();
  const { dataset } = event.target;
  console.log(dataset.source);
  return dataset.source;
}

function oupenModalWindow(url) {
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`);

  instance.show();
}

console.log(galleryItems);
