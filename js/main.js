import { getPhotos } from './data.js';
import { renderGallery } from './render-gallery.js';
import { renderForm } from './form.js';

renderForm();
renderGallery(getPhotos());
