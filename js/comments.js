const COUNT_COMMENTS_UPLOADED = 5;

let commentsShown = 0;
let comments = [];

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

const clearComments = (social) => {
  social.innerHTML = '';
};

const uploadedComments = (social, comments, commentsList, commentsLoader) => {
  if( commentsShown >= comments.length ){
    commentsLoader.classList.add('hidden');
    return;
  }else{
    commentsLoader.classList.remove('hidden');
  }
  
  const commentsFragment = document.createDocumentFragment();
  for(let i = 0; i < comments.length; i++){
    if( i === COUNT_COMMENTS_UPLOADED ){
      break;
    }
    if( commentsShown >= comments.length ){
      commentsLoader.classList.add('hidden');
      break;
    }
    commentsFragment.appendChild(createCommentElement(comments[commentsShown]));
    commentsShown++;
  }
  
  commentsList.appendChild(commentsFragment);
};

const renderComments = (img, photosData, social) => {
  comments = getCommentsPhoto(photosData.find((elem) => elem.id === Number(img.dataset.id)));
  commentsShown = 0;
  const commentsList = social.querySelector('.social__comments');
  const commentsLoader = social.querySelector('.comments-loader');

  clearComments(commentsList);
  uploadedComments(social, comments, commentsList, commentsLoader);

  commentsLoader.addEventListener('click',()=>{
    uploadedComments(social, comments, commentsList, commentsLoader);
  });

};

export {renderComments};

