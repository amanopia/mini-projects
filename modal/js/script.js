let showModalArray = document.querySelectorAll('.show-modal');
let closeModal = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

function hideModal(){
    modal.classList.add('hidden');
    overlay.classList.toggle('hidden');
}

// For loop is a control structure that will automate any repetitive task, thus it will automate the task of adding eventlistener to each button individually
for(let i = 0; i<showModalArray.length; i++){
    showModalArray[i].addEventListener('click', function(){
        modal.classList.remove('hidden');
        overlay.classList.toggle("hidden");
    })
}

// Click on cross button to close the modal
closeModal.addEventListener('click', hideModal)

// click outside the modal, on the overlay to close the modal
overlay.addEventListener('click', hideModal)

document.addEventListener('keydown', function(event){
    if(event.key === "Escape" && !modal.classList.contains('hidden') && !overlay.classList.contains('hidden')){
        hideModal();
    }
})