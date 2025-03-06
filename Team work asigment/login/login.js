//login
// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAI8QhtRliqDJrn-B_hv7A6woHXmVtpisI",
  authDomain: "authentication-f15ac.firebaseapp.com",
  projectId: "authentication-f15ac",
  storageBucket: "authentication-f15ac.firebasestorage.app",
  messagingSenderId: "622475463006",
  appId: "1:622475463006:web:eb4863b7350267995be7cf",
  measurementId: "G-SVTRYB90HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const submit = document.getElementById('submit');

submit.addEventListener("click", function (event) {
  event.preventDefault()
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      // Signed up
      const user = userCredential.user;
      alert("Login sucessfully......")
      window.location.href = "success.html"

      //...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)

    });
})