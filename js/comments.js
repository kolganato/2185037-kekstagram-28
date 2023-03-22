const COUNT_COMMENTS_UPLOADED = 5;
const getCommentsPhoto = (elem) => elem.comments;
const getCountComments = (img) => img.parentNode.querySelector('.picture__comments').textContent;
let commentsShown = 0;

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
    console.log(commentsShown, comments[commentsShown]);
    commentsFragment.appendChild(createCommentElement(comments[commentsShown]));
    commentsShown++;
  }
  
  commentsList.appendChild(commentsFragment);
};

const renderComments = (comments, social) => {
  // const comments = getCommentsPhoto(photosData.find((elem) => elem.id === Number(img.dataset.id)));
  const commentsList = social.querySelector('.social__comments');
  const commentsLoader = social.querySelector('.comments-loader');
  commentsShown = 0;

  console.log(comments);

  clearComments(commentsList);
  uploadedComments(social, comments, commentsList, commentsLoader);

  commentsLoader.addEventListener('click',()=>{
    uploadedComments(social, comments, commentsList, commentsLoader);
  });

};

export {renderComments, getCommentsPhoto};

