import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
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
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new FacebookAuthProvider();

  const facebookBtn = document.querySelector('.facebookBtn');

facebookBtn.addEventListener('click', function(event){
    event.preventDefault();

        signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const user = result.user;
        window.location.href = "grand.html";
        
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
    });

});


    