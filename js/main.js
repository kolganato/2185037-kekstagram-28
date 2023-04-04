// import { getPhotos } from './data.js';
import { renderGallery } from './render-gallery.js';
import { renderForm } from './form.js';

fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((pictures) => {
    renderGallery(pictures);
  });

renderForm();

