let precio = 400000

let precioSpan = document.querySelector(".precio-inicial");
      precioSpan.innerHTML = precio

let cantidad = 0;

 // Función que se ejecuta al hacer clic en el botón
 function sumarNumero() {
    cantidad++;
    actualizarContador();
  }

// Asignar el manejador de eventos al botón
document.getElementById('sumar').addEventListener('click', sumarNumero);
// Función para actualizar el contenido del contador
function actualizarContador() {
    document.getElementById('cantidad').innerText = cantidad;

    sumarValor = precio * cantidad;

    nuevoValor = document.querySelector(".valor-total");
    nuevoValor.innerHTML = "$ " + sumarValor;
    console.log(sumarValor);

}

function restarNumero(){
    if(cantidad>0){
        cantidad--;
        disminuirContador();
    }
}


// Asignar el manejador de eventos al botón
document.getElementById('restar').addEventListener('click', restarNumero);
// Función para actualizar el contenido del contador
function disminuirContador() {
    document.getElementById('cantidad').innerText = cantidad;

    sumarValor = precio * cantidad;

    nuevoValor = document.querySelector(".valor-total");
    nuevoValor.innerHTML = "$ " + sumarValor;
    console.log(sumarValor);

}


























