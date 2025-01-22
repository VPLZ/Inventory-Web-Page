const firebaseConfig = {
  apiKey: "AIzaSyA9MtjA_03b3ki7gl28pP5aO_yoyS0HWBE",
  authDomain: "stock-banana.firebaseapp.com",
  databaseURL: "https://stock-banana-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "stock-banana",
  storageBucket: "stock-banana.firebasestorage.app",
  messagingSenderId: "750264543978",
  appId: "1:750264543978:web:d076b501593b31bf454593"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => {
    console.log("Persistence set to local");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });
  
auth.onAuthStateChanged((user) => {
  if (!user) {
    console.log("User is not logged in");
    window.location.href = "/public/login.html";
  } else {
    console.log("User is logged in:", user);
  }
});