let showModalArray = document.querySelectorAll('.show-modal');
let closeModal = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

// For loop is a control structure that will automate any repetitive task, thus it will automate the task of adding eventlistener to each button individually
for(let i = 0; i<showModalArray.length; i++){
    showModalArray[i].addEventListener('click', function(){
        overlay.classList.remove("hidden");
        modal.classList.remove('hidden');
    })
}

closeModal.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

