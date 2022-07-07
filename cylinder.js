function show(){
	const r = document.getElementById('radius').value;
	const h = document.getElementById('height').value;
	
	const s = 2* 3.14* parseInt(r)*parseInt(h) + 2 * 3.14 * parseInt(r)*parseInt(r);
	const j = 3.14 * parseInt(r)* parseInt(r)* parseInt(h);
	
	console.log('Area of Cylinder = '+s);
	console.log('volumne of Cylinder = '+j);
}