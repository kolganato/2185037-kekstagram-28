const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const picturesList = document.querySelector('.pictures');

const renderThumbnails = (photosData) => {
  const picturesListFragment = document.createDocumentFragment();
  photosData.forEach(({url, likes, comments, description, id}) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.dataset.id = id;
    picturesListFragment.appendChild(photoElement);
  });
  picturesList.appendChild(picturesListFragment);
};

export {renderThumbnails};
