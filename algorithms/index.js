const toggleSwitch = document.querySelector('.toggle-switch');
const toggleContainer = document.querySelector('.toggle-container');
const codeLink = document.querySelector('.link');
const codeParent = document.querySelector('.code-parent');

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
    codeLink.classList.toggle('link-dark');
    // remove light class
    codeLink.classList.toggle('light');
})