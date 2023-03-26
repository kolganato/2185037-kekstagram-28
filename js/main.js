import { getPhotos } from './data.js';
import { renderGallery } from './render-gallery.js';
import './form.js';

renderGallery(getPhotos());
