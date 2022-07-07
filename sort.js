function show(){
	var c = document.getElementById('box1').value;
	var d = document.getElementById('box2').value;
	console.log(c.length);
	console.log(d.length);
	
	if(d.length > c.length){
		document.getElementById('box1').value = d;
		document.getElementById('box2').value = c;
		//console.log('bigger name length = '+d);
	}	
}

function ascsort(){
		var a = document.getElementById('box1').value;
		var b = document.getElementById('box2').value;
		console.log(a.length);
		console.log(b.length);
		if(a.length > b.length){
			document.getElementById('box1').value = b;
			document.getElementById('box2').value = a;
			
		 }
		
}

