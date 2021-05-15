let input= document.getElementById("email");
input.value="a329675@uach.mx";


let button = document.getElementById("show");
let button2=document.getElementById("hide");

function mostrarPaswword(){
    let password = document.getElementById("pass");
    password.type='text';
}

function ocultarPaswword(){
    let password = document.getElementById("pass");
    password.type='password';
}

button.onclick =mostrarPaswword;
button2.onclick =ocultarPaswword;