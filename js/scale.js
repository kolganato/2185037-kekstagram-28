const MIN_SCALE_PERCENT = 25;
const MAX_SCALE_PERCENT = 100;
const DEFAULT_SCALE_PERCENT = 100;
const STEP_SCALE_PERCENT = 25;

const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scaleValueInput = document.querySelector('.scale__control--value');
const previewElement = document.querySelector('.img-upload__preview img');

const changeScale = (evt) => {
  evt.preventDefault();
  const scaleValue = parseInt(scaleValueInput.value, 10);
  let percent;
  if(evt.target.classList.contains('scale__control--smaller')){
    percent = scaleValue !== MIN_SCALE_PERCENT ? scaleValue - STEP_SCALE_PERCENT : scaleValue;
  }else{
    percent = scaleValue !== MAX_SCALE_PERCENT ? scaleValue + STEP_SCALE_PERCENT : scaleValue;
  }
  scaleValueInput.value = `${percent}%`;
  previewElement.style.transform = `scale(${percent / 100})`;
};

const setDefaultScale = () => {
  scaleValueInput.value = `${DEFAULT_SCALE_PERCENT}%`;
  previewElement.style.transform = `scale(${DEFAULT_SCALE_PERCENT / 100})`;
};

const addEventsScale = () => {
  btnSmaller.addEventListener('click', changeScale);
  btnBigger.addEventListener('click', changeScale);
};

const removeEventsScale = () => {
  btnSmaller.removeEventListener('click', changeScale);
  btnBigger.removeEventListener('click', changeScale);
  setDefaultScale();
};

export {addEventsScale, removeEventsScale};
