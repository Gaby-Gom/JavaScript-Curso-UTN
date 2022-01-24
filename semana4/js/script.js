
//Aplicar fondo
document.body.style.backgroundColor='#fcf79f';


//Cambiar todos los parrafos
var parrafoArray=document.getElementsByTagName('p')


for(var i=0; i<parrafoArray.length; i++)
{
var parrafo=parrafoArray[i]
parrafo.style.color='#0ca001'
}

//cambiar destacado
var destacado=document.getElementById('destacado')
destacado.style.fontSize='24px'



//cambiar los H2//
var tituloArray=document.getElementsByTagName('h2')


for(var i=0; i<tituloArray.length; i++)
{
var titulo=tituloArray[i]
titulo.style.fontFamily='arial'
}

//crear un vinculo///

var btn=document.createElement('a')
var text_btn=document.createTextNode('ir a Lorem')
btn.appendChild(text_btn)
btn.setAttribute('href', 'https://www.lipsum.com')
btn.setAttribute('target','new')

tituloArray[0].appendChild(btn)



