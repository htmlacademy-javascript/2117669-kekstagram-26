import {PHOTO_DESCRIPTIONS,COMMENTS,NAMES} from './input-data.js';
import {getRandomPositiveInteger} from './util.js';
const CREATE_COMMENTS_ELEMENT = (_,index) => {  // Функция для описания обьекта с комментарием
  //Постоянная для случайного выбора коммента из массива COMMENTS
  const MESSAGE_CONTENT = COMMENTS[getRandomPositiveInteger(0,COMMENTS.length - 1)];
  //Постоянная для случайного выбора коммента из массива NAMES
  const AUTHOR = NAMES[getRandomPositiveInteger(0,NAMES.length - 1)];
  return {
    id:index +1,/*т.к.фун-я CREATE_COMMENTS_ELEMENT - это колбек для постоянной finalList (она входит в состав фун-и CREATE_PHOTO_DESCRIPTION - это прямой колбек) она будет перебираться 25 раз и мы получим наши неповторяющиеся ID через второй параметр index*/
    avatar: `img/avatar-${getRandomPositiveInteger (1, 6)}.svg`,
    message: MESSAGE_CONTENT,
    name: AUTHOR,
  };
};

const CREATE_PHOTO_DESCRIPTION = (_,index) => { /*Функция для создания основного обьекта из 5ти элементов*/
  const ADRESS = `photos/${index+1}.jpg`;
  //Постоянная для получения описания фотографии из массива PHOTO_DESCRIPTIONS
  const PHOTO_PHRASE = PHOTO_DESCRIPTIONS[getRandomPositiveInteger(0,PHOTO_DESCRIPTIONS.length-1)];
  const LIKES_NUMBER = getRandomPositiveInteger(15,200);
  //Постоянная для создания массива из 2х обьектов-комментариев ,которые создаются фун-ей createCommentsElement
  const TOTAL_COMMENTS = Array.from({length: 2},CREATE_COMMENTS_ELEMENT );
  return {
    id:index+1,/*т.к.фун-я createPhotoDescription - это прямой колбек для постоянной FINAL_LIST  она будет перебираться 25 раз и мы получим наши неповторяющиеся ID через второй параметр index*/
    url:ADRESS,
    description:PHOTO_PHRASE,
    likes:LIKES_NUMBER,
    comments: TOTAL_COMMENTS,
  };
};
const OBJECT_QUANTITY = 25;
const FINAL_LIST = Array.from({length:OBJECT_QUANTITY},CREATE_PHOTO_DESCRIPTION);
FINAL_LIST.join();

export {FINAL_LIST};
