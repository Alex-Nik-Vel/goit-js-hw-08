import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const localStorageFormKey = "feedback-form-state";

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onFormSubmit);


let formData = JSON.parse(localStorage.getItem(localStorageFormKey)) || {};

formDataLocalStorage();


function onFormSubmit(evt) {
    // console.log('evt onSubmit', evt);
    // formData = JSON.parse(localStorage.getItem(localStorageFormKey));
    evt.preventDefault();
    // console.log('evt.target', evt.target);

    // очищення форми та localStorage
    localStorage.removeItem(localStorageFormKey);
    evt.currentTarget.reset();
    
    if (!formData.email || !formData.message) {
        localStorage.clear();
        formData = {};
        return alert('email or message not entered'); 
    } else {
        // console.log('ELSE formData.email=',formData.email);
        // console.log('Else formData.message=',formData.message);
        console.log(formData); 
    };
    
    formData = {};
}

function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    // save in localStorage
  localStorage.setItem(localStorageFormKey, JSON.stringify(formData));
}

function formDataLocalStorage() {
    const localStorageValue = localStorage.getItem(localStorageFormKey) 
    const formData = JSON.parse(localStorageValue);
    // console.log('formData', formData);
   
    if (formData) {
      email.value = formData.email || '';
      message.value = formData.message || '';      
  } 
    // console.log('formData.email', email.value);
    // console.log('formData.message', message.value);
};





