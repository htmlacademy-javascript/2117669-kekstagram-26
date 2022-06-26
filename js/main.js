// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
getRandomPositiveInteger(1, 10);


//Функция от Кекса
function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength('anystring',7);

