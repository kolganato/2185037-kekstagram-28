import { isEscapeKey } from './util.js';

const messageSuccess = document.querySelector('#success').content;
const messageError = document.querySelector('#error').content;
const body = document.body;

const removeElement = (evt) => {
  const section = evt.target.closest('section.success, section.error');
  if(!section){
    return;
  }
  if(evt.target.nodeName === 'SECTION' || evt.target.nodeName === 'BUTTON' || isEscapeKey(evt)){
    section.remove();
    document.removeEventListener('click', removeElement);
    document.removeEventListener('keydown',removeElement);
  }
};

const showSuccessMessage = () => {
  body.append(messageSuccess.cloneNode(true));
  document.addEventListener('click', removeElement);
  document.addEventListener('keydown',removeElement);
};

const showErrorMessage = () => {
  body.append(messageError.cloneNode(true));
  document.addEventListener('click', removeElement);
  document.addEventListener('keydown', removeElement);
};

export { showSuccessMessage, showErrorMessage };
