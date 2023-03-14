import { getPhotos } from './data.js';
import { renderThumbnails } from './thumbnails-rendering.js';
import { renderFullPhoto } from './full-photo.js';

const photosData = getPhotos();
renderThumbnails(photosData);
renderFullPhoto(photosData);
