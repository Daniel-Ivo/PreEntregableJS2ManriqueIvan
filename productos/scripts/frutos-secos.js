const productos = document.querySelectorAll('.grid-item');
const carritoBtn = document.getElementById('carrito');
const carritoContainer = document.getElementById('carrito-container');
const carritoLista = document.getElementById('carrito-lista');
const   
 total = document.getElementById('total');

let carrito = [];

carritoBtn.addEventListener('click', () => {
  carritoContainer.style.display = 'block';
  ActualizarCarrito();
});

productos.forEach(producto => {
  const botonComprar = document.createElement('button');
  botonComprar.textContent = 'Agregar al carrito';
  producto.appendChild(botonComprar);

  botonComprar.addEventListener('click', () => {
    const nombreProducto = producto.querySelector('p').textContent;
    const precio = 3500;
    carrito.push({ nombre: nombreProducto, precio });
    ActualizarCarrito();
  });
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
}




