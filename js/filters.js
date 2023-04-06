import { debounce, shuffleArray } from './util.js';
import { renderThumbnails } from './thumbnails-rendering.js';

const PICTURES_COUNT = 10;
const FilterMethods = {
  random:(data) => shuffleArray(data.slice()).slice(0, PICTURES_COUNT),
  discussed: (data) => data.slice().sort((pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length),
  default: (data) => data.slice()
};

const filters = document.querySelector('.img-filters');

const changeFilter = debounce((elem) => {
  const filter = elem.id.split('-')[1];
  const filterMethod = Object.keys(FilterMethods).filter((method) => filter === method);
  const getMethod = FilterMethods[filterMethod];
  const pictures = getMethod(FilterMethods.pictures);
  renderThumbnails(pictures);
});

const onClickFilter = (evt) => {
  if(evt.target.classList.contains('img-filters__button')){
    filters.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.toggle('img-filters__button--active');
    if(evt.target.id.startsWith('filter-')){
      changeFilter(evt.target);
    }
  }
};

const showFilters = (data) => {
  FilterMethods.pictures = data;
  filters.classList.remove('img-filters--inactive');
  filters.addEventListener('click', onClickFilter);
};

export {showFilters};
