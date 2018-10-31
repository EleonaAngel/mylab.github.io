function $() 
{
var elements = new Array();
for (var i = 0; i < arguments.length; i++)
{var element = arguments[i];
if (typeof element == 'string')
element = document.getElementById(element);
if (arguments.length == 1)
return element;
elements.push(element);
}
return elements;}

function check()
{	var str = new String(document.getElementById('in').value);
	var mass1 = str.split('(');
	var mass2 = str.split(')');
	var s = mass1[0];
	var f = mass2[mass2.length-1];
	var m1 = s.split(')');
	var m2 = f.split('(');
	if (mass1.length==mass2.length && m1.length <= 1 && m2.length <= 1) 
	{
		$('result').value='O`kay';
	}
	else
	{
		$('result').value='Error';
	}
}