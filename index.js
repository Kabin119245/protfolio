
  document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");
    const homePageURL = "./index.html";

    logo.addEventListener("click", function () {
      window.location.href = homePageURL;
    });
  });



function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
}

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter>4) {
    counter = 1;
  }
},5000);
