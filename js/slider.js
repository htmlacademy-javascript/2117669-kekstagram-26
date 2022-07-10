const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const allEffects = document.querySelectorAll('.effects__radio');
const pictureWithoutClass = document.querySelector('.img-upload__preview').firstChild;
console.log(pictureWithoutClass);


valueElement.value = 50;


allEffects.forEach((button) => {
  button.addEventListener('change',(evt)=>{
    console.log(evt.target.querySelector('.effects__preview'));

    pictureWithoutClass.classList.add( evt.target.querySelector('SPAN').class) ;
  });
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

