//Add Modal
const addModal = document.querySelector('.add-modal');
const btnAdd = document.querySelector('.btn-add');

//Click add button
btnAdd.addEventListener('click', () =>{
    addModal.classList.add('modal-show');
});

//user click anywhere outside the form
window.addEventListener('click',  e =>{
console.log(e.target, addModal);
});