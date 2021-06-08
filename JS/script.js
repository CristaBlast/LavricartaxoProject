var myIndex = 0;
function slideshow() {
  var i;
  var x = document.getElementsByClassName("slideshowimgs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
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
  showSlides((slideIndex += a));
}

// Thumbnail image controls
function currentSlide(a) {
  showSlides((slideIndex = a));
}

function showSlides(a) {
  var b;
  var slides = document.getElementsByClassName("mySlides");
  if (a > slides.length) {
    slideIndex = 1;
  }
  if (a < 1) {
    slideIndex = slides.length;
  }
  for (b = 0; b < slides.length; b++) {
    slides[b].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function topButtonO() 
{
  if (window.innerWidth <= 500) {
    document.getElementById("menuBars").style.visibility = "hidden";
    document.getElementById("menuClose").style.visibility = "visible";
    document.getElementById("nav").style.display = "block";
    for (let a = 1; a <= 7; a++) 
    {
      document.getElementById("op" + a).style.display = "block";
    }
  }

  if (window.innerWidth == 681) {
    document.getElementById("menuBars").visibility = "hidden";
    document.getElementById("menuClose").visibility = "visible";
  }
}

function topButtonC() 
{
  if (window.innerWidth <= 500) {
    document.getElementById("menuClose").style.visibility = "hidden";
    document.getElementById("menuBars").style.visibility = "visible";
    document.getElementById("nav").style.display = "none";
    for (let a = 1; a <= 7; a++) 4
    {
      document.getElementById("op" + a).style.display = "block";
    }
  }

  if (window.innerWidth == 681) {
    document.getElementById("menuBars").visibility = "visible";
    document.getElementById("menuClose").visibility = "hidden";
  }
}

function resize() {
  if (window.innerWidth <= 500) {
    document.getElementById("nav").style.display = "none";
    for (let a = 1; a <= 7; a++) {
      document.getElementById("op" + a).style.display = "none";
    }
    document.getElementById("menuClose").style.visibility = "hidden";
    document.getElementById("menuBars").style.visibility = "visible";
  }

  if (window.innerWidth == 681) {
    document.getElementById("nav").style.display = "block";
    document.getElementById("nav").style.visibility = "visible";
    document.getElementById("menuBars").style.visibility = "hidden";
    document.getElementById("menuClose").style.visibility = "hidden";
    for (let a = 1; a <= 7; a++) {
      document.getElementById("op" + a).style.display = "inline-block";
    }
  }

  if (window.innerWidth > 681) {
    document.getElementById("nav").style.display = "block";
    document.getElementById("nav").style.visibility = "visible";
    document.getElementById("menuBars").style.visibility = "hidden";
    document.getElementById("menuClose").style.visibility = "hidden";
    for (let a = 1; a <= 7; a++) {
      document.getElementById("op" + a).style.display = "inline-block";
    }
  }
}

function scrollFunction() 
{

  if (window.innerWidth <= 500) 
  {
    if (document.body.scrollTop > 121 || document.documentElement.scrollTop > 121) 
    {
      document.getElementById("navScrollD").style.top = "0";
    } 
    else 
    {
      document.getElementById("navScrollD").style.top = "-121px";
    }
  }

  if (window.innerWidth == 681) 
  {
    if (document.body.scrollTop > 165 || document.documentElement.scrollTop > 165) 
    {
      document.getElementById("navScrollD").style.top = "0";
      document.getElementById("menuBars").style.visibility = "visible";
    } 
    else 
    {
      document.getElementById("navScrollD").style.top = "-165px";
      document.getElementById("menuBars").style.visibility = "hidden";
    }
  }

  if (window.innerWidth > 681) 
  {
    if (document.body.scrollTop > 132 || document.documentElement.scrollTop > 132) 
    {
      document.getElementById("navScrollD").style.top = "0";
    } 
    else 
    {
      document.getElementById("navScrollD").style.top = "-132px";
    }
  }
}