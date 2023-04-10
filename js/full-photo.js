import {onDocumentKeydown} from './util.js';
import {renderComments, removeEventsComments} from './comments.js';

const bigPictureSection = document.querySelector('.big-picture');
const bigPictureImg = bigPictureSection.querySelector('.big-picture__img img');
const bigPictureSocial = bigPictureSection.querySelector('.big-picture__social');
const bigPictureCaption = bigPictureSection.querySelector('.social__caption');
const bigPictureClose = bigPictureSection.querySelector('.big-picture__cancel');

const renderBigPicture = (picture) => {
  document.body.classList.add('modal-open');
  bigPictureImg.src = picture.url;
  bigPictureCaption.textContent = bigPictureImg.alt = picture.description;
  bigPictureSocial.querySelector('.likes-count').textContent = picture.likes;
  renderComments(picture);
};

const closeBigPictureModal = () => {
  document.body.classList.remove('modal-open');
  bigPictureSection.classList.add('hidden');
  removeEventsComments();
};

const openBigPictureModal = (picture) => {
  bigPictureSection.classList.remove('hidden');
  renderBigPicture(picture);
};

const onDocumentKeydownShownModal = (evt) => {
  onDocumentKeydown(evt, closeBigPictureModal);
  document.removeEventListener('keydown', onDocumentKeydownShownModal);
};

const onClickCloseBtn = () => {
  document.removeEventListener('keydown', onDocumentKeydownShownModal);
  closeBigPictureModal();
};

const onClickPicture = (picture) => {
  openBigPictureModal(picture);
  document.addEventListener('keydown', onDocumentKeydownShownModal);
  bigPictureClose.addEventListener('click', onClickCloseBtn);
};

export {onClickPicture};


