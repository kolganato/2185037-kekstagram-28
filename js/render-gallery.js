import { renderThumbnails } from './thumbnails-rendering.js';
import { openBigPictureModal } from './full-photo.js';

const picturesElement = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  picturesElement.addEventListener('click', (evt) => {
    const picture = evt.target.closest('.picture');
    if(picture){
      evt.preventDefault();
      const pictureId = Number(picture.dataset.id);
      const pictureData = pictures.find((elem) => elem.id === pictureId);
      openBigPictureModal(pictureData);
    }
  });
  renderThumbnails(pictures);
};

export {renderGallery};
