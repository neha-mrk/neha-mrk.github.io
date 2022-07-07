function calculator(){
	console.log('Hello Calculator');
	const a = document.getElementById('t1').value;
	const b = document.getElementById('t2').value;
	const c = document.getElementById('t3').value
	
	let x = document.getElementById('t3').value;
	try{
		if(x== "") throw "empty";
	}catch(err){
		console.log('Please Enter Rate of Interest');
	}
	
	const sum = parseInt(a)* parseInt(b) * parseInt(c) /100;
	
	document.getElementById('t4').value = sum;
	
}