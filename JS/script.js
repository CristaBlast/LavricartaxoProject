function slideShow()
{
    var num = 1;
    setInterval(() => 
    {
    if(num == 5)
    {
        num = 1;
    }
    else
    {
        num = num + 1;
    }
    document.getElementById("slideshowIMG").src = "Images/Slideshowtestimg" + num + ".jpg";
    },3000);
}