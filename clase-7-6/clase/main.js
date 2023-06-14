window.onload = () =>{
//Crear ELEMENTO formulario 
const form = document.createElement("form");
form.method="POST";
form.setAttribute("action","https://example.com/form.php");
form.name="datos_personales";
document.body.appendChild(form);

const nombre = document.createElement('input');
nombre.type = "text"
nombre.setAttribute('value','');
nombre.name = "nombre"
form.appendChild(nombre)

const contraseña = document.createElement('input');
contraseña.type='password';
contraseña.name='contraseña';
contraseña.setAttribute('value','')
form.appendChild(contraseña)

const enviar = document.createElement('input');
contraseña.type='submit';
contraseña.name='enviar';
contraseña.setAttribute('value','')
form.appendChild(enviar)


const form2 = document.createElement("form");
form2.method="GET";
form2.action="https://example.com/form.php";
form2.name="hola"
document.body.appendChild(form2);



}