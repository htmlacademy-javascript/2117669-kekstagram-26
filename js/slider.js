const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const onRadioButtonClick = document.querySelector('.img-upload__effects');
const pictureWithoutClass = document.querySelector('.img-upload__preview').firstElementChild;
const effectsRadio = document.querySelector('.effects__radio');

let styleEffect = '';
function changeClass (evt) {
  evt.preventDefault();
  const effect = evt.target.id.split('-')[1];
  const effectPreviewClass=`effects__preview--${effect}`;
  console.log(effect);
  valueElement.value = 100;
  pictureWithoutClass.classList= '';
  pictureWithoutClass.classList.add(effectPreviewClass);
  switch (effectPreviewClass){
    case 'effects__preview--chrome':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start:1,
        step: 0.1,
      });
      styleEffect = 'grayscale';
      break;
    case 'effects__preview--sepia':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start:1,
        step: 0.1,
      });
      styleEffect = 'sepia';
      break;
    case 'effects__preview--marvin':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start:100,
        step: 1,
      });
      styleEffect = 'invert';
      break;
    case 'effects__preview--phobos':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start:3,
        step: 0.1,
      });
      styleEffect = 'blur';
      break;
    case 'effects__preview--heat':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start:3,
        step: 0.1,
      });
      styleEffect = 'brightness';
      break;
  }// скобка для свич
  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();

  });
}
onRadioButtonClick.addEventListener('change',changeClass);
// onRadioButtonClick.removeEventListener('change', changeClass);


noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start:50,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  const tail = styleEffect === 'invert'? '%':styleEffect === 'blur' ? 'px': '';
  pictureWithoutClass.style.filter = `${styleEffect}(${valueElement.value}${tail})`;
});


// function getEffect(effectType, value){
//   switch(effectType){
//     case 'effects__preview--chrome':
//     return `grayscale(${Number(value)/100)})`
//   }
// }
