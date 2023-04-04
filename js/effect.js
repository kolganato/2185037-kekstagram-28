const EFFECTS = {
  chrome: {
    name: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  sepia: {
    name: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  marvin: {
    name: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  phobos: {
    name: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  heat: {
    name: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
  none: {
    name: 'none',
    min: 0,
    max: 100,
    step: 0,
    unit: ''
  }
};

const btnsRadio = document.querySelector('.effects__list');
const previewElement = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementValue = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const resetEffects = () => {
  sliderElementValue.value = EFFECTS.none.max;
  previewElement.className = `effects__preview--${EFFECTS.none.name}`;
  previewElement.style.filter = `${EFFECTS.none.name}`;
};

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
  resetEffects();
};

const changeSliderEffect = (effect) => {
  if(effect.name === EFFECTS.none.name){
    resetEffects();
    return;
  }
  showSlider();
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: effect.min,
      max: effect.max
    },
    start: effect.max,
    step: effect.step
  });
};

const changeEffectPreview = (evt) => {
  if(evt.target.value === EFFECTS.none.name){
    hideSlider();
  }
  previewElement.className = `effects__preview--${evt.target.value}`;
  changeSliderEffect(EFFECTS[evt.target.value]);
};

const changeValueEffect = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  const checkedEffects = document.querySelector('.effects__radio:checked');
  const effectName = EFFECTS[checkedEffects.value].name;
  const effectUnit = EFFECTS[checkedEffects.value].unit;
  previewElement.style.filter = `${effectName}(${sliderValue}${effectUnit})`;
  sliderElementValue.value = sliderValue;
};

const addSliderEffect = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: EFFECTS.none.min,
      max: EFFECTS.none.max,
    },
    start: EFFECTS.none.max,
    step: EFFECTS.none.step,
    connect: 'lower',
    format: {
      to: function(value){
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    }
  });
  hideSlider();
  sliderElement.noUiSlider.on('update', changeValueEffect);
};

const addEventsEffects = () => {
  btnsRadio.addEventListener('change', changeEffectPreview);
  addSliderEffect();
};

const removeEventsEffects = () => {
  resetEffects();
  btnsRadio.removeEventListener('change', changeEffectPreview);
  if(!sliderContainer.classList.contains('hidden')){
    hideSlider();
  }
  sliderElement.noUiSlider.destroy();
};

export {addEventsEffects, removeEventsEffects};
