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
const PHOTO_DESCRIPTIONS = ['на отдыхе','на чиле','фантастика','чудесный отдых','я на стиле'];
const  COMMENTS = ['Всё отлично!','В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра.','В конце концов это просто непрофессионально.','Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.','Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];
const NAMES = ['Екатерина','Олег','Максим','Виола','Корней','Гарри','Воландеморт','Белатриса','Мила','Карина','Буратино','Мальвина','Джо','Филлип','Ашотик','Варя','Жнец','Хюрем','Сталоне','Нига','Баста','Садам','Евдокия','Рамзан','Усейнболт','Зинка'];
export {PHOTO_DESCRIPTIONS,COMMENTS,NAMES };