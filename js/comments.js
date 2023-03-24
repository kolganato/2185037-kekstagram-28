const COUNT_COMMENTS_UPLOADED = 5;

let commentsShown = 0;
let comments = [];
const social = document.querySelector('.big-picture__social');
const commentsList = social.querySelector('.social__comments');
const commentsLoader = social.querySelector('.comments-loader');

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

const uploadedComments = () => {
  const commentsFragment = document.createDocumentFragment();
  for(let i = 0; i < comments.length; i++){
    if(i === COUNT_COMMENTS_UPLOADED){
      break;
    }else if(commentsShown >= comments.length){
      commentsLoader.classList.add('hidden');
      commentsLoader.removeEventListener('click',uploadedComments);
      break;
    }else{
      commentsLoader.classList.remove('hidden');
    }
    commentsFragment.appendChild(createCommentElement(comments[commentsShown]));
    commentsShown++;
  }
  commentsList.appendChild(commentsFragment);
  social.querySelector('.social__comment-count').innerHTML = `${commentsShown} из <span class='comments-count'>${comments.length}</span> из комментариев`;
};

const renderComments = (img, photosData) => {
  comments = getCommentsPhoto(photosData.find((elem) => elem.id === Number(img.dataset.id)));
  commentsShown = 0;
  commentsList.innerHTML = '';

  uploadedComments();

  commentsLoader.addEventListener('click',uploadedComments);

};

export {renderComments};

