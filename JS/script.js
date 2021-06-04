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
  for (let a = 1; a <= 7; a++) {
    document.getElementById("op" + a).style.display = "block";
  }
}

function topButtonC() {
  document.getElementById("menuClose").style.visibility = "hidden";
  document.getElementById("menuBars").style.visibility = "visible";
  document.getElementById("nav").style.display = "none";
  for (let a = 1; a <= 7; a++) {
    document.getElementById("op" + a).style.display = "block";
  }
}

function resize() {
  if (window.innerWidth == 500) {
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
    } 
    else 
    {
      document.getElementById("navScrollD").style.top = "-165px";
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


//document.getElementById("nav").position = "fixed";
// document.getElementById("nav").marginTop = "-15%";
// document.getElementById("navMenuScrollD").marginTop = "15%";
// document.getElementById("iconMenu").marginTop = "15%";
// document.getElementById("nav").position = "initial";
// document.getElementById("nav").marginTop = "0%";
// document.getElementById("navMenuScrollD").marginTop = "0%";
// document.getElementById("iconMenu").marginTop = "0%";