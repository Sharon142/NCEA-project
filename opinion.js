/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  
const modalWrapper = document.querySelector('.modal-wrapper');
//modal add
const addModal = document.querySelector ('.add-modal');
const addModalForm = document.querySelector ('.add-modal .form');
const btnAdd = document.querySelector('.btn-add');

//modal edit
const editModal = document.querySelector ('.edit-modal');
const editModalForm = document.querySelector ('.edit-modal .form');
const btnEdit = document.querySelector('.btn-edit');

const tableUsers = document.querySelector('.table-users');

let id;

//create element and render users
const renderUser = doc => {
    console.log()
const tr = 
<tr data id= '${doc.id}'>
    <td>${doc.data().firstName}</td>
    <td>${doc.data().lastName}</td>
    <td>${doc.data().invetion}</td>
    <td>${doc.data().achievement}</td>
    <td>${doc.data().other}</td>
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
    editModalForm.other.value = doc.data().other;
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



//Click add button
btnAdd.addEventListener('click', () =>{
    addModal.classList.add('modal-show');
    addModalForm.firstName.value = '';
    addModalForm.lastName.value = '';
    addModalForm.invention.value = '';
    addModalForm.achievement.value = '';
    addModalForm.other.value = '';
});
//user click anywhere outside the form
window.addEventListener('click',  e =>{
    if (e.target === addModal){
      addModal.classList.remove('modal-show');
    }
});

//Get all users
//db.collection('users').get().then(querySnapshot =>{//error 
// querySnapshot.forEach(doc =>{
//     renderUser(doc);
//   })
//});

//Real time listener
db.collection('users').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if(change.type === 'added'){
            renderUser(change.doc);
        }
        if (change.type === 'removed'){
          let tr = document.querySelector(`[data-id]='${change.doc.id}'`);
          let tbody = tr.parentElement;
          tableUsers.removeChild(tbody);
        }
        if (change.type === 'modified'){
            let tr = document.querySelector(`[data-id]='${change.doc.id}'`);
            let tbody = tr.parentElement;
            tableUsers.removeChild(tbody);
            renderUser(change.doc);
          }
    })
})

//Click submit in add modal
addModalForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log(addModalForm.firstName.value)
    db.collection('user').add({
        firstName: addModalForm.firstName.value,
        lastName: addModalForm.lastName.value,
        invention: addModalForm.invention.value,
        achievement: addModalForm.achievement.value,
        other: addModalForm.other.value,
    });
    modalWrapper.classList.remove('modal-show');
})

//Click submit in edit modal
editModalForm.addEventListener('submit', e => {
     e.preventDefault();
     db.collection('user').doc(id).update({
        firstName: editModalForm.firstName.value,
        lastName: editModalForm.lastName.value,
        invention: editModalForm.invention.value,
        achievement: editModalForm.achievement.value,
        other: editModalForm.other.value,
     });
     editModal.classList.remove('modal-show');
})
