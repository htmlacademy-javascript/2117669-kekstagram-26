const inputForUploadElement = document.querySelector('#upload-file');
const formElement = document.querySelector('.img-upload__form');
const editPhotoWindowElement = document.querySelector('.img-upload__overlay');
const imagePreviewElement = document.querySelector('.img-upload__preview').firstElementChild;
const closeUploadElement = document.querySelector('#upload-cancel');

inputForUploadElement.addEventListener('change',addListenerForUpload);

function addListenerForUpload(evt) {
  evt.preventDefault();
  editPhotoWindowElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  imagePreviewElement.src =  URL.createObjectURL(evt.target.files[0]);
  closeUploadElement.addEventListener('click',addListenerForCloseUploadByClick);
  document.addEventListener('keydown',addListenerForCloseUploadByEsk);
}
function returnToInitialCondition(evt) {
  evt.preventDefault();
  inputForUploadElement.value = '';
  editPhotoWindowElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeUploadElement.removeEventListener('click',addListenerForCloseUploadByClick);
  document.removeEventListener('keydown',addListenerForCloseUploadByEsk);
  formElement.reset();
}
function addListenerForCloseUploadByClick(evt) {
  returnToInitialCondition(evt);
}

function addListenerForCloseUploadByEsk(evt) {
  if (evt.key === 'Escape') {
    returnToInitialCondition(evt);
  }
}

export {formElement};
