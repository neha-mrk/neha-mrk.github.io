function Comp(){
	
	var r = document.getElementById('interest').value;
	var t = document.getElementById('t').value;
	var p = document.getElementById('pri').value;
	
	var ci = p*(Math.pow((1+r/100),t));
	console.log('Princal ='+p);
	console.log('Rate of Interest = '+r);
	console.log('Times = '+t);
	console.log('Compound Interest = '+ci);
}