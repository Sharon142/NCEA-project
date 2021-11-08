const modalWrapper = document.querySelector('.modal-wrapper');
//modal add
const addModal = document.querySelector('.add-modal');
const addModalForm = document.querySelector('.add-modal .form');
const btnAdd = document.querySelector('.btn-add');
const tableUsers = document.querySelector('.table-users');

//Create element and render scientists
const renderUser = doc => {
    const tr = `
    <tr>
            <td>${doc.data().firstName}</td>
            <td>${doc.data().lastName}</td>
            <td>${doc.data().achievement}</td>
            <td>${doc.data().invention}</td>
            <td>${doc.data().other}</td>
            <td>
                <button class="btn btn-edit">Edit</button>
                <button class="btn btn-delete">Delete</button>
            </td>
        </tr>
    `;
    tableUsers.insertAdjacentHTML('beforeend', tr);

//Click delete
const btnDelete = document.querySelector('.btn-delete');
btnDelete.addEventListener('click', () => {
    console.log('user deleted');
});
}

//Click add button
btnAdd.addEventListener('click', () =>{
    addModal.classList.add('modal-show');
});

//user click anywhere outside the form
window.addEventListener('click',  e =>{
    if (e.target === addModal){
      addModal.classList.remove('modal-show');
    }
});

 //Get all scientists
db.collection('user').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        renderUser(doc);
    })
});

//Click submit in add modal
addModalForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log(addModalForm.firstName.value)
    db.collection('user').add({
        firstName: addModalForm.firstName.value,
        lastName: addModalForm.lastName.value,
        achievement: addModalForm.achievement.value,
        invention: addModalForm.invention.value,
        other: addModalForm.other.value,
    });
    modalWrapper.classList.remove('modal-show');
})


