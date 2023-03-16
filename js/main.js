import { getPhotos } from './data.js';
import { renderThumbnails } from './thumbnails-rendering.js';
import { addEventOpeningFullPhoto } from './full-photo.js';

const photosData = getPhotos();
renderThumbnails(photosData);
addEventOpeningFullPhoto();

export {photosData};

