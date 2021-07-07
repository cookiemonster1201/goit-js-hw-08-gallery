import galleryItems from "./app.js";

const refs = {
  gallery: document.querySelector(".gallery"),
  modal: document.querySelector(".js-lightbox"),
  lightboxImage: document.querySelector("img.lightbox__image"),
  closeBtn: document.querySelector('[data-action="close-lightbox"]'),
};

const makeGalleryMarkup = ({ preview, original, description }) =>
  `<li class="gallery__item">
      <a
        class="gallery__link"
        href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      >
        <img
          loading="lazy"
          class="gallery__image"
          data-src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;

refs.gallery.insertAdjacentHTML(
  "beforeend",
  galleryItems.map((img) => makeGalleryMarkup(img)).join("")
);

if ("loading" in HTMLImageElement.prototype) {
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js";
  document.body.appendChild(script);
}

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

const onImageLoaded = (e) => {
  e.currentTarget.classList.add("is-loaded");
};

lazyImages.forEach((img) => {
  img.addEventListener("load", onImageLoaded, { once: true });
});

const openModal = (e) => {
  refs.modal.classList.add("is-open");
  refs.lightboxImage.src = e.target.dataset.source;
};

const closeModal = () => {
  refs.modal.classList.remove("is-open");
  refs.lightboxImage.src = "";
};

const onOpenOriginalImageClick = (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  e.preventDefault();
  openModal(e);
};

const onCloseOriginalImageClick = (e) => {
  if (
    e.target === document.querySelector(".lightbox__overlay") ||
    e.target === refs.closeBtn
  ) {
    closeModal();
  }
};

const imgSrcs = galleryItems.map((img) => img.original);

const onGalleryNavBtnPress = (arr) => (e) => {
  if (!document.querySelector(".js-lightbox.is-open")) {
    return;
  }

  let currentIndex = arr.indexOf(refs.lightboxImage.src);

  switch (e.keyCode) {
    case 37:
      refs.lightboxImage.src =
        currentIndex === 0 ? arr[currentIndex] : arr[currentIndex - 1];
      break;
    case 39:
      refs.lightboxImage.src =
        currentIndex === arr.length - 1
          ? arr[currentIndex]
          : arr[currentIndex + 1];
      break;
    case 27:
      closeModal();
      break;
  }
};

refs.gallery.addEventListener("click", onOpenOriginalImageClick);
refs.modal.addEventListener("click", onCloseOriginalImageClick);
window.addEventListener("keydown", onGalleryNavBtnPress(imgSrcs));
