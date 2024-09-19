
const wrapper = document.querySelector('.viewer-addproduct');
const loginLink = document.querySelector('.cancel-btn');
const registerLink = document.querySelector('.next-btn');
const iconClose = document.querySelector('.cancal-all'); 
const btnPopup = document.querySelector('.place-popup');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});


iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});