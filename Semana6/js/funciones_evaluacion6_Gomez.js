
function limpiar(){
  document.getElementById('miForm').reset();
}
function calcular(){

   var sub=parseFloat(document.getElementById('precio').value);
   if (document.getElementById('precio').value == '')
   {
     alert('Debe ingresar un número')
     limpiar()
   }
   if(sub<=0){
    alert('Número debe ser mayor a 0')

   }
   else
   {
       var iva=(sub*21)/100
       var total=sub+iva
       document.getElementById('iva').value=iva
       document.getElementById('precioTotal').value=total
   }
 

}