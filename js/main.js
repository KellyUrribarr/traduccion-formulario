
	/*traductor iniciar sesion*/
	var traductor = document.getElementById('form-signin-heading');
	traductor.innerHTML = "Por favor iniciar sesion";

	/*traductor email y password*/
	var traducir_correo = document.getElementById('inputEmail').placeholder="Correo Electronico";
	var traducir_contraseña = document.getElementById('inputPassword').placeholder="Contraseña";

	/*traductor span*/
	var span = document.getElementsByTagName('span')[0];
	span .textContent="Recordar datos";
	
	/*traductor button*/
	var span = document.getElementsByTagName('button')[0];
	span .textContent="Iniciar Sesión";