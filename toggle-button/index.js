let toggleSwitch = document.querySelector('.toggle-switch');
let toggleContainer = document.querySelector('.toggle-container');
let body = document.querySelector('body');

toggleSwitch.addEventListener('click', function(){
    toggleContainer.classList.toggle('green-background');
    toggleSwitch.classList.toggle('sliding-animation');
    body.classList.toggle('dark-background');
})

// Changing element state by adding and removing classes
.toggleContainer.addEventListener('click', function() {
    toggleContainer.classList.toggle('green-background');
    toggleSwitch.classList.toggle('sliding-animation');
})