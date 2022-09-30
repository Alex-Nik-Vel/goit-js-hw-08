import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

const localStorageFormKey = "feedback-form-state";
const formData = {};

function onInput(evt) {
    // console.log('onInput evt ==', evt)
    // console.log('onInput evt.target==', evt.target)
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(localStorageFormKey, JSON.stringify(formData));
}

function onSubmit(evt) {
    // console.log('evt onSubmit', evt);
  console.log(JSON.parse(localStorage.getItem(localStorageFormKey)));
    evt.preventDefault();
    // console.log('evt.target', evt.target);
    evt.target.reset();    
    localStorage.removeItem(localStorageFormKey);
}

(function dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem(localStorageFormKey));
    console.log('data', data);
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data != null) {
    email.value = data.email;
    message.value = data.message;
  }
})();