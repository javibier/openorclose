
var time = new Date() .getHours();

var message;


var openOrClosedJS = document.getElementById ("openOrClosed");



if (time &lt; 11 || time &gt; 21)
{
	message = "Closed";
}
else
{
	message = "Open";
}

openorClosedJS.innertext = message;