import { isEscapeKey } from './util.js';

const messageSuccess = document.querySelector('#success').content;
const messageError = document.querySelector('#error').content;
const body = document.body;

const removeSuccessEscape = (evt) => {
  if(isEscapeKey(evt)){
    document.querySelector('section.success').remove();
  }
  document.removeEventListener('keydown',removeSuccessEscape);
};

const removeErrorEscape = (evt) => {
  if(isEscapeKey(evt)){
    document.querySelector('section.error').remove();
  }
  document.removeEventListener('keydown',removeErrorEscape);
};

const removeElement = (evt) => {
  if(evt.target.nodeName === 'SECTION' || evt.target.nodeName === 'BUTTON'){
    evt.target.closest('section').remove();
    document.removeEventListener('click', removeElement);
    document.removeEventListener('keydown',removeSuccessEscape);
  }
};

const showSuccessMessage = () => {
  body.append(messageSuccess.cloneNode(true));
  document.addEventListener('click', removeElement);
  document.addEventListener('keydown',removeSuccessEscape);
};

const showErrorMessage = () => {
  body.append(messageError.cloneNode(true));
  document.addEventListener('click', removeElement);
  document.addEventListener('keydown', removeErrorEscape);
};

export { showSuccessMessage, showErrorMessage };
