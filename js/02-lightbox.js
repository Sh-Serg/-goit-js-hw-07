import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryContainerEl = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML("beforeend", imagesMarkup);

function createItemsMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}" style="border-radius: 15px">
  <img
		class="gallery__image"
		src="${preview}" 
		alt="${description}"
		style="border-radius: 15px" />
</a>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
  // spinner: "false",
  enableKeyboard: "false",
});

/* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>; */
