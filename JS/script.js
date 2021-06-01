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

function searchBar() {
  var cg = 1;
  if (cg == 1) {
    document.getElementById("searchBar").style.visibility = "visible";
    cg = 0;
  } else {
    document.getElementById("searchBar").style.visibility = "hidden";
    cg = 1;
  }
}

function topButtonO() {
  document.getElementById("menuBars").style.visibility = "hidden";
  document.getElementById("menuClose").style.visibility = "visible";
  document.getElementById("nav").style.display = "block";
  // document.getElementById("nav").style.height = "auto"; do animation :3 XD
  for (let a = 1; a <= 7; a++) {
    document.getElementById("op" + a).style.display = "block";
  }
}

function topButtonC() {
  document.getElementById("menuClose").style.visibility = "hidden";
  document.getElementById("menuBars").style.visibility = "visible";
  document.getElementById("nav").style.display = "none";
  // document.getElementById("nav").style.height = "0%"; do animation :3 XD
  for (let a = 1; a <= 7; a++) {
    document.getElementById("op" + a).style.display = "block";
  }
}

function resize() {
  // alert(window.innerWidth);
  if (window.innerWidth == 500) {
    document.getElementById("nav").style.display = "none";
    for (let a = 1; a <= 7; a++) {
      document.getElementById("op" + a).style.display = "none";
    }
    document.getElementById("menuClose").style.visibility = "hidden";
    document.getElementById("menuBars").style.visibility = "visible";
    if(document.getElementById("searchMG").style.display == "none")
    {
    document.getElementById("search").style.width = "55%";
    }
  }

  if (window.innerWidth == 681) {
    document.getElementById("nav").style.display = "block";
    document.getElementById("nav").style.visibility = "visible";
    for (let a = 1; a <= 7; a++) {
      document.getElementById("op" + a).style.display = "inline-block";
    }
    if(document.getElementById("searchMG").style.display == "none")
    {
    document.getElementById("search").style.width = "40%";
    }
  }

  if (window.innerWidth > 681) {
    document.getElementById("nav").style.display = "block";
    document.getElementById("nav").style.visibility = "visible";
    for (let a = 1; a <= 7; a++) {
      document.getElementById("op" + a).style.display = "inline-block";
    }
    if(document.getElementById("searchMG").style.display == "none")
    {
      document.getElementById("search").style.width = "22%";
    }
  }
}

function openSearchBar()
{
  document.getElementById("closeSearch").style.display = "block";
  document.getElementById("searchBar").style.display = "block";
  document.getElementById("searchMGSearch").style.display = "block";
  document.getElementById("searchMG").style.display = "none";
  if (window.innerWidth <= 500) {
    document.getElementById("search").style.width = "55%";
  }

  if (window.innerWidth == 681) {
    document.getElementById("search").style.width = "40%";
  }

  if (window.innerWidth > 681) {
    document.getElementById("search").style.width = "22%";
  }
}

function closeSearchBar()
{
  document.getElementById("closeSearch").style.display = "none";
  document.getElementById("searchBar").style.display = "none";
  document.getElementById("searchMGSearch").style.display = "none";
  document.getElementById("searchMG").style.display = "block";
  document.getElementById("search").style.width = "0%";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) 
  {
    document.getElementById("navScrollD").style.top = "0";
  } 

  else 
  {
    document.getElementById("navScrollD").style.top = "-50px";
  }
}