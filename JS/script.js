var myIndex = 0;   
function slideshow() 
{
    var i;       
    var x = document.getElementsByClassName("slideshowimgs");
    for (i = 0; i < x.length; i++) 
    {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) 
    {
        myIndex = 1
    }    
    x[myIndex-1].style.display = "block";  
    setTimeout(slideshow, 2500);    
}

function openModal() {
    document.getElementById("imageView").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("imageView").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(a) {
    showSlides(slideIndex += a);
  }
  
  // Thumbnail image controls
  function currentSlide(a) {
    showSlides(slideIndex = a);
  }
  
function showSlides(a) {
  var b;
  var slides = document.getElementsByClassName("mySlides");
  if (a > slides.length) {slideIndex = 1}
  if (a < 1) {slideIndex = slides.length}
  for (b = 0; b < slides.length; b++) 
  {
    slides[b].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// function brandPause()
// {
//   // document.getElementsByClassName("marcass").style.WebkitAnimation = "scroll 0s infinite linear";
//   // document.getElementsByClassName("marcas").style.WebkitAnimation = "scroll 0s infinite linear";
//   document.getElementsByClassName("nav").style.backgroundColor = "red";
//   document.getElementsByClassName(".header").style.backgroundColor = "red";
// }

// function brandUnpause()
// {
//   // document.getElementsByClassName("marcass").style.WebkitAnimation = "scroll 40s infinite linear";
//   // document.getElementsByClassName("marcas").style.WebkitAnimation = "scroll 40s infinite linear";
//   document.getElementsByClassName("nav").style.backgroundColor = "blue";
//   document.getElementsByClassName(".header").style.backgroundColor = "red";
// }

function sidebuttonR()
{
  document.getElementById("sideBtnRight").style.visibility = "hidden";
  document.getElementById("sideBtnLeft").style.visibility = "visible";
  document.getElementById("nav").style.visibility = "visible";
}

function sidebuttonL()
{
  document.getElementById("sideBtnLeft").style.visibility = "hidden";
  document.getElementById("sideBtnRight").style.visibility = "visible";
  document.getElementById("nav").style.visibility = "hidden";
}