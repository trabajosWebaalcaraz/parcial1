/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
{
  let actual = 0;
  const url = 'datos.json';
  let datos = [];
  const productos = [];
  /**
   *  funcion de lectura
   * @param {string} url
   * @return {Promise} Promesa
   */
  function lectura(url) {
    const promise = new Promise((resolve, reject)=>{
      const req= new XMLHttpRequest();
      req.open('GET', url);
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          reject(req.statusText);
        }
      };
      req.send();
    });
    return promise;
  };

  lectura(url).then((result)=>{
    console.log('gas');
    datos = JSON.parse(result);
    console.log(datos);
    cambiarPag(0);
  });

  /**
   *
   * @param {int} n
   */
  function cambiarPag(n) {
    actual = n;
    let nombre = ' ';
    console.log(datos[n].name);
    nombre = document.getElementById('titleFood');
    nombre.innerHTML = datos[n].name;

    for (let i = 0; i < 4; i++) {
      nombreP = document.getElementById('nombreProducto'+i);
      nombreP.innerHTML = datos[n].products[i].name;
      foto = document.getElementById('imgProducto'+i);
      foto.src = datos[n].products[i].image;
      descripcion = document.getElementById('descripcionProducto'+i);
      descripcion.innerHTML = datos[n].products[i].description;
      precio = document.getElementById('precioProducto'+i);
      precio.innerHTML = datos[n].products[i].price;
    }
  };
  let anadidos = 0;
  /**
   *
   * @param {int} n
   */
  function anadir(n) {
    anadidos += 1;
    document.getElementById('contObjetos').innerHTML = anadidos + '  items';

    productoAnadir = datos[actual].products[n];
    productos.push(productoAnadir);
    console.log(productos);
  };
  /**
   *
   */
  function tablaCompra() {
    header = `<div class="container">
    <table class="table table-striped border-success">
      <tr class="bg-info">
        <th>Item</th>
        <th>Qty</th>
        <th>Description</th>
        <th>Unit price</th>
        <th>Amount</th>
        <th>Modify</th>
      </tr>

      <tbody id="tablaEventos">

      </tbody>
    </table>
    <div class="row">
    <div class="col-2">
        <p>
            total :
        </p>
    </div>
    <div class="col-6">

    </div>
    <div class="col-2">
        <button type="button">cancel</button>
    </div>
    <div class="col-2">
        <button type="button">confirm</button>
    </div>
</div>
  </div>`;
    tabla = document.getElementById('tabla');
    tabla.innerHTML = header;

    const table = document.getElementById('tablaEventos');

    console.log(productos.length);
    for (let i = 0; i < productos.length; i++) {
      const row = `<tr>
    					<td>${i+1}</td>
              <td>${1}</td>
              <td>${productos[i].name}</td>
              <td>${productos[i].price}</td>
              <td>${productos[i].price}</td>
              <td>
              <button type="button" class="btnMod" onClick="mod()">+</button>
              <button type="button" class="btnMod" onClick="mod()">-</button>
              </td>
    			    </tr>`;
      table.innerHTML += row;
    };
  }
}
