//ссылка на источник : https://myrusakov.ru/js-random-numbers.html
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInRange(1, 10);


//сам придумал
function checkMaxStringLength (str, maxLength) {
  return (str.length <= maxLength) ;
}
checkMaxStringLength('longstring', 5);
// функция возвращает булево значение в зависимости от длины веденой строки в параметре один и макс. возможной длины 