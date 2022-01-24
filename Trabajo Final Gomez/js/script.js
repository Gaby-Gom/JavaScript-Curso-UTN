
//sustituir la letra
String.prototype.replaceAt=function(index, character) { return this.substr(0, index) 
+ character + this.substr(index+character.length); } 


const palabras=[ 'curso','dinosaurio','mesa', 'elefante'];
const palabra=palabras[Math.floor(Math.random()*palabras.length)];
let palabraConGuiones=palabra.replace(/./g,"_ ");
//alert(palabra + " - " + palabraConGuiones )

let contadorF=0;

document.querySelector('#output').innerHTML=palabraConGuiones;

document.querySelector('#calcular').addEventListener('click',()=>{
    const letra=document.querySelector('#letra').value;
    let fallado=true;
    // alert(palabra)
    for(const i in palabra){
        if(letra==palabra[i]){
           // alert("existo")
           palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);// * 2 por _ tiene un espacio tambien
        fallado=false;
        }
    }

    if(fallado){
        contadorF++;
       
        if(contadorF==1){
            document.querySelector('#ahorcado2').style.display = 'block';
            document.querySelector('#ahorcado1').style.display = 'none';

        }else if(contadorF==2){
            document.querySelector('#ahorcado3').style.display = 'block';
            document.querySelector('#ahorcado2').style.display = 'none'; 

        }else if(contadorF==3){
            document.querySelector('#ahorcado4').style.display = 'block';
            document.querySelector('#ahorcado3').style.display = 'none'; 

        }else if(contadorF==4){
            document.querySelector('#ahorcado5').style.display = 'block';
            document.querySelector('#ahorcado4').style.display = 'none'; 

        }
    
        
        if(contadorF==4){
           // alert("perdiste")
            Swal.fire({
                title:"Perdiste!!",
                icon:'error',
               
            });
        }

    }else{
        if(palabraConGuiones.indexOf('_')<0){
           // alert("Ganaste");
            Swal.fire({
                title:"Ganaste!!",
                icon:'success',
            });
            let button = document.querySelector("#calcular");
            button.disabled = true;
        }
    }
    document.querySelector('#output').innerHTML=palabraConGuiones;
    document.querySelector('#letra').value='';
    document.querySelector('#letra').focus;
 
});