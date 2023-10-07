
let ParaDescribir = localStorage.getItem("ParaDescribir")
ParaDescribir = JSON.parse(ParaDescribir) 

         let codigo = location.search;
         let codigoProducto = new URLSearchParams(codigo)
         let codigoSeleccionado =codigoProducto.get("codigo")
         const descripcionHtml = document.querySelector(".tarjeta_descripcion") 

         const ArtDescripto = ParaDescribir.find( art => art.codigo);
         console.log(ArtDescripto);
            const div = document.createElement ('div')
            div.classList.add('seleccionado')
            div.innerHTML = `
            <div class="card mb-3 tarjetas" style="max-width: 540px;">
             <div class="row g-0">
              <div class="col-md-4">
               <img src="${ArtDescripto.imagen}" class="img-fluid rounded-start" alt="${ArtDescripto.titulo}">
               </div>
              <div class="col-md-8">
                 <div class="card-body">
                   <h2>${ArtDescripto.titulo}</h2>
                    <h3>$${ArtDescripto.precio}</h3>
                   <h5> Color: ${ArtDescripto.color}</h5>
                    <h5> Talles: ${ArtDescripto.talles_disponible}</h5>
                  <h5> Material:${ArtDescripto.material}</h5>
                  <a class="volver_tarjeta" href="index.html">volver</a><i class="bi bi-arrow-return-left flecha"></i>
                </div>
              </div>
                </div>
              </div>
                </div>
               `
             descripcionHtml.appendChild(div) 
let enCarrito = localStorage.getItem("enCarrito")
enCarrito = JSON.parse(enCarrito) 
const numeroCar = document.getElementById("contador")          
function contadorMas (){
let contadorActual = enCarrito.reduce((acumulado,art)=> acumulado + art.cantidad, 0)
numeroCar.innerHTML = contadorActual;
 }
 contadorMas ()



