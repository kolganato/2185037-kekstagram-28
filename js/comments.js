const COMMENTS_PER_PAGE = 5;

let commentsShown;
let comments = [];
let counter;
const social = document.querySelector('.big-picture__social');
const commentsList = social.querySelector('.social__comments');
const commentsLoader = social.querySelector('.comments-loader');

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

const showComments = () => {
  const commentsFragment = document.createDocumentFragment();
  comments
    .slice(commentsShown, commentsShown + COMMENTS_PER_PAGE)
    .reduce((item, comment) => {
      commentsFragment.appendChild(createCommentElement(comment));
      counter++;
    }, counter);
  commentsList.appendChild(commentsFragment);
  social.querySelector('.social__comment-count').innerHTML = `${counter} из <span class='comments-count'>${comments.length}</span> комментариев`;
  if(counter >= comments.length){
    commentsLoader.classList.add('hidden');
  }else{
    commentsLoader.classList.remove('hidden');
  }
};

const loadComments = (evt) => {
  evt.preventDefault();
  commentsShown += COMMENTS_PER_PAGE;
  showComments();
};

const removeEventsComments = () => {
  commentsLoader.removeEventListener('click',loadComments);
};

const renderComments = (picture) => {
  comments = picture.comments;
  commentsShown = counter = 0;
  commentsList.innerHTML = '';
  showComments();

  commentsLoader.addEventListener('click',loadComments);

};

export {renderComments, removeEventsComments};

