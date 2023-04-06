import { debounce, shuffleArray } from './util.js';
import { renderThumbnails } from './thumbnails-rendering.js';

const PICTURES_COUNT = 10;
const FilterMethods = {
  random:(data) => shuffleArray(data.slice()).slice(0, PICTURES_COUNT),
  discussed: (data) => data.slice().sort((pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length),
  default: (data) => data.slice()
};

const filters = document.querySelector('.img-filters');

const onClickFilter = debounce((evt) => {
  if(evt.target.classList.contains('img-filters__button')){
    const isFilter = evt.target.id.startsWith('filter-');
    if(isFilter){
      const filter = evt.target.id.split('-')[1];
      const filterMethod = Object.keys(FilterMethods).filter((method) => filter === method);
      const getMethod = FilterMethods[filterMethod];
      const pictures = getMethod(FilterMethods.pictures);
      renderThumbnails(pictures);
    }
  }
});

const showFilters = (data) => {
  FilterMethods.pictures = data;
  filters.classList.remove('img-filters--inactive');
  filters.addEventListener('click', onClickFilter);
};

export {showFilters};
