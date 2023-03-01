import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML("beforeend", imagesMarkup);

function createItemsMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item" style="border-radius: 15px">
      <a class="gallery__link" href="${original}" >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
					style="border-radius: 15px"
        />
      </a>
    </div>`;
    })
    .join("");
}
const onContainerClick = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery")) return;
  const source = e.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src="${source}"width="800" height="600" style= "border-radius: 30px">`,

    {
      onShow: () => {
        // console.log("add listener ");
        document.addEventListener("keydown", onKeydownEsc);
      },

      onClose: () => {
        // console.log("remove listener ");
        document.removeEventListener("keydown", onKeydownEsc);
      },
    }
  );
  // instance.show();

  const onKeydownEsc = (e) => {
    // console.log(e.code);
    if (e.code === "Escape") {
      instance.close();
    }
  };

  instance.show();
};

galleryContainerEl.addEventListener("click", onContainerClick);

// console.log(galleryItems);

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>; */
