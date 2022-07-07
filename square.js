function calculate(){
	const s = document.getElementById('side').value;
	const z = parseInt(s)* parseInt(s);
	const q = 4* parseInt(s);
	
	console.log('Area of Square = '+z);
	console.log('Perimetr of Square = '+q);
}