import {PHOTO_DESCRIPTIONS,COMMENTS,NAMES} from './input-data.js';
import {getRandomPositiveInteger} from './util.js';
import './show-hide-form.js';
import './form.js';
function createCommentsElement(_,index)  {  // Функция для описания обьекта с комментарием
  //Постоянная для случайного выбора коммента из массива COMMENTS
  const messageContent = COMMENTS[getRandomPositiveInteger(0,COMMENTS.length - 1)];
  //Постоянная для случайного выбора коммента из массива NAMES
  const author = NAMES[getRandomPositiveInteger(0,NAMES.length - 1)];
  return {
    id:index +1,/*т.к.фун-я createCommentsElement - это колбек для постоянной finalList (она входит в состав фун-и createPhotoDescription - это прямой колбек) она будет перебираться 25 раз и мы получим наши неповторяющиеся ID через второй параметр index*/
    avatar: `img/avatar-${getRandomPositiveInteger (1, 6)}.svg`,
    message: messageContent,
    name: author,
  };
}

function createPhotoDescription(_,index) { /*Функция для создания основного обьекта из 5ти элементов*/
  const adress = `photos/${index+1}.jpg`;
  //Постоянная для получения описания фотографии из массива PHOTO_DESCRIPTIONS
  const photoPhrase = PHOTO_DESCRIPTIONS[getRandomPositiveInteger(0,PHOTO_DESCRIPTIONS.length-1)];
  const likesNumber = getRandomPositiveInteger(15,200);
  //Постоянная для создания массива из 2х обьектов-комментариев ,которые создаются фун-ей createCommentsElement
  const totalComments = Array.from({length: 2},createCommentsElement );
  return {
    id:index+1,/*т.к.фун-я createPhotoDescription - это прямой колбек для постоянной finalList  она будет перебираться 25 раз и мы получим наши неповторяющиеся ID через второй параметр index*/
    url:adress,
    description:photoPhrase,
    likes:likesNumber,
    comments: totalComments,
  };
}
const OBJECT_QUANTITY = 25;
const finalList = Array.from({length:OBJECT_QUANTITY},createPhotoDescription);
finalList.join();
export {finalList};
