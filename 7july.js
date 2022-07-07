function wish(){
	console.log('Hello Mirketa');
	 const a = document.getElementById('n').value;
	 const b = 2 * a;
	 console.log(b);
}
function calculate(){
	// document.getElementById('n').value =" " ;
	var w = document.getElementById('n').value;
	var q = 2* w ;
    document.getElementById('result').textContent = 'Result is = ' +q;
} 