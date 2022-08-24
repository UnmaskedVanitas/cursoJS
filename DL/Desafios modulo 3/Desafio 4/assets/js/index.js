const propiedadesJSON = [
  {
    name: "Casa en las afueras",
    description: "descansa de la ciudad",
    src: "assets/img/casa1.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa en el lago",
    description: "pescar es lo tuyo",
    src:
      "assets/img/casa2.jpg",
    rooms: 3,
    m: 130
  },
  {
    name: "Mansion",
    description: "Con todo lo que necesitas",
    src:
      "assets/img/casa3.jpg",
    rooms: 6,
    m: 500
  },
  {
    name: "Casa en la villa",
    description: "Gran comunidad de vecinos",
    src:
      "assets/img/casa4.jpg",
    rooms: 2,
    m: 150
  },
  {
    name: "Casa en el campo",
    description: "Con gran espacio para lo que quieras",
    src:
      "assets/img/casa5.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Casa en la ciudad",
    description: "Pequeña pero acogedora",
    src:
      "assets/img/casa6.jpg",
    rooms: 1,
    m: 100
  }
];
let inicio = () => (propiedades.innerHTML = '');

let propiedades = document.querySelector('.propiedades');
let total = document.querySelector('.total');


const busqueda = (casas = propiedadesJSON) => {
  inicio();
  for (casa of casas) {
    textoHtml = `
  <div class="propiedad">
                <div class="img" style="background-image: url('${casa.src}')"></div>
                <section>
                    <h5>${casa.name}</h5>
                    <div class="d-flex justify-content-between">
                        <p>Cuartos: ${casa.rooms}</p>
                        <p>Metros: ${casa.m}</p>
                    </div>
                    <p class="my-3">${casa.description}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
            </div>`
    propiedades.innerHTML += textoHtml;
  };

  total.innerHTML = casas.length;
};
let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  let habitaciones = document.querySelector('.habitaciones').value;
  let minMetros = document.querySelector('.minMetros').value;
  let maxMetros = document.querySelector('.maxMetros').value;

  if (habitaciones > 0 && minMetros >= 1 && maxMetros >= 1) {
    const casasFiltradas = propiedadesJSON.filter(
      (casa) => casa.rooms >= habitaciones && casa.m >= minMetros && casa.m <= maxMetros
    );
    busqueda(casasFiltradas);
  } else {
    alert('Se deben completar todos los filtos para poder realizar la busqueda.')
  }

});

busqueda()