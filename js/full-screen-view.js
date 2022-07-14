import { finalList } from './main.js';
import { fullPhotoElement } from './thumbnail-rendering.js';
const onButtonClose = document.querySelector('.big-picture__cancel');

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
}

function openBigPicture(element)  { //Описывает новые данные,выбрав элемент из отрисовки
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    fullPhotoElement.querySelector('.social__comment-count').classList.add('hidden');
    fullPhotoElement.querySelector('.comments-loader').classList.add('hidden');
    document.body.classList.add('modal-open');
    const fullPhotoData = finalList.find((photo) => photo.url === evt.target.getAttribute('src'));
    //находит после клика по атрибуту src необходимую нам большую фотку из перечня мелких
    fullPhotoElement.querySelector('.big-picture__img').querySelector('img').src = fullPhotoData.url;//url for img
    fullPhotoElement.querySelector('.likes-count').textContent = fullPhotoData.likes;
    const fullPhotoDescription = fullPhotoElement.querySelector('.social__caption');
    fullPhotoDescription.textContent = fullPhotoData.description;
    const  fullPhotoCommentsClone = fullPhotoElement.querySelector('.social__comment').cloneNode(true);
    const socialCommentsList = fullPhotoData.comments.map((comment) => {
      fullPhotoCommentsClone.querySelector('.social__picture').src = comment.avatar;
      fullPhotoCommentsClone.querySelector('.social__text').textContent=comment.message;
      return fullPhotoCommentsClone;
    });
    const commentsListFragment = fullPhotoElement.querySelector('.social__comments');
    commentsListFragment.innerHTML='';
    socialCommentsList.forEach((commentFragment) => {
      commentsListFragment.append(commentFragment);
    });
    fullPhotoElement.classList.remove('hidden');
    addListenersToCloseBigPicture();
  });// для Listener
}
export {openBigPicture};
