import { getPhotos } from './data.js';
import { renderThumbnails } from './thumbnails-rendering.js';
import './full-photo.js';

const photosData = getPhotos();
renderThumbnails(photosData);

export {photosData};

