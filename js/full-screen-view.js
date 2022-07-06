import { finalList } from './main.js';
import { fullPhoto } from './thumbnail-rendering.js';

function closeBigPicture  (element)  {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    fullPhoto.classList.add('hidden');
  });
  document.addEventListener ('keydown', (evt) => {
    if (evt.key === 'Escape') {
      fullPhoto.classList.add('hidden');
    }
  });
}

function OpenBigPicture  (element)  {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    fullPhoto.querySelector('.social__comment-count').classList.add('hidden');
    fullPhoto.querySelector('.comments-loader').classList.add('hidden');
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
    const  fullPhotoCommentsClone = initialComment.cloneNode(true);
    const socialCommentsList = fullPhotoData.comments.map((comment) => {
      fullPhotoCommentsClone.querySelector('.social__picture').src = comment.avatar;
      fullPhotoCommentsClone.querySelector('.social__text').textContent=comment.message;
      return fullPhotoCommentsClone;
    });
    const commentsListFragment = fullPhoto.querySelector('.social__comments');
    commentsListFragment.innerHTML='';
    socialCommentsList.forEach((commentFragment) => {
      commentsListFragment.append(commentFragment);
    });

    fullPhoto.classList.remove('hidden');
    const closeButton = fullPhoto.querySelector('.big-picture__cancel');
    closeBigPicture(closeButton);
  });// для Listener
}
export {OpenBigPicture};
