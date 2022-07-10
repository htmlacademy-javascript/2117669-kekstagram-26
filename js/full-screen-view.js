import { finalList } from './main.js';
import { fullPhoto } from './thumbnail-rendering.js';
const closeButton = document.querySelector('.big-picture__cancel');
const commentsLoaderElement = document.querySelector('.comments-loader');
const socialCommentsCounterElement = document.querySelector('.social__comment-count');
const commentsCountElement = document.querySelector('.comments-count');

function closeByClickHandler(evt) {
  evt.preventDefault();
  fullPhoto.classList.add('hidden');
  removeListenersToCloseBigPicture();
}
function closeByEscapeHandler(evt) {
  if (evt.key === 'Escape') {
    fullPhoto.classList.add('hidden');
    removeListenersToCloseBigPicture();
  }
}
function addListenersToCloseBigPicture()  { //добавл листенер
  closeButton.addEventListener('click', closeByClickHandler);
  document.addEventListener ('keydown', closeByEscapeHandler);
}

function removeListenersToCloseBigPicture()  { //убирает листенер
  closeButton.removeEventListener('click', closeByClickHandler);
  document.removeEventListener ('keydown', closeByEscapeHandler);
}

function OpenBigPicture  (element)  { //Описывает новые данные,выбрав элемент из отрисовки
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    // fullPhoto.querySelector('.social__comment-count').classList.add('hidden');
    // fullPhoto.querySelector('.comments-loader').classList.add('hidden');
    document.body.classList.add('modal-open');
    const fullPhotoData = finalList.find((photo) => photo.url === evt.target.getAttribute('src'));
    //находит после клика по атрибуту src необходимую нам большую фотку из перечня мелких
    const fullPhotoAdress =  fullPhoto.querySelector('.big-picture__img');//<div> for img
    fullPhotoAdress.querySelector('img').src = fullPhotoData.url;//url for img
    const fullPhotoLikes = fullPhoto.querySelector('.likes-count');
    fullPhotoLikes.textContent = fullPhotoData.likes;
    const fullPhotoDescription = fullPhoto.querySelector('.social__caption');
    fullPhotoDescription.textContent = fullPhotoData.description;
    const initialComment =fullPhoto.querySelector('.social__comment');
    const socialCommentsList = fullPhotoData.comments.map((comment) => {
      const  fullPhotoCommentsClone = initialComment.cloneNode(true);
      fullPhotoCommentsClone.querySelector('.social__picture').src = comment.avatar;
      fullPhotoCommentsClone.querySelector('.social__text').textContent =comment.message;
      fullPhotoCommentsClone.querySelector('.social__picture').alt = comment.name;
      return fullPhotoCommentsClone;
    });
    const commentsListFragment = fullPhoto.querySelector('.social__comments');
    commentsListFragment.innerHTML='';
    renderComments();
    function renderComments (commentCount=5) {
      const commentList = socialCommentsList.slice(0,commentCount);
      commentList.forEach((commentFragment) => {
        commentsListFragment.append(commentFragment);
      });
    }
    fullPhoto.classList.remove('hidden');
    addListenersToCloseBigPicture();

    let commentStringAtBegining = Number(socialCommentsCounterElement.textContent.substring(1,NaN));
    const commentStringAtAll =  Number(commentsCountElement.textContent);
    function loadCommentHandler (e) {
      e.preventDefault();
      commentStringAtBegining += 5;
      socialCommentsCounterElement.textContent =`${commentStringAtBegining} из 125 комментариев`;
      if (commentStringAtBegining < commentStringAtAll ){
        renderComments(commentStringAtBegining);
      }else {
        commentsLoaderElement.classList.add('hidden');
        commentsLoaderElement.removeEventListener('click',loadCommentHandler);
      }
    }
    commentsLoaderElement.addEventListener('click',loadCommentHandler);


  });// для Listener
}
//

export {OpenBigPicture};
