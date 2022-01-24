var form = document.getElementById('form')
var usuario = document.getElementById('username')
var email = document.getElementById('email')
var password = document.getElementById('password')
var password2 = document.getElementById('password2')
var entrar = false

form.addEventListener('submit',function (e) {
	e.preventDefault()
	
	
	 checkInputs()
	
		
});



//////////////////////////////////////////////////////



function checkInputs() {
	// aca veo q no esten con espacios
	var usuarioValue = usuario.value.trim()
	var emailValue = email.value.trim()
	var passwordValue = password.value.trim()
	var password2Value = password2.value.trim()
	
	
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'No puede dejar el usuario en blanco')
        entrar = true

     } else if (!isName(usuarioValue)) {
		setErrorFor(usuario, 'El usuario debe tener entre 4 y 16 caracteres')
    

	} else {
        setSuccessFor(usuario)
	}
    
	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco')
		entrar = true

	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido')
      

	} else {
		setSuccessFor(email)
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Contraseña no ingresada')
		entrar = true

	} else {
		setSuccessFor(password)
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Contraseña no ingresada')
        entrar = true
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Contraseña no coinciden')
		entrar =true
       

	} else{
		setSuccessFor(password2);
	}
//////////////////////////////////////////////////////
if(entrar===true){

	//alert(entrar)
	setTimeout(() => {
		(window.location="evaluacion7_Gomez.html");
	}, 1000);

}else if(entrar===false){
	//alert(entrar)
	setTimeout(() => {
		(window.location="css/index.html");
	}, 1000);

}

}
	/////////////////////////////////////////////


function setErrorFor(input, message) {
	const formControl = input.parentElement
	const small = formControl.querySelector('small')
	formControl.className = 'form-control error'
	small.innerText = message
}

function setSuccessFor(input) {
	const formControl = input.parentElement
	formControl.className = 'form-control success'
	
}

///////////////////////////////////////////////////

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isName(usuario) {
   return /^[a-zA-Z0-9\_\-]{4,16}$/.test(usuario);// Letras, numeros, guion y guion_bajo
}

