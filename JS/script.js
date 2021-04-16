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

function sidebuttonR()
{
    document.getElementsByClassName("nav").style.visibility = "visible";
    document.getElementsByClassName("leftBtn").style.visibility = "visible";
    document.getElementsByClassName("rightBtn").style.visibility = "hidden";
}

function sidebuttonL()
{
    document.getElementsByClassName("nav").style.visibility = "hidden";
    document.getElementsByClassName("leftBtn").style.visibility = "hidden";
    document.getElementsByClassName("rightBtn").style.visibility = "visible";
}