const toggleSwitch = document.querySelector('.toggle-switch');
const toggleContainer = document.querySelector('.toggle-container');
const headerLink = document.querySelector('.header-link');
const codeParent = document.querySelector('.code-parent');
const svgs = document.querySelectorAll("svg");

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
    // add the dark class
    codeParent.classList.toggle('dark');
    // remove the light class
    codeParent.classList.toggle('light')
    // add dark class
    headerLink.classList.toggle('link-dark');
    // remove light class
    headerLink.classList.toggle('light');

    // on the click of the button, toggle the fill to light
    for(let i = 0; i<svgs.length ; i++){
        svgs[i].classList.toggle('color-light');
    }
})