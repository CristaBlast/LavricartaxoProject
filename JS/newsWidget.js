var scripts = document.getElementsByTagName('script');
var index = scripts.length - 1;
var myScript = scripts[index];
var queryString = myScript.src.replace(/^[^\?]+\??/,'');
var params = parseQuery( queryString );

var newScript = null;
var headID = null;
var url=document.URL;
var ndwg_widget_url = url;
var loc = url.substring(url.lastIndexOf('/')+1)
var ix = loc.lastIndexOf('?');
var ndwg_LocalIP = "news.24-7pressrelease.com";
var ndwg_RootDir = "/";
if (location.protocol == 'https:')
	var http_server = 'https://';
else
	var http_server = 'http://';

if( ix != -1 ){	loc = loc.substring(0,ix);}
Run();

	function Run()
	{
		var style = "";
		if( 'width' in params  ) {
			style = "width: " + (parseInt(params['width'])+10) + "px;";
		} 
		else
		{
			if( ! ('prid' in params) && !('showRelease' in params && params['showRelease']==1 ) ) 
			{
			}
		}
		if( params['expandheight'] == "1" || 'type' in params && params['type'] == "expand" ) 
		{
			style += "overflow:auto; padding:10px;";
		}
		else if( 'height' in params) {
			style += "overflow:auto; height: " + params['height'] + "px; padding:10px;";
		}
		else
		{
			style += "overflow:auto; padding:10px;";
		}
		style += " overflow-x: hidden;";
		var backcolor = "";
		if( 'bkgcolor' in params )
		{
			backcolor = " background-color:#"+params['bkgcolor']+";";
		}

		var randString = randomString("abcdefghijklmnopqrstuvwxyz",7);
		var containerName = "ndwgcontainer_"+randString;
		if( 'container' in params  ) {
			containerName = params['container'];
			var x = document.getElementById(containerName);
			if( x == undefined )
			{
				
			}
			x.innerHTML = "<div id='ndwgaddthis' style='"+backcolor+"'></div><div id='"+containerName+"' align='left' style='"+style+";'></div>";
		}
		else
		{
			document.write("<div style='"+backcolor+"'><div id='ndwgaddthis' style='"+backcolor+"'></div><div id='"+containerName+"' align='left' style='"+style+";'></div></div>");
		}
		
		var containerNames = Array();
		containerNames.push(containerName);
		window.nwdg_container_name = containerName;

		
		var func = InsertList;
		if( 'prid' in params || params['showRelease'] == 1 ) {
			func = InsertRelease
		}
		else {
			func = InsertList;
		}

		var tempString = containerName.toString();
		var tempString2 = queryString.toString();
		var tempFunction = function(){func(eval("'"+tempString2+"'"),eval("'"+tempString+"'"))}
		if('rude' in params)
		{
			tempFunction();
		}
		else if(window.addEventListener)
		{
			addLoadEvent( tempFunction );
		}
		else if(window.attachEvent)
		{
			addLoadEvent( tempFunction );
		}
	}
	function InsertList(queryString,containerName) 
	{
		headID = document.getElementsByTagName("head")[0];
		newScript = document.createElement("script");
		newScript.type = "text/javascript";
		newScript.src = http_server + ndwg_LocalIP + ndwg_RootDir + "news_widget_pull.php?"+queryString+"&cname="+containerName+"&loc="+loc+"&url="+escape(ndwg_widget_url)+"&callback=CallBackFunc";
		headID.appendChild(newScript);
	}
	function InsertRelease(queryString,containerName) 
	{
		headID = document.getElementsByTagName("head")[0];
		newScript = document.createElement("script");
		newScript.type = "text/javascript";
		newScript.src = http_server + ndwg_LocalIP + ndwg_RootDir + "news_widget_pull.php?callback=CallBackFunc&"+queryString+"&cname="+containerName+"&loc="+loc+"&url="+escape(url)+"&"+window.location.search.substring(1);
		headID.appendChild(newScript);
		
	}
	
	
	function InsertCSS()
	{
		try
		{
			var stl = document.getElementById("stylesheetInfo").innerHTML;
				
			var newStylesheet = document.createElement("style");
			newStylesheet.type = "text/css";
			headID.appendChild(newStylesheet);
			var def = stl;
			if (newStylesheet.styleSheet) {  
				newStylesheet.styleSheet.cssText = def;
			} else {              
				var tt1 = document.createTextNode(def);
				newStylesheet.appendChild(tt1);
			}
		}
		catch(err)
		{
		
		}
	}

	function CallBackFunc(html) {
		cleanHtml = eval(html);
		x = document.getElementById(cleanHtml.containerName);
		if( x == undefined )
		{
			x = document.getElementById("ndwgcontainer");
		}
		x.innerHTML = decodeURIComponent(cleanHtml.html);
		
		InsertCSS();
	}


	function DoStuff()
	{
		headID = document.getElementsByTagName("body")[0];
		newScript2 = document.createElement("script");
		newScript2.type = "text/javascript";
		newScript2.src = "https://s7.addthis.com/js/250/addthis_widget.js#username=xa-4c5c4c135f933235&domready=1";
		headID.appendChild(newScript2);
	}

	function DoLightbox()
	{
		headID = document.getElementsByTagName("body")[0];
		newScript3 = document.createElement("div");
		newScript3.style.backgroundColor = "#000000";
		newScript3.style.width = "110%";
		newScript3.style.height = "1000%";
		newScript3.style.opacity = 2/10;
		newScript3.style.filter = 'alpha(opacity=' + 2*10 + ')';
		newScript3.style.position = 'absolute';
		newScript3.style.top = '0';
		newScript3.style.left = '-8px';
		newScript3.style.margin = "0px";
		newScript3.zIndex = 50;
		headID.appendChild(newScript3);	
		
		newScript4 = document.createElement("div");
		var objh = parseFloat(600)/2;
		var objw = parseFloat(600)/2;
		newScript4.style.top = Math.floor(document.body.scrollTop + 100)+'px';
		newScript4.style.left = Math.floor(Math.round((document.documentElement.offsetWidth/2)+document.body.scrollLeft)-objw)+'px';
		newScript4.style.height = "600px";
		newScript4.style.width = "600px";
		newScript4.style.backgroundColor="#ffffff";
		newScript4.zIndex="51";
		newScript4.style.position = 'absolute';
		newScript4.innerHTML='<div id="ndwgaddthis" ></div><div id="ndwgcontainer_lb" style="height: 500px; overflow: auto;"></div>';
		headID.appendChild(newScript4);
		
		
		headID = document.getElementsByTagName("head")[0];
		newScript = document.createElement("script");
		newScript.type = "text/javascript";
		newScript.src = http_server + ndwg_LocalIP + ndwg_RootDir + "/widget/widget.php?callback=CallBackFunc&doc=201008021610PR_NEWS_USPR_____NY44318&p=.";
		headID.appendChild(newScript);
		  
	}

	function parseQuery ( query ) {
	   var Params = new Object ();
	   if ( ! query ) return Params; 
	   var Pairs = query.split(/[;&]/);
	   for ( var i = 0; i < Pairs.length; i++ ) {
		  var KeyVal = Pairs[i].split('=');
		  if ( ! KeyVal || KeyVal.length != 2 ) continue;
		  var key = unescape( KeyVal[0] );
		  var val = unescape( KeyVal[1] );
		  val = val.replace(/\+/g, ' ');
		  Params[key] = val;
	   }
	   return Params;
	}
	function randomString(sChrs,iLen) {
		var sRnd = '';
		for (var i=0; i<iLen; i++){
			var randomPoz = Math.floor(Math.random() * sChrs.length);
			sRnd += sChrs.substring(randomPoz,randomPoz+1);
		}
		return sRnd;
	}
	function addLoadEvent(func) {
	  var oldonload = window.onload;
	  if (typeof window.onload != 'function') {
		window.onload = func;
	  } else {
		window.onload = function() {
		  if (oldonload) {
			oldonload();
		  }
		  func();
		}
	  }
	}

	function DoNewWindow(address)
	{
		newwindow=window.open(address,'name','height=600,width=600,resizable=1');
		if (window.focus) {newwindow.focus()}
		return false;
	}


	function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}