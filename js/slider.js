const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const onRadioButtonClick = document.querySelector('.img-upload__effects');
const pictureWithoutClass = document.querySelector('.img-upload__preview').firstElementChild;

let styleEffect = '';
function changeClass (evt) {
  evt.preventDefault();
  const effect = evt.target.id.split('-')[1];
  const effectPreviewClass=`effects__preview--${effect}`;
  valueElement.value = 100;
  pictureWithoutClass.classList.add('effects__preview--none');
  pictureWithoutClass.classList= '';
  pictureWithoutClass.classList.add(effectPreviewClass);
  sliderElement.hidden = false;
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
    case 'effects__preview--none':
      styleEffect = '';
      sliderElement.hidden = true;
      break;
  } // скобка для свич

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    let tail ='';
    pictureWithoutClass.style.filter = `${styleEffect}(${valueElement.value}${tail})`;
    if (styleEffect === 'invert') {
      tail ='%' ;
      pictureWithoutClass.style.filter = `${styleEffect}(${valueElement.value}${tail})`;
    }
    else if(styleEffect === 'blur') {
      tail = 'px';
      pictureWithoutClass.style.filter = `${styleEffect}(${valueElement.value}${tail})`;
    }
    else if(styleEffect === '') {
      pictureWithoutClass.style.filter ='';
    }
  });
}

onRadioButtonClick.addEventListener('change',changeClass);
//  onRadioButtonClick.removeEventListener('change', changeClass);

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start:50,
  step: 1,
  connect: 'lower',
});
export {sliderElement};
