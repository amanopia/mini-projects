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