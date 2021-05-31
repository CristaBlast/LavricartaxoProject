conte = document.getElementById("weatherWidgetPhone");
if (conte) {
    conte.style.cssText = "width: 176px; color: #000000; background-color:transparent; border:1px solid transparent; margin: 0 auto; font-family: Arial;";
    elem = document.createElement("iframe");
    elem.style.cssText = "width:176px; color:#000000; height:110px;";
    elem.id = "df860b53b57ff392cfb906fe1f8a9fd2";
    elem.src = "https://www.theweather.com/getwid/df860b53b57ff392cfb906fe1f8a9fd2";
    elem.frameBorder = 0;
    elem.allowTransparency = true;
    elem.scrolling = "no";
    elem.name = "flipe";
    conte.appendChild(elem);
}