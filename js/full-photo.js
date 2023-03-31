import {isEscapeKey} from './util.js';
import {renderComments, removeEventsComments} from './comments.js';

const bigPictureSection = document.querySelector('.big-picture');
const bigPictureImg = bigPictureSection.querySelector('.big-picture__img img');
const bigPictureSocial = bigPictureSection.querySelector('.big-picture__social');
const bigPictureCaption = bigPictureSection.querySelector('.social__caption');
const bigPictureClose = bigPictureSection.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPictureModal();
  }
};

const renderBigPicture = (picture) => {
  document.body.classList.add('modal-open');
  bigPictureImg.src = picture.url;
  bigPictureCaption.textContent = bigPictureImg.alt = picture.description;
  bigPictureSocial.querySelector('.likes-count').textContent = picture.likes;
  renderComments(picture);
};

function openBigPictureModal(picture){
  bigPictureSection.classList.remove('hidden');
  renderBigPicture(picture);
  bigPictureClose.addEventListener('click', closeBigPictureModal);
  document.addEventListener('keydown',onDocumentKeydown);
}

function closeBigPictureModal(){
  document.body.classList.remove('modal-open');
  bigPictureSection.classList.add('hidden');
  document.removeEventListener('keydown',onDocumentKeydown);
  removeEventsComments();
}

export {openBigPictureModal};


