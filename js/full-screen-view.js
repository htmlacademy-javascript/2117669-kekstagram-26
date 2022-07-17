import { finalList } from './main.js';
import { fullPhotoElement } from './thumbnail-rendering.js';
const onButtonClose = document.querySelector('.big-picture__cancel');
const commentsLoaderElement = document.querySelector('.comments-loader');
const socialCommentsCounterElement = document.querySelector('.social__comment-count');
const commentsCountElement = document.querySelector('.comments-count');

let commentStringAtBegining = Number(socialCommentsCounterElement.textContent.substring(1,NaN));

function closeByClickHandler(evt) {
  evt.preventDefault();
  fullPhotoElement.classList.add('hidden');
  removeListenersToCloseBigPicture();
}
function closeByEscapeHandler(evt) {
  if (evt.key === 'Escape') {
    fullPhotoElement.classList.add('hidden');
    removeListenersToCloseBigPicture();
  }
}
function addListenersToCloseBigPicture()  { //добавл листенер
  onButtonClose.addEventListener('click', closeByClickHandler);
  document.addEventListener ('keydown', closeByEscapeHandler);
}

function removeListenersToCloseBigPicture()  { //убирает листенер
  onButtonClose.removeEventListener('click', closeByClickHandler);
  document.removeEventListener('keydown', closeByEscapeHandler);
  commentStringAtBegining = 5;
}

function openBigPicture(element)  { //Описывает новые данные,выбрав элемент из отрисовки
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    // fullPhoto.querySelector('.social__comment-count').classList.add('hidden');
    // fullPhoto.querySelector('.comments-loader').classList.add('hidden');
    document.body.classList.add('modal-open');
    const fullPhotoData = finalList.find((photo) => photo.url === evt.target.getAttribute('src'));
    //находит после клика по атрибуту src необходимую нам большую фотку из перечня мелких
    fullPhotoElement.querySelector('.big-picture__img').querySelector('img').src = fullPhotoData.url;//url for img
    fullPhotoElement.querySelector('.likes-count').textContent = fullPhotoData.likes;
    const fullPhotoDescription = fullPhotoElement.querySelector('.social__caption');
    fullPhotoDescription.textContent = fullPhotoData.description;
    const initialComment = fullPhotoElement.querySelector('.social__comment');
    const socialCommentsList = fullPhotoData.comments.map((comment) => {
      const  fullPhotoCommentsClone = initialComment.cloneNode(true);
      fullPhotoCommentsClone.querySelector('.social__picture').src = comment.avatar;
      fullPhotoCommentsClone.querySelector('.social__text').textContent =comment.message;
      fullPhotoCommentsClone.querySelector('.social__picture').alt = comment.name;
      return fullPhotoCommentsClone;
    });
    const commentsListFragment = fullPhotoElement.querySelector('.social__comments');
    commentsListFragment.innerHTML='';
    renderComments();
    function renderComments (commentCount=5) {
      const commentList = socialCommentsList.slice(0,commentCount);
      commentList.forEach((commentFragment) => {
        commentsListFragment.append(commentFragment);
      });
    }
    fullPhotoElement.classList.remove('hidden');
    addListenersToCloseBigPicture();

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
export {openBigPicture};
