//Unique Firebase Object
var firebaseConfig = {
    apiKey: "AIzaSyBByvOby0YbRJvdiKGIS2LOhoLFiOTkN7s",
    authDomain: "regisform-a1888.firebaseapp.com",
    projectId: "regisform-a1888",
    storageBucket: "regisform-a1888.appspot.com",
    messagingSenderId: "19635563360",
    appId: "1:19635563360:web:1511b8f14f589671b1cc05"       
     };
  
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  
  //Variable to access database collection
  const db = firestore.collection("fomData");
  
  //Get Submit Form
  //let submitButton = document.getElementById("submit");//
  
  //Create Event Listener To Allow Form Submission
  document.getElementById("submit").addEventListener('click', function(e) {
    //Prevent Default Form Submission Behavior
    e.preventDefault();
  
    //Get Form Values
    let Name = document.getElementById("name").value;
    let Surname = document.getElementById("surname").value;
    let Emailaddress = document.getElementById("email").value;
    let Gender = document.getElementById("gender").value;
    let Weaknesses = document.getElementById("weaknesses").value;
    let Strengths = document.getElementById("strengths").value;
  
    firestore
      .collection("fomData").get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const n = doc.data().name;
          if (Name === n) {
            console.log("Already Exists");
          }
  
          // console.log("data", doc.data().name);
        });
      });
    //Save Form Data To Firebase
    db.doc()
      .set({
        Name: Name,
        Surname: Surname,
        Emailaddress: Emailaddress,
        Gender: Gender,
        Weaknesses: Weaknesses,
        Strengths: Strengths,

      })
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });
  
    //alert
    alert("Your Form Has Been Submitted Successfully");
  
    //clear form after submission
    function clearForm() {
      document.getElementById("clearFrom").reset();
    }
    clearForm()
  });