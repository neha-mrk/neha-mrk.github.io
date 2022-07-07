function areaPerimeterCircle(){
	
	const r = document.getElementById('radius').value;
	const perimeter = 2 * 3.14 * r;
	const area = 3.14 *r *r ;
	
	
	console.log('Area of the Circle is = '+area);
	console.log('Perimeter of the circle is = '+perimeter)
}