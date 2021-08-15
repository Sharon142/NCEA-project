const modalWrapper = document.querySelector('.modal-wrapper');
//modal add
const addModal = document.querySelector ('.add-modal');
const addModalForm = document.querySelector ('.add-modal .form');
const btnAdd = document.querySelector('.btn-add');

//modal edit
const editModal = document.querySelector ('.edit-modal');
const editModalForm = document.querySelector ('.edit-modal .form');
const btnAdd = document.querySelector('.btn-add');

const tableUsers = document.querySelector('.table-users');

let id;

//create element and render users
const renderUser = doc => {
    console.log()
const tr = 
<tr data id= '${doc.id}'>
    <td>${doc.data().firstName}</td>
    <td>${doc.data().lastName}</td>
    <td>${doc.data().invention}</td>
    <td>${doc.data().achievement}</td>
    <td>
    <button class="btn btn-edit">Edit </button>
    <button class="btn btn-delete">Delete </button>
    </td>
  </tr>  
    ;
tableUsers.insertAdjacentHTML('beforeend', tr);

//Click edit user
const btnEdit = document.querySelector(`[data-id='${doc.id}'] .btn-edit`);
btnEdit.addEventListener('click', () =>{
editModal.classList.add(`modal-show`);

id = doc.id;
editModalForm.firstName.value = doc.data().firstName;
editModalForm.lastName.value = doc.data().lastName;
editModalForm.invention.value = doc.data().invention;
editModalForm.achievement.value = doc.data().achievement;
});

//Click delete user
const btnDelete = document.querySelector(`[data.id= '$(doc.id)']'.btn-delete`);
btnDelete.addEventListener('click', () => {
    db.collection('users').doc(`$(doc.id)`).delete().then(() =>{
        console.log('Document succesfully deleted!');
    }).catch(err =>{
        console.log('Error removing document', err);
    })
});

}

//Click add user
btnAdd.addEventListener('click', () =>{
    addModal.classList.add('modal-show');

    addModalForm.firstName.value = '';
    addModalForm.lastName.value = '';
    addModalForm.invention.value = '';
    addModalForm.achievement.value = '';
});

//User click anywhere outside the modal

window.addEventListener ('click', e =>{
    if(e.target===addModal){
        addModal.classList.remove('modal-show')//error with classList
    }  
    if(e.target === editModal) {
        editModal.classList.remove('modal-show');
    }
});

//Get all users
db.collection('users').get().then(querySnapshot =>{//error 
   querySnapshot.forEach(doc =>{
     renderUser(doc);
  })
});
//Real time listener

db.collection('users').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change =>{
        if(change.type === 'added'){
         renderUser(change.doc);
        }
        if(change.type ==='removed') {
            let tr = document.querySelector(`[data-id]='${change.doc.id}'`)
            let tbody = tr.parentElement;
            tableUsers.removeChild(tbody);
        }
        if(change.type ==='modified') {
            let tr = document.querySelector(`[data-id]='${change.doc.id}'`)
            let tbody = tr.parentElement;
            tableUsers.removeChild(tbody);
            renderUser(change.doc);
        }
    })
})

//Click submit in add modal
addModalForm.addEventListener('submit', ()=>{
    e.preventDefault();
    db.collection('users').add({
        firstName: addModalForm.firstName.value,
        lastName: addModalForm.lastName.value,
        phone: addModalForm.phone.value,
        email: addModalForm.email.value,
    });
modalWrapper.classList.remove('modal-show');
});

//Click submit in edit modal
editModalForm.addEventListener('submit', e=>{
    e.preventDefault();
    db.collection('users').doc(id).update({
        firstName: editModalForm.firstName.value
        lastName: editModalForm.lastName.value,
        invention: editModalForm.phone.value,
        achievement: editModalForm.email.value,
    })
    editModal.classList.remove('modal-show');

});