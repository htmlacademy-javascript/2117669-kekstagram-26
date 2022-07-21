import {formElement} from './show-hide-form.js';
import './slider.js';
const re = /^#[a-zA-Zа-яА-ЯЁё0-9]{1,19}$/;
const hashtagInputElement = document.querySelector('.text__hashtags');
const textCommentElement = document.querySelector('.text__description');
const MAX_HASHTAG_NUMBER = 5;
const HASHTAG_MESSAGE_FAIL = 'Ваш хештег неправильный';
const NO_REPEAT_HASHTAG_MESSAGE = 'Такой хештег уже есть';
const NUMBER_WARNING_MESSAGE = 'Не более 5 хештегов';

function notReactOnEsc(evt) {
  if (evt.key === 'Escape'){
    evt.preventDefault();
    evt.stopPropagation();
  }
}
hashtagInputElement.addEventListener('keydown',notReactOnEsc);
textCommentElement.addEventListener('keydown',notReactOnEsc);

const pristine = new Pristine(formElement,{
  classTo:'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

function isHashtagValid(value) {
  const hashtagItems = value.trim().toLowerCase().split(' ');
  return value === '' || hashtagItems.every((hashtag) =>  re.test(hashtag));
}
pristine.addValidator(hashtagInputElement, isHashtagValid, HASHTAG_MESSAGE_FAIL);

function CheckHashtagsNumber(value) {
  const hashtagItems = value.trim().toLowerCase().split(' ');
  return hashtagItems.length <= MAX_HASHTAG_NUMBER;
}
pristine.addValidator(hashtagInputElement, CheckHashtagsNumber, NUMBER_WARNING_MESSAGE);

function isHashtagDifferent(value) {
  const hashtags = value.trim().toLowerCase().split(' ');
  let isSameHashtag = false;
  hashtags.forEach((element)=>{
    if(hashtags.some((hashtag) => hashtag === element)){
      isSameHashtag = true;
    }
  });
  return isSameHashtag;
}
pristine.addValidator(hashtagInputElement, isHashtagDifferent, NO_REPEAT_HASHTAG_MESSAGE);

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    formElement.submit();
  }
});

