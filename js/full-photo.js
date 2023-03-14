import {isEscapeKey} from './util.js';
import {photosData} from './main.js';

const bigPictureSection = document.querySelector('.big-picture');
const bigPictureImg = bigPictureSection.querySelector('.big-picture__img img');
const bigPictureSocial = bigPictureSection.querySelector('.big-picture__social');
const bigPictureCaption = bigPictureSection.querySelector('.social__caption');
const bigPictureComments = bigPictureSocial.querySelector('.social__comments');
const bigPictureCommentsCount = bigPictureSocial.querySelector('.social__comment-count');
const bigPictureClose = bigPictureSection.querySelector('.big-picture__cancel');
const pictures = document.querySelector('.pictures');

const getCountLikes = (img) => img.parentNode.querySelector('.picture__likes').textContent;
const getCountComments = (img) => img.parentNode.querySelector('.picture__comments').textContent;

const renderComments = (comments) => {

};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPictureModal();
  }
};

const renderBigPicture = (img) => {
  document.body.classList.add('modal-open');
  bigPictureImg.src = img.src;
  bigPictureCaption.textContent = bigPictureImg.alt = img.alt;
  bigPictureSocial.querySelector('.likes-count').textContent = getCountLikes(img);
  bigPictureSocial.querySelector('.comments-count').textContent = getCountComments(img);
  bigPictureCommentsCount.classList.add('hidden');
  renderComments();
};

function openBigPictureModal(evt){
  bigPictureSection.classList.remove('hidden');
  renderBigPicture(evt);
  document.addEventListener('keydown',onDocumentKeydown);
}

function closeBigPictureModal(){
  document.body.classList.remove('modal-open');
  bigPictureSection.classList.add('hidden');
  document.removeEventListener('keydown',onDocumentKeydown);
}

const onPictureClick = (evt) => {
  evt.preventDefault();
  if(evt.target.closest('.picture')){
    openBigPictureModal(evt.target.closest('.picture').querySelector('.picture__img'));
  }
};

// const renderFullPhoto = () => {
pictures.addEventListener('click',onPictureClick);
bigPictureClose.addEventListener('click',closeBigPictureModal);
// };

// export {renderFullPhoto};

console.log(photosData); // тут не может получить доступ, потому что переменная ещё не инициализирована


