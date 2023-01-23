const toggleSwitch = document.querySelector('.toggle-switch');
const body = document.querySelector('body');

toggleSwitch.addEventListener('click', function(){
    // class to toggle dark mode on body
    body.classList.toggle('dark-mode-color');
})