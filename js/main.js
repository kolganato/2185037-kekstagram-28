import { getPhotos } from './data.js';
import { renderThumbnails } from './thumbnails-rendering.js';

renderThumbnails(getPhotos());
