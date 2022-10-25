// CARGA DE PRODUCTOS

function cargaProd(card){
    fetch("js/products.json")
    .then(respuesta => respuesta.json())
    .then(producto =>    
        producto.forEach(element => {
            card.innerHTML+=    `<section id="container">
                                <div id="card" class="card text-center" style="width:18.5rem">
                                <img src="${element.img}" class="card-img-top" alt="${element.name}">
                                <div class="card-body ">
                                <h5 class="card-title">"${element.name}"</h5>
                                <p>${element.descripcion}</p>
                                <p class="card-text">Precio Lista contado <br>
                                <strong>${element.precioLista}</strong> <br>
                                Oferta pago c/débito o efectivo <br>
                                <strong class="red">${element.precioFt}</strong></p>
                                <a href="#" class="btn btn-primary">AGREGAR AL CARRITO</a>
                                </section>`
            
        }))
}

cargaProd(card)


