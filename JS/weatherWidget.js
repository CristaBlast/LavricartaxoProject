conte = document.getElementById("weatherWidget");
if (conte) 
{
    conte.style.cssText = "width: 921px; color: #000000; background-color:transparent; border:1px solid transparent; margin: 0 auto; font-family: Arial;";
    elem = document.createElement("iframe");
    elem.style.cssText = "width:910px; color:#000000; height:85px;";
    elem.id = "9787f05d8cb5e9af334b37cb1fb912d4";
    elem.src = "https://www.theweather.com/getwid/9787f05d8cb5e9af334b37cb1fb912d4";
    elem.frameBorder = 0;
    elem.allowTransparency = true;
    elem.scrolling = "no";
    elem.name = "flipe";
    conte.appendChild(elem);
}