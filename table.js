function f1(){
	
	var a = 0;
	var c = document.getElementById('t1').value; // which table
	var d = document.getElementById('t2').value; // num of rows
	var str = '<table class="table table-striped">';
	   
		for(a= 1; a<=parseInt(d); a++){
	
		str =str+ '<tr><td>'+ c + '</td><td>' + 'X' + '</td><td>' + a +'</td><td>'+ '=' +'</td><td>' + (c*a)+ '</td></tr>';
		
	}
	   str = str + '</table>';
	
	
	
	document.getElementById('s1').innerHTML=str ;
	
	
}