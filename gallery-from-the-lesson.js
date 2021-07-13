import galleryItems from "./app.js";

let activeIndex = 0;

const refs = {
  gallery: document.querySelector(".gallery"),
  modal: document.querySelector(".js-lightbox"),
  modalImg: document.querySelector(".lightbox__image"),
  closeBtn: document.querySelector("[data-action=close-lightbox]"),
};

const makeGalleryMarkup = ({ preview, original, description }) =>
  `<li class="gallery__item">
    <a
      class="gallery__link"
      href='${original}'
    >
      <img
        loading="lazy"
        class="gallery__image"
        data-src='${preview}'
        data-source='${original}'
        alt='${description}'
      />
    </a>
  </li>`;

const markup = galleryItems.map(makeGalleryMarkup);

refs.gallery.insertAdjacentHTML("beforeend", markup.join(""));

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

function onOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  markup.forEach((el, index) => {
    if (el.includes(e.target.src)) {
      activeIndex = index;
    }
  });

  window.addEventListener("keydown", keyboardManipulation);
  refs.modal.classList.add("is-open");
  refs.modalImg.src = e.target.dataset.source;
  refs.modalImg.alt = e.target.alt;
}

function closeModal() {
  window.removeEventListener("keydown", keyboardManipulation);
  refs.modal.classList.remove("is-open");
  refs.modalImg.src = "#";
  refs.modalImg.alt = "";
}

function onCloseModal(e) {
  if (e.target.nodeName === "IMG") {
    return;
  }
  closeModal();
}

function keyboardManipulation({ key }) {
  switch (key) {
    case galleryItems.length - 1 > activeIndex && "ArrowRight":
      activeIndex += 1;
      refs.modalImg.src = galleryItems[activeIndex].original;
      break;
    case activeIndex > 0 && "ArrowLeft":
      activeIndex -= 1;
      refs.modalImg.src = galleryItems[activeIndex].original;
      break;
    case activeIndex === galleryItems.length - 1 && "ArrowRight":
      activeIndex = 0;
      refs.modalImg.src = galleryItems[activeIndex].original;
      break;
    case activeIndex === 0 && "ArrowLeft":
      activeIndex = galleryItems.length - 1;
      refs.modalImg.src = galleryItems[activeIndex].original;
      break;
    case "Escape":
      closeModal();
      break;
    default:
      alert("что-то пошло не так");
  }
}

refs.gallery.addEventListener("click", onOpenModal);
refs.modal.addEventListener("click", onCloseModal);
