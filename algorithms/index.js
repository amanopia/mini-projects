const toggleSwitch = document.querySelector('.toggle-switch');
const toggleContainer = document.querySelector('.toggle-container');
const body = document.querySelector('body');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        console.log(entry);

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

toggleSwitch.addEventListener('click', function(){
    // class to toggle dark mode on body
    body.classList.toggle('dark-mode-color');
    toggleSwitch.classList.toggle('sliding-animation');
    toggleContainer.classList.toggle('green-background');
})