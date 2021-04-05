conte = document.getElementById("weatherWidgetTablet");
if (conte) 
{
    conte.style.cssText = "width: 661px; color: #000000; background-color:transparent; border:1px solid transparent; margin: 0 auto; font-family: Arial;";
    elem = document.createElement("iframe");
    elem.style.cssText = "width:661px; color:#000000; height:55px;";
    elem.id = "1583aca4efd2726e2ed8bae0805e32f3";
    elem.src = "https://www.theweather.com/getwid/1583aca4efd2726e2ed8bae0805e32f3";
    elem.frameBorder = 0;
    elem.allowTransparency = true;
    elem.scrolling = "no";
    elem.name = "flipe";
    conte.appendChild(elem);
}