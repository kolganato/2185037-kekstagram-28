import { renderThumbnails } from './thumbnails-rendering.js';
import { openBigPictureModal } from './full-photo.js';

const picturesElement = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  picturesElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    if(evt.target.closest('.picture')){
      openBigPictureModal(evt.target.closest('.picture').querySelector('.picture__img'), pictures);
    }
  });
  renderThumbnails(pictures);
};

export {renderGallery};
