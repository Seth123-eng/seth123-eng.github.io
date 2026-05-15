const firebaseConfig = {
  apiKey: "AIzaSyCP_KN0bMxEo5KvX43y12fQlZv8-coBvUM",
  authDomain: "attendace-8758c.firebaseapp.com",
  databaseURL: "https://attendace-8758c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "attendace-8758c",
  storageBucket: "attendace-8758c.firebasestorage.app",
  messagingSenderId: "810025114071",
  appId: "1:810025114071:web:765ee5b8bed3b26d821392",
  measurementId: "G-2375DPHVP1"
};
//initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth=firebase.auth()

console.log('connected to firebase')


function logout(){
  firebase.auth().signOut().then(() => {
    window.location.href = "index.html"
  })
  .catch((error) => {
    alert(error)
  })
}