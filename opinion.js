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
db.collection('user').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        renderUser(doc);
    })
})

"https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js"
 "https://firebase.google.com/docs/web/setup#available-libraries.js"
 "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVA7vrkI_VNgQMLOM_glvRxYwJ05RnGzg",
  authDomain: "users-feaa8.firebaseapp.com",
  projectId: "users-feaa8",
  storageBucket: "users-feaa8.appspot.com",
  messagingSenderId: "606694220683",
  appId: "1:606694220683:web:8ca0115dea4173eeb3c58e"
};

