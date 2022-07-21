import { addListenerForCloseUploadByClick, addListenerForCloseUploadByEsk} from './show-hide-form.js';
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlSmallerOnClick = document.querySelector('.scale__control--smaller');
const scaleControlBiggerOnClick = document.querySelector('.scale__control--bigger');

let scaleValue = Number(scaleControlValue.value.slice(0,3));


function increaseScale (evt) {
  evt.preventDefault();
  if (scaleValue < 100) {
    scaleValue += 25;
    scaleControlValue.value = `${scaleValue}%`;
    document.querySelector('.img-upload__preview').style.transform = `scale(${scaleValue/100})`;
  }
}
scaleControlBiggerOnClick.addEventListener('click',increaseScale);

function decreaseScale (evt) {
  evt.preventDefault();
  if (scaleValue > 25 ) {
    scaleValue -= 25;
    scaleControlValue.value = `${scaleValue}%`;
    document.querySelector('.img-upload__preview').style.transform = `scale(${scaleValue/100})`;
  }
}
scaleControlSmallerOnClick.addEventListener('click',decreaseScale);

scaleControlSmallerOnClick.removeEventListener('click',addListenerForCloseUploadByClick);
scaleControlSmallerOnClick.removeEventListener('keydown',addListenerForCloseUploadByEsk);
scaleControlBiggerOnClick.removeEventListener('click',addListenerForCloseUploadByClick);
scaleControlBiggerOnClick.removeEventListener('click',addListenerForCloseUploadByEsk);
