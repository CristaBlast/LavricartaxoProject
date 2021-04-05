/* */
function slideShow()
{
    var num = 1;
    setInterval(() => 
    {
        localStorage.clear();
        if(num == 5)
        {
            num = 1;
        }
        else
        {
            num++;
        }
        document.getElementById("slideshowIMG").src = "Images/slideshow/" + num + ".jpg";    
    },3000);    
}

/* */

function fuck() {
    document.getElementById("start").focus();
}