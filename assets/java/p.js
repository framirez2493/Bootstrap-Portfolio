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

$("#add-comment-btn").on("click", function (event) {
    event.preventDefault();
  
    var feedback = $("#comment-input").val().trim();
    var Nombre = $("#name-input").val().trim();//tnmae= any value nput it
  
       
  
    // Creates local "temporary" object for holding employee data
    var commEnt = {
      comment: feedback,
      name: Nombre
    };
  
    // Uploads train data to the database
    database.ref().push(commEnt);
  
    // Logs everything to console
    
  
    alert("Thank you for the feedback");
  
    // Clears all of the text-boxes
    
    $("#comment-input").val("");
    
    $("#name-input").val("");
  });
   
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
  
    var feedback = childSnapshot.val().comment;
    
    var Nombre = childSnapshot.val().name;
    
  
   

  
     //Create the new row
    var newRow = $("<tr>").append(
     
    $("<td>").text(Nombre),
     $("<td>").text(feedback),
     
    );
 
  //  // Append the new row to the table
   $("#user-table > tbody").append(newRow);
  });

  //time for show
  // Slideshow Activity
// Students: follow the instructions below:

// TODO: Put links to our images in this image array.
var images = ["assets/wel.jpg","assets/moodpass.jpg", "assets/yugi.jpg", "assets/trainschedule.png","assets/giphy.gif"];

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;
startSlideshow;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$("#start").on("click", startSlideshow)
// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$("#stop").on("click", stopSlideshow)


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px' height='400px'>");
}

function nextImage() {

  // TODO: Increment the count by 1.
  count++;

  // TODO: Show the loading gif in the "image-holder" div.
  $("#image-holder").html("<img src='assets/loading.gif'>");

  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 3000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if(count == images.length) {
    count = 0;
  }

}


function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 3000);
}
function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);
}

// This will run the display image function as soon as the page loads.
displayImage();
