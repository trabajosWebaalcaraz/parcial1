/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
{
  const actual = 0;
  const url = 'https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json';
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
    const datos = JSON.parse(result);
    console.log(datos);


    const table = document.getElementById('tablaEventos');

    for (let i = 0; i < datos.length; i++) {
      let row;
      // eslint-disable-next-line prefer-const
      row = `<tr>
							<td>${datos[i].last_name}</td>
              <td>${datos[i].first_name}</td>
              <td>${datos[i].email}</td>
              <td><img src = "${datos[i].photo}"></td>
              <td><input type="button" value="Delete Row" 
              onclick="DeleteRowFunction()"></td>
					    </tr>`;

      table.innerHTML += row;
    }
  });

  function cambiarPag(n) {
    actual = n;
    if (actual== 1) {

    }
  }
}
