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

/*s*/
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
/*/s*/

  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function openImageView()
{
    document.getElementById("myModal").style.display = "block";
}

function closeImageView()
{
    document.getElementById("myModal").style.display = "none";
}

function currentImage(n)
{
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}




// function sidebuttonR()
// {
//     document.getElementsByClassName("nav").style.visibility = "visible";
//     document.getElementsByClassName("leftBtn").style.visibility = "visible";
//     document.getElementsByClassName("rightBtn").style.visibility = "hidden";
// }

// function sidebuttonL()
// {
//     document.getElementsByClassName("nav").style.visibility = "hidden";
//     document.getElementsByClassName("leftBtn").style.visibility = "hidden";
//     document.getElementsByClassName("rightBtn").style.visibility = "visible";
// }