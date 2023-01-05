let toggleSwitch = document.querySelector('.toggle-switch');
let toggleContainer = document.querySelector('.toggle-container');

toggleSwitch.addEventListener('click', function(){
    toggleContainer.classList.toggle('green-background');
    toggleSwitch.classList.toggle('sliding-animation');
})

// Chnging element state by adding and removing classes
.toggleContainer.addEventListener('click', function() {
    toggleContainer.classList.toggle('green-background');
    toggleSwitch.classList.toggle('sliding-animation');
})