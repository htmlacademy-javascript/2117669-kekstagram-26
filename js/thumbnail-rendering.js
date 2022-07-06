import { OpenBigPicture } from './full-screen-view.js';
import {finalList} from './main.js';

const userPhoto = document.querySelector('.pictures');//Блок куда все вставлять

const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('.picture');
const fullPhoto = document.querySelector('.big-picture');//<section>

const fragment = document.createDocumentFragment();
finalList.forEach((_,index) => {
  const element = template.cloneNode(true);// <a> - clone
  element.querySelector('.picture__img').src =  finalList[index].url;
  element.querySelector('.picture__comments').textContent = finalList[index].comments;
  element.querySelector('.picture__likes').textContent = finalList[index].likes;
  fragment.append(element);
  OpenBigPicture(element);
});

userPhoto.append(fragment);
export {userPhoto,fullPhoto};
