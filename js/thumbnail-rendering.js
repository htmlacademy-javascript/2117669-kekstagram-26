import { OpenBigPicture } from './full-screen-view.js';
import { finalList } from './main.js';

const userPhotoElement = document.querySelector('.pictures');//Блок куда все вставлять

const templateFragmentElement = document.querySelector('#picture').content;
const templateElement = templateFragmentElement.querySelector('.picture');
const fullPhotoElement = document.querySelector('.big-picture');//<section>

const fragment = document.createDocumentFragment();
finalList.forEach((_,index) => {
  const element = templateElement.cloneNode(true);// <a> - clone

  element.querySelector('.picture__img').src =  finalList[index].url;
  element.querySelector('.picture__comments').textContent = finalList[index].comments;
  element.querySelector('.picture__likes').textContent = finalList[index].likes;
  fragment.append(element);

  openBigPicture(element);
});

userPhotoElement.append(fragment);
export {fullPhotoElement};
