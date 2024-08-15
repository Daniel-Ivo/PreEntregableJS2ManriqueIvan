
const buscarInput = document.querySelector('.form-control');
const buscarButton = document.querySelector('.btn');
const productos = [{ name: 'Condimentos',},{ name: 'Escabeches'},{ name: 'Frutos Secos'}, { name: 'Recetas',}];
buscarButton.addEventListener('click', (event) => {
  event.preventDefault();
  const buscar = buscarInput.value.toLowerCase();
  const resultado = productos.filter(producto => producto.toLowerCase().includes(buscar));
  console.log(resultado);
});


const BuscarInput = document.getElementById('BuscarInput');
const ListadeProductos = document.getElementById('ListadeProductos');

function MostrarProductos(productos) {
    ListadeProductos.innerHTML = '';
    productos.forEach(producto => {
      const li = document.createElement('li');
      li.textContent = `${productos.name} - $`;
      ListadeProductos.appendChild(li); 
    });
}


















