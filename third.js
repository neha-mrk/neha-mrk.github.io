function sort(){
	var c = document.getElementById('box1').value;
	var d = document.getElementById('box2').value;
	console.log(c.length);
	console.log(d.length);
	
	if(d.length > c.length){
		document.getElementById('box1').value = d;
		document.getElementById('box2').value = c;
		console.log('bigger name length = '+d);
	}	
}

function ascsort(){
		var d1 = document.getElementById('box1').value;
		var d2 = document.getElementById('box2').value;
		console.log(d1.length);
		console.log(d2.length);
		if(d1.length > d2.length){
			document.getElementById('box1').value = d2;
			document.getElementById('box2').value = d1;
		 }
		
}

