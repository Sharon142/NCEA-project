//Add Modal
const addModal = document.querySelector('.add-modal');
const btnAdd = document.querySelector('.btn-add');
const tableUsers = document.querySelector('table-users')

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
db.colection('user').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        renderUser(doc);
    })
})