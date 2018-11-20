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


function a()
{
	$("a").style.borderRightColor='rgb(235, 230, 170)';
}

function b()
{
	$("b").style.display='none';
}

function c()
{
	$("c").style.position='fixed'
}

function d()
{
	$("d").style.width='30%'
}

function e()
{
	$("e").style.borderColor='skyblue'
}

function f()
{
	$("f").style.backgroundColor='white'
}

function g()
{
	$("g").style.listStyleType='circle'
}
