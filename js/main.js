/*Объект состоит из 5 элеменов:
1.id, число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться.
2.url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
3.description, строка — описание фотографии. Описание придумайте самостоятельно.
4.likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
5.comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:
{
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
},
*/
const photoDescriptions = ['на отдыхе','на чиле','фантастика','чудесный отдых','я на стиле'];
const  comments = ['Всё отлично!','В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра.','В конце концов это просто непрофессионально.','Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.','Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];
const names = ['Екатерина','Олег','Максим','Виола','Корней','Гарри','Воландеморт','Белатриса','Мила','Карина','Буратино','Мальвина','Джо','Филлип','Ашотик','Варя','Жнец','Хюрем','Сталоне','Нига','Баста','Садам','Евдокия','Рамзан','Усейнболт','Зинка'];

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength ('anystring',7);

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

