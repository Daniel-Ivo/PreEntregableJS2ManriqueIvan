const productos = document.querySelectorAll('.grid-item');
const CarritoBtn = document.getElementById('carrito');
const carritoContainer = document.getElementById('carrito-container');
const carritoLista = document.getElementById('carrito-lista');
const   
 total = document.getElementById('total');

let carrito = [];

CarritoBtn.addEventListener('click', () => {
  carritoContainer.style.display = 'block';
  ActualizarCarrito();
});

productos.forEach(producto => {
  const botonComprar = document.createElement('button');
  botonComprar.textContent = 'Agregar al carrito';
  producto.appendChild(botonComprar);


  botonComprar.addEventListener('click', () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Lo agregamos al carrito?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title:" el articulo fue agregado al carrito",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          text: "El producto no fue agregado al carrito",
          icon: "error"
        });
      }
    });
    const nombreProducto = producto.querySelector('p').textContent;
    const precio = 3500;
    carrito.push({ nombre: nombreProducto, precio });
    ActualizarCarrito();
   })
  

});

function ActualizarCarrito() {
  carritoLista.innerHTML = '';
  let totalCarrito = 0;

  carrito.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    carritoLista.appendChild(li);   

    totalCarrito += producto.precio;
  });

  total.textContent = `Total: $${totalCarrito}`;
  localStorage.setItem("carrito", JSON.stringify(carrito))
  
}

document.addEventListener("DOMContentLoaded", ()=>{
    ActualizarCarrito()
})

