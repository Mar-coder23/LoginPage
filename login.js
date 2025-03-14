 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
 import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
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

// add event listener to button that will trigger the event. 
createBtn.addEventListener('click', function(event){
    event.preventDefault();
    const email = document.querySelector('.usernameInput').value;
    const password = document.querySelector('.passwordInput').value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)

    // this to show an alert and to open the window after it logged or registered in
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("Logging in");
        window.location.href = "grand.html";
        // ...
    })
    // This is code to catch an error and display an alert message for it.
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Invalid Username or Password... Try Again");
        // ..
    });
    
});


