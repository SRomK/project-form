window.onload = function() {};

const myForm = document.querySelector("#myForm");


myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (document.getElementById(but_Check).checked) {
        document.getElementById(if_Check).style.display = 'block';
    }
    else document.getElementById(if_Check).style.display = 'none';
    console.log("El formulario ha sido enviado");
})

const myformDom = document.querySelector("#myForm");
/*myformDom.innerHTML = clickButtonCancel();*/

const clickButton = () => alert('Gracias!');
const clickDom = document.querySelector("#clickButton");
clickDom.innerHTML = clickButton();

const clickButtonCancel = () => alert('¿Estas seguro de que quieres cancelar?');  
const clickcancelDom = document.querySelector("#clickButtonCancel");
clickcancelDom.innerHTML = clickButtonCancel();


    
    