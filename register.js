 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDiWMi0CeyJvtevF2btjUY2KjzHxl5ixe4",
   authDomain: "webproject-d606f.firebaseapp.com",
   projectId: "webproject-d606f",
   storageBucket: "webproject-d606f.firebasestorage.app",
   messagingSenderId: "1018381027100",
   appId: "1:1018381027100:web:5a960a6dd9151cda8d1cd9"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

// Create Btn
const createBtn = document.querySelector('.createBtn');

createBtn.addEventListener('click', function(event){
    event.preventDefault();
    const email = document.querySelector('.usernameInput').value;
    const password = document.querySelector('.passwordInput').value;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("creating Account");
        window.location.href = "grand.html";
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
    });
});


