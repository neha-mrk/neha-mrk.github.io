function print(){

	console.log('Hello Mirketa');
}	

function wish(){
	console.log('Good Morning');
}

function display(){
	var name = document.getElementById ('first').value;
	console.log('Name = '+name);
}

function clone(){
	var s = document.getElementById ('first').value;
	document.getElementById ('second').value = s;
}

function abc(){
	document.getElementById('first').value = " ";
	document.getElementById('second').value = " ";
}

function reverse(){
	var x = document.getElementById('second').value;
	var y = document.getElementById('first').value;
	document.getElementById('first').value = x;
	document.getElementById('second').value = y;
}
