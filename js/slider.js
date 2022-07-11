const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const onRadioButtonClick = document.querySelector('.img-upload__effects');
const pictureWithoutClass = document.querySelector('.img-upload__preview').firstElementChild;
console.log(pictureWithoutClass);


valueElement.value = 50;


onRadioButtonClick.addEventListener('change',(evt)=>{
  console.log(evt.target);
});




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
});

