const toggleSwitch = document.querySelector('.toggle-switch');
const toggleContainer = document.querySelector('.toggle-container');
const body = document.querySelector('body');

toggleSwitch.addEventListener('click', function(){
    // class to toggle dark mode on body
    body.classList.toggle('dark-mode-color');
    toggleSwitch.classList.toggle('sliding-animation');
    toggleContainer.classList.toggle('green-background');
})