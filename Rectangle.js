function solve(){
   const l = document.getElementById('len').value;
   const w = document.getElementById('width').value;
   
   const a = parseInt(l)* parseInt(w);
   const b = 2 * parseInt(l) + parseInt(w);
   
   console.log('Area of Rectangle = '+a );
   console.log('Perimeter of Rectangle = '+b);
}