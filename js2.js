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



function a1()
{
	$("b3").style.backgroundColor='rgb(0, 0, 0)';
}

function b1()
{
	$("b3").style.backgroundColor='rgb(135, 206, 250)';
}

function c1()
{
	$("b3").style.backgroundColor='rgb(147, 112, 219)';
}

function d1()
{
	$("b3").style.backgroundColor='rgb(80, 200, 120)';
}

function e1()
{
	$("b3").style.backgroundColor='rgb(64, 224, 208)';
}



function f1()
{
	$("txt").value='ПРИВЕТ, МИР!';
}	