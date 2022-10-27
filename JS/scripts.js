function hamburger() {
    var i = document.getElementById("topNavbar");
    if (i.className === "navbar") {
      i.className += " responsive";
    } 
    else {
      i.className = "navbar";
    }
}
