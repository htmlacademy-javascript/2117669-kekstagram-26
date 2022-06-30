import {FINAL_LIST} from './main.js';
const USER_PHOTO = document.querySelector('.pictures');//Блок куда все вставлять

const TEMPLATE_FRAGMENT = document.querySelector('#picture').content;
const TEMPLATE = TEMPLATE_FRAGMENT.querySelector('.picture');

const FRAGMENT = document.createDocumentFragment();
FINAL_LIST.forEach((_,index) => {
  const ELEMENT = TEMPLATE.cloneNode(true);// <a> - clone
  ELEMENT.querySelector('.picture__img').src =  FINAL_LIST[index].url;
  ELEMENT.querySelector('.picture__comments').textContent = FINAL_LIST[index].comments;
  ELEMENT.querySelector('.picture__likes').textContent = FINAL_LIST[index].likes;
  FRAGMENT.append(ELEMENT);
});

USER_PHOTO.append(FRAGMENT);
