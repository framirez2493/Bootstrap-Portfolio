var config = {
  apiKey: "AIzaSyCQMOCI_G8buo_ZsD19AbaFRBbPHZOnPqc",
  authDomain: "portafoliofr7.firebaseapp.com",
  databaseURL: "https://portafoliofr7.firebaseio.com",
  projectId: "portafoliofr7",
  storageBucket: "portafoliofr7.appspot.com",
  messagingSenderId: "28348492164"
};

firebase.initializeApp(config);

var database = firebase.database();

  
//var clickCounter = 0;

// FUNCTIONS + EVENTS
// --find analytica to tract times u visited the site------------------------------------------------------------------------------

//$("#click-button").on("click", function() {
//  clickCounter++;
//  database.ref().set({
 //   clickCount: clickCounter
//  });
//});

// MAIN PROCESS + INITIAL CODE
// --------------------------------------------------------------------------------

//database.ref().on("value", function(snapshot) {
//  console.log(snapshot.val());
//  $("#click-value").text(snapshot.val().clickCount);
//  clickCounter = snapshot.val().clickCount;
//}, function(errorObject) {
//  console.log("The read failed: " + errorObject.code);
//});

  
  // 2. Button for adding Employees
  $("#add-comment-btn").on("click", function (event) {
    event.preventDefault();
  
    var UName = $("#name-input").val().trim();//tnmae= any value nput it
  
    // Time is 3:30 AM
    var tEmail = $("#email-input").val().trim();//firstime= any value nput it
  
    var reason = $("#reason-input").val().trim();//trainD= any value nput it
  
  
    var comment = $("#comment-input").val().trim();//frequency= any value nput it
  
   
 // var email = 'fer0624@gmail.com'
    // Creates local "temporary" object for holding employee data
    var Contact = {
      Username: UName,
      email: tEmail,
      search: reason,
      feedback: comment
    };
   // document.write('<a href="mailto:' + email + '?subject=' +Contact+ '&body=' +Contact+ '">' + 'Click here to send email as well' + '<'+'/a>')
   
  
    // Uploads train data to the database
    database.ref().push(Contact);
  
    // Logs everything to console
    
  
    alert("Thank you i will review your inquiry and get back to you");
  
    // Clears all of the text-boxes
    $("#name-input").val("");
    $("#email-input").val("");
    $("#reason-input").val("");
    $("#comment-input").val("");
  });
   
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var UName = childSnapshot.val().Username;
    var tEmail = childSnapshot.val().email;
    var reason = childSnapshot.val().search;
    var comment = childSnapshot.val().feedback;
    
  
   

  
//Create the new row
   var newRow = $("<tr>").append(
   $("<td>").text(UName),
   $("<td>").text(tEmail),//for matted for standard time
   $("<td>").text(reason),
   $("<td>").text(comment),   ); // Append the new row to the table
   $("#user-table > tbody").append(newRow);
  });
 
 

 
  