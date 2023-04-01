import {isEscapeKey} from './util.js';

const TAG_TEXT_ERROR = 'Неправильно заполнены хэштеги';
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_COUNT_HASHTAGS = 5;

const section = document.querySelector('.img-upload'),
  form = section.querySelector('form.img-upload__form'),
  inputUpload = form.querySelector('#upload-file'),
  overlay = section.querySelector('.img-upload__overlay'),
  closeBtn = section.querySelector('#upload-cancel'),
  comment = form.querySelector('.text__description'),
  hashtags = form.querySelector('.text__hashtags'),
  body = document.body;

const isTextFieldFocused = () => document.activeElement === hashtags || document.activeElement === comment;

const pristine = new Pristine(form,{
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

const isValidTag = (tags) => tags.every((tag) => VALID_SYMBOLS.test(tag));

const hasValidCount = (tags) => tags.length <= MAX_COUNT_HASHTAGS;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(/\s+/);

  return hasValidCount(tags) && hasUniqueTags(tags) && isValidTag(tags);
};

const addValidatorPristine = () => {
  pristine.addValidator(
    hashtags,
    validateTags,
    TAG_TEXT_ERROR
  );
};

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown',isEscapeKey);
};

const hideModal = () => {
  form.reset();
  pristine.reset();

  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown',isEscapeKey);
  closeBtn.removeEventListener('click', hideModal);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
};

const onInputUploadChange = () => {
  showModal();

  closeBtn.addEventListener('click', hideModal);
};


const sendForm = (evt) => {
  evt.preventDefault();

  pristine.validate();
};

const renderForm = () => {
  inputUpload.addEventListener('change', onInputUploadChange);
  document.addEventListener('keydown', onDocumentKeydown);
  form.addEventListener('submit', sendForm);
  addValidatorPristine();
};

export {renderForm};

