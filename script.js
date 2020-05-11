
var time = new Date() .getHours();

var message;


var openorClosedJS = document.getElementById ("openorClosed");



if (time < 11 || > time > 21)
{
	message = "Closed";
}
else
{
	message = "Open";
}

openorClosedJS.innertext = message;