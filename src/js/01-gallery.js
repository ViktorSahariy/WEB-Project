import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

// Створюємо розмітку
const markup = galleryItems.map(({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>
`).join('');
gallery.style.listStyle = "none"
gallery.insertAdjacentHTML('beforeend', markup);

// Ініціалізація SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',   // Використовуємо alt як підпис
  captionDelay: 300,     // Затримка 300 мс перед показом підпису
});
