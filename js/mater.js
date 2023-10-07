
let articulos = []; 

fetch("datos/descripcion.json")
    .then(respuesta => respuesta.json())
    .then(data => {
        articulos = data;
        const productos = document.querySelector ('#productos') 
        let titulo = document.querySelector(".titulocategoria")
        
  function productosAgregar(seleccionados){
    productos.innerHTML = ""
    
    seleccionados.forEach(art => { 
        const div = document.createElement ('div')
        div.classList.add('articulos')
        div.innerHTML = `
        <div class="articulos">
        <div class="card" style="width: 17rem;">
        <img src="${art.imagen}" class="card-img-top" alt="${art.titulo}">
        <div class="card-body">
        <h3>${art.titulo}</h3>  
        <p class="card-text">$${art.precio}</p>
          <div class="botones">
             <a title="ver descripcion del articulo" class= "descripcion" id="${art.id}" type="button" href="descripcion.html?codigo=${art.codigo}">Descripción</a>
             <i title="Agregar al carrito" class="bi bi-bag-heart agregar"id= "${art.id}"></i> 
             </div>
        </div>
      </div> 
        `;
         productos.append(div);
         //titulo.innerHTML = art.categoria
         
        }); 
}

productosAgregar(articulos)

let botonCategoria = document.querySelectorAll(".categoria")

botonCategoria.forEach( botonC =>{
    botonC.addEventListener("click",(e)=>{
      
    const artSelec = articulos.filter( art => art.categoria === e.currentTarget.id )
    const titulo = articulos.find (art => art.categoria === e.currentTarget.id)
    //titulo.innertext = artSelec.categoria
    console.log();
    productosAgregar(artSelec)
  })
 })
  
  const describirLocalS = JSON.parse(localStorage.getItem("ParaDescribir"))
  let botonDescripcion = document.querySelectorAll(".descripcion")

  botonDescripcion.forEach(boton => {
  boton.addEventListener("click",agregarDescripcion)
  })

  function agregarDescripcion (e){
  let ParaDescribir = []
  const id = e.currentTarget.id;
  const ArtDescripto = articulos.find( art => art.id === id);
  ParaDescribir.push(ArtDescripto);
  localStorage.setItem("ParaDescribir", JSON.stringify(ParaDescribir))
  }

 
  let botonAgregar = document.querySelectorAll(".agregar");
  function botonesAgregarCargados(){
  botonAgregar.forEach(boton => {
  boton.addEventListener("click", addCarrito);
})  
}
botonesAgregarCargados()


const numeroCar = document.querySelector("#contador")
let enCarrito; 
const enCarritoLocalS = JSON.parse(localStorage.getItem("enCarrito"))

if (enCarritoLocalS){
  enCarrito = enCarritoLocalS;
  contadorMas ()
}else {
  enCarrito =[]

}
 
function addCarrito(e){
  const id = e.currentTarget.id;
  
  const ArtAdd = articulos.find( art => art.id === id);
  Swal.fire({
    title: 'Nuevo articulo agregado al carrito!!',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
 if(enCarrito.some(art =>art.id === id)){
   const index = enCarrito.findIndex(art => art.id === id); 
   enCarrito[index].cantidad++;
   console.log(enCarrito);
   

 } else{
  ArtAdd.cantidad = 1
  enCarrito.push(ArtAdd);
  console.log(enCarrito);
  }
  //function contadorMas (){
    //contador = contador + 1
    //numeroCar.innerHTML = contador;
 // }
  contadorMas ()
  
  localStorage.setItem("enCarrito", JSON.stringify(enCarrito))

}

  function contadorMas (){
    let contadorActual = enCarrito.reduce((acumulado,art)=> acumulado + art.cantidad, 0)
    numeroCar.innerHTML = contadorActual;
  }
        
        
})
 .catch((error)=>{
      console.log('Ufff ha ocurrido un error '+error )
  })
    






 