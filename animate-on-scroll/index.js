const observer = new IntersectionObserver((entries) => {

    // because it checks for multiple entries, we need a for each to loop over them
    entries.forEach((entry) => {
        console.log(entry);
        // a conditional checck to see if the entry is intersecting or not
        // if we only want to show the animation once then we can stop here, but if we want to show the animation everytime a user intersects, the we need to remove the class when we are not intersecting
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
}) 
// creating intersection observer
// this is a class that takes in a callback function as contructor
// the cool thing about it is that it can observe multiple elements or entries at the same time
// this function will run whenever the visibilty of one of the observed element changes 

const hiddenElements = document.querySelectorAll('.hidden');
console.log(hiddenElements);

// now we need to tell observer, what to observe
// so we tell it to loop over all the hidden elements
hiddenElements.forEach((el) => observer.observe(el));