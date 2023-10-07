
let enCarrito = localStorage.getItem("enCarrito")
enCarrito = JSON.parse(enCarrito)
const vacio = document.getElementById("carritoVacio")
const divArticulos = document.getElementById("carritoArt")
const numeroCar = document.getElementById("contador")

function CargarCarrito()
{
if (enCarrito && enCarrito.length >0 ){ 
vacio.classList.add("none");

enCarrito.forEach( art =>{
      const div = document.createElement ('div')
      div.classList.add('carrito-articulo')
      div.innerHTML = `
    
      <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
      <div class="col-md-4">
        <img src="${art.imagen}" class="img-fluid rounded-start imgcarrito" alt="${art.titulo}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${art.titulo}</h5>
          <p class="card-text">$${art.precio}</p>
          <p class="card-text"><small class="text-body-secondary"> <h5>Cantidad</h5>
          <p>${art.cantidad}</p></small></p>
          <h5>Precio Total</h5>
          <p>$${art.precio * art.cantidad}</p> 
          <button class="quitar"  type="button" id="${art.id} "> <i class="bi bi-trash3"></i> </button>
        </div>
      </div>
    </div>
  </div>
 `;
   
    divArticulos.appendChild(div) 
  
 }) 
 botonesEliminar()
} else{
   vacio.classList.add("carrito-vacio")

}
 
}
CargarCarrito()


function contadorMas (){
   let contadorActual = enCarrito.reduce((acumulado,art)=> acumulado + art.cantidad, 0)
   numeroCar.innerHTML = contadorActual;
 }
 contadorMas ()


  
 
  function botonesEliminar(){
  botonEliminar = document.querySelectorAll(".quitar")
  botonEliminar.forEach(boton => {
  boton.addEventListener("click", deletteCarr);
})
 }

 function deletteCarr(e) {
  
     
      const delBoton = e.currentTarget.id;
      const index = enCarrito.findIndex(art => art.id === delBoton);
      enCarrito.splice(index, 1);
      CargarCarrito() 
      location.reload()
      localStorage.setItem("enCarrito", JSON.stringify(enCarrito))
   }


    
 