import {isEscapeKey} from './util.js';
import {photosData} from './main.js';

const bigPictureSection = document.querySelector('.big-picture');
const bigPictureImg = bigPictureSection.querySelector('.big-picture__img img');
const bigPictureSocial = bigPictureSection.querySelector('.big-picture__social');
const bigPictureCaption = bigPictureSection.querySelector('.social__caption');
const bigPictureComments = bigPictureSocial.querySelector('.social__comments');
const bigPictureCommentsCount = bigPictureSocial.querySelector('.social__comment-count');
const bigPictureClose = bigPictureSection.querySelector('.big-picture__cancel');
const bigPictureCommentsLoader = bigPictureSection.querySelector('.comments-loader');
const pictures = document.querySelector('.pictures');

const getCountLikes = (img) => img.parentNode.querySelector('.picture__likes').textContent;
const getCountComments = (img) => img.parentNode.querySelector('.picture__comments').textContent;
const getCommentsPhoto = (elem) => elem.comments;

const createCommentElement = (commentData) => {
  const elem = document.createElement('li');
  const img = document.createElement('img');
  const text = document.createElement('p');
  elem.classList.add('social__comment');
  img.classList.add('social__picture');
  img.src = commentData.avatar;
  img.dataset.id = commentData.id;
  img.alt = commentData.name;
  img.width = 35;
  img.height = 35;
  text.classList.add('social__text');
  text.innerText = commentData.message;
  elem.prepend(img);
  elem.append(text);
  return elem;
};

const clearComments = () => {
  bigPictureComments.innerHTML = '';
};

const renderComments = (img) => {
  const commentsArray = getCommentsPhoto(photosData.find((elem) => elem.id === Number(img.dataset.id)));
  const commentsFragment = document.createDocumentFragment();
  clearComments();
  commentsArray.forEach((elem)=> commentsFragment.appendChild(createCommentElement(elem)));
  bigPictureComments.appendChild(commentsFragment);
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
  bigPictureCommentsLoader.classList.add('hidden');
  renderComments(img);
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

pictures.addEventListener('click',onPictureClick);
bigPictureClose.addEventListener('click',closeBigPictureModal);
