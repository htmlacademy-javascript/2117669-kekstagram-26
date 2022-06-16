import {photoDescriptions,comments,names} from './input-data.js';
import {getRandomPositiveInteger} from './util.js';
const createCommentsElement = (_,index) => {  // Функция для описания обьекта с комментарием
  //Постоянная для случайного выбора коммента из массива comments
  const messageContent = comments[getRandomPositiveInteger(0,comments.length - 1)];
  //Постоянная для случайного выбора коммента из массива names
  const author = names[getRandomPositiveInteger(0,names.length - 1)];
  return {
    id:index +1,/*т.к.фун-я createCommentsElement - это колбек для постоянной finalList (она входит в состав фун-и createPhotoDescription - это прямой колбек) она будет перебираться 25 раз и мы получим наши неповторяющиеся ID через второй параметр index*/
    avatar: `img/avatar-${getRandomPositiveInteger (1, 6)}.svg`,
    message: messageContent,
    name: author,
  };
};

const createPhotoDescription = (_,index) => { /*Функция для создания основного обьекта из 5ти элементов*/
  const adress = `photos/${getRandomPositiveInteger(1,25)}.jpg`;
  //Постоянная для получения описания фотографии из массива photoDescriptions
  const photoPhrase = photoDescriptions[getRandomPositiveInteger(0,photoDescriptions.length-1)];
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
};
const objectQuantity = 25;
const finalList = Array.from({length:objectQuantity},createPhotoDescription);
finalList.join();

