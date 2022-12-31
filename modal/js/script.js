let showModalArray = document.querySelectorAll('.show-modal');
let closeModal = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

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

