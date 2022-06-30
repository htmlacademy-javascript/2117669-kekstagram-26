//Вспомогательные функции
export {getRandomPositiveInteger,checkStringLength};
function getRandomPositiveInteger (a, b) {
  const LOVER = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const UPPER = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const RESULT = Math.random() * (UPPER - LOVER + 1) + LOVER;
  return Math.floor(RESULT);
}
getRandomPositiveInteger();

function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength ('anystring',7);

