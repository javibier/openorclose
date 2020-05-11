document.getElementById ("openorClosed");

var openorClosedJS = document.getElementById ("openorClosed");

var time = new Date () .getHours 

var message;

if (time < 11 || > time > 21)
{
	message = "Closed"
}
else
{
	message = "Open"
}
