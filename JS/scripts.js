// hamburger icon function
function hamburger() {
  var i = document.getElementById("topNavbar");
  // adds reponsive to reponsive to navbar class name to expand menu
  if (i.className === "navbar") {
    i.className += " responsive";
  }
  else {
    i.className = "navbar";
  }
}

// Form submit function
function form_submit() {
  // Alerts Form successfully went
  alert("Form Successfully Sent.");
  return true;
}

// Register validation fuction
function register_validation() {
  // get value from input box of password and confirmed password
  var pw1 = document.querySelector("#pw");
  var pw2 = document.querySelector("#pw-repeat");

  // Validate password algorithm
  if (pw1.value.length >= 6 && pw2.value.length >= 6) {
    if (pw1.value == pw2.value) {
      alert("SUCCESSFULLY REGISTERED"); // Alert successfully registered if values match
      return true;
    }
    else { // if not match alert password not match
      alert("ERROR: PASSWORD AND CONFIRMED PASSWORD NOT MATCHED");
      return false;
    }
  }
  else {
    alert("ERROR: USERNAME OR PASSWORD IS LESSER THAN 6 CHARACTERS");
    return false;
  }
}

// login in validation function
function validation() {
  // get input boxes
  var input_text = document.querySelector("#input_text");
  var input_password = document.querySelector("#input_password");

  // check if password and username is 6 characters and above
  if (input_text.value.length <= 5 || input_password.value.length <= 5) {
    alert("INCORRECT USERNAME OR PASSWORD "); // alert error if less than 6
    return false;
  }
  else {
    alert("LOGIN SUCCESSFUL") // alert successful if more than or euqal to 6
    return true;
  }
}

// get all input boxes and login button
var input_fields = document.querySelectorAll(".input");
var login_btn = document.querySelector("#login_btn");

// for all input boxes: 
input_fields.forEach(function (input_item) {
  input_item.addEventListener("input", function () {
    // if value in input box is more than or equal to 4 characters 
    if (input_item.value.length > 3) {
      login_btn.disabled = false;
      login_btn.className = "btn enabled" //enable btn and use btn enabled styling
    }
  })
})
