
var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J',
             'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];

var num=parseInt(prompt('ingrese un número entre 0 y 25:'));


        if (num < 0 ||  num>25){
          alert("Número no es válido, fuera de juego")}
            
        else {  
          var letraI=prompt("Ingrese una letra: ").toUpperCase()
          
             var calculada = letras[num]
            // var calculada = letras[num%26]
                   if( letraI == calculada ) {
                    document.body.style.backgroundColor='#ffffff'
                    var mostrar=document.getElementById('gano').style.display='block'  
                             
                       }
                 else {
                                         
                     document.body.style.backgroundColor='#000000'
                     var mostrar=document.getElementById('perdio').style.display='block'
            
                       }
              }

             /* let ultimo = letras[letras.length-1]
              alert(ultimo)*/