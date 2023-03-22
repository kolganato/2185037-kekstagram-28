import {isEscapeKey, isEnterKey} from './util.js';
import {renderComments, getCommentsPhoto} from './comments.js';

const bigPictureSection = document.querySelector('.big-picture');
const bigPictureImg = bigPictureSection.querySelector('.big-picture__img img');
const bigPictureSocial = bigPictureSection.querySelector('.big-picture__social');
const bigPictureCaption = bigPictureSection.querySelector('.social__caption');
const bigPictureClose = bigPictureSection.querySelector('.big-picture__cancel');

const getCountLikes = (img) => img.parentNode.querySelector('.picture__likes').textContent;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPictureModal();
  }
};

const renderBigPicture = (img, photosData) => {
  document.body.classList.add('modal-open');
  bigPictureImg.src = img.src;
  bigPictureCaption.textContent = bigPictureImg.alt = img.alt;
  bigPictureSocial.querySelector('.likes-count').textContent = getCountLikes(img);
  const comments = getCommentsPhoto(photosData.find((elem) => elem.id === Number(img.dataset.id)));
  renderComments(comments, bigPictureSocial);
};

function openBigPictureModal(evt, photosData){
  bigPictureSection.classList.remove('hidden');
  renderBigPicture(evt, photosData);
  bigPictureClose.addEventListener('click', closeBigPictureModal);
  document.addEventListener('keydown',onDocumentKeydown);
}

function closeBigPictureModal(){
  document.body.classList.remove('modal-open');
  bigPictureSection.classList.add('hidden');
  document.removeEventListener('keydown',onDocumentKeydown);
  bigPictureClose.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      closeBigPictureModal();
    }
  });
}

export {openBigPictureModal};


