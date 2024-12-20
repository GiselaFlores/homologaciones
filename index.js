document.addEventListener("DOMContentLoaded", () => {
    const preguntasBtn = document.getElementById("preguntas");
    const cerrarBtn = document.getElementById("cerrar");
    const acordeonDiv = document.getElementById("accordionFlushExample");

    acordeonDiv.style.display = "none"; 
    cerrarBtn.style.display = "none";
  
    preguntasBtn.addEventListener("click", () => {
      acordeonDiv.style.display = "block"; // Muestra el div
      preguntasBtn.style.display = "none"; // Oculta el botón de "Mostrar"
      cerrarBtn.style.display = "block";
      cerrarBtn.style.display = "flex";
      cerrarBtn.style.alignItems = "center";
    });
  
    cerrarBtn.addEventListener("click", () => {
      acordeonDiv.style.display = "none"; // Oculta el div
      cerrarBtn.style.display = "none"; // Oculta el botón de "Cerrar"
      preguntasBtn.style.display = "block";
      preguntasBtn.style.display = "flex";
      preguntasBtn.style.alignItems = "center";
    });
  });

function mostrarContenedor() {
    const contenedorVisible = document.getElementById("visible");
    contenedorVisible.style.display = "block"; // Mostrar el contenedor
}

  // Función para cargar y procesar el JSON
function buscarConvenio() {
    const inputBusqueda = document.getElementById("busqueda").value.trim();
    const contenedor = document.getElementById("conveniosContenedor");
    const contenedorVisible = document.getElementById("visible");
    console.log(inputBusqueda);

    // Cargar el archivo JSON
    fetch("convenios.json")
        .then((response) => response.json())
        .then((data) => {
            contenedor.innerHTML = ""; // Limpiar el contenedor antes de mostrar resultados

            if (inputBusqueda) {
                // Buscar convenio por número
                const convenioEncontrado = data.find(
                    (convenio) => convenio.numConvenio == inputBusqueda
                );

                if (convenioEncontrado) {
                    // Mostrar el convenio encontrado
                    contenedor.innerHTML = generarCard(convenioEncontrado, false);
                    contenedorVisible.style.display = "block";
                } else {
                    // Mostrar mensaje si no se encuentra el convenio
                    contenedor.innerHTML =
                        "<p>Convenio no encontrado, intente una nueva búsqueda.</p>";
                        contenedorVisible.style.display = "block";
                }
                
                // Mostrar el contenedor de resultados
                contenedorVisible.style.display = "block";

                // Agregar eventos a los botones "Cerrar búsqueda"
                document.querySelectorAll(".cerrarBusqueda").forEach((boton) => {
                    boton.addEventListener("click", () => {
                        contenedorVisible.style.display = "none"; // Ocultar el contenedor
                    });
                });
            } 
        })
        .catch((error) => {
            console.error("Error al cargar el JSON:", error);
            contenedor.innerHTML = "<p>Error al cargar los convenios.</p>";
        });
}

// Función para generar la estructura de la card
function generarCard(convenio, value) {

    if(value === true){
        return `
        <div class="card borderOff" style="width: 24rem;">
            <div class="card-body p-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="violetaIco" width="64" height="64" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                    <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                </svg>
                <h5 class="card-title mt-4 mb-3">${convenio.titulo}</h5>
                <h6 class="card-subtitle text-body-secondary mb-4">${convenio.subtitulo}</h6>
                <p class="card-text">${convenio.texto}</p>
                <a href="${convenio.enlace}" download class="btn violeta w-75 mt-4">Leer convenio</a>
            </div>
        </div>
    `;
    }

    else{
    return `
        <div class="card borderOff" style="width: 24rem;">
            <div class="card-body p-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="violetaIco" width="64" height="64" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                    <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                </svg>
                <h5 class="card-title mt-4 mb-3">${convenio.titulo}</h5>
                <h6 class="card-subtitle text-body-secondary mb-4">${convenio.subtitulo}</h6>
                <p class="card-text">${convenio.texto}</p>
                <a href="${convenio.enlace}" download class="btn violeta w-75 mt-4">Leer convenio</a>
                <button class="btn grisBoton mt-3 cerrarBusqueda" id="grisBoton">Cerrar búsqueda</button>
            </div>
        </div>
    `;}
}



// Función para mostrar los últimos 3 convenios
function mostrarUltimosConvenios() {
    const contenedorFijo = document.getElementById("conveniosContenedorFijo");

    // Limpiar el contenedor antes de agregar nuevos convenios
    contenedorFijo.innerHTML = "";

    // Cargar el archivo JSON
    fetch("convenios.json")
        .then((response) => response.json())
        .then((data) => {
            console.log("Datos del JSON:", data);

            // Asegurarse de que los datos estén ordenados por ID (en caso de desorden en el archivo)
            const datosOrdenados = data.sort((a, b) => b.id - a.id); // Ordenar por ID descendente

            // Obtener los últimos 3 convenios
            const ultimosConvenios = datosOrdenados.slice(0, 3);

            if (ultimosConvenios.length > 0) {
                ultimosConvenios.forEach((convenio) => {
                    contenedorFijo.innerHTML += generarCard(convenio, true);
                });
            } else {
                contenedorFijo.innerHTML = "<p>No hay convenios disponibles para mostrar.</p>";
            }
        })
        .catch((error) => {
            console.error("Error al cargar el JSON:", error);
            contenedorFijo.innerHTML = "<p>Error al cargar los convenios.</p>";
        });
}

/*
function mostrarUltimosConvenios() {
    const contenedorFijo = document.getElementById("conveniosContenedorFijo");

    // Cargar el archivo JSON
    fetch("convenios.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            // Obtener los últimos 3 convenios
            const ultimosConvenios = data.slice(-3).reverse();
            console.log(ultimosConvenios)

            if (ultimosConvenios.length > 0) {
                ultimosConvenios.forEach((convenio) => {
                    contenedorFijo.innerHTML += generarCard(convenio, true);
                });
            } 
         
        })
        .catch((error) => {
            console.error("Error al cargar el JSON:", error);
            contenedorFijo.innerHTML = "<p>Error al cargar los convenios.</p>";
        });
}*/

// Asegurar de que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    mostrarUltimosConvenios();
});

// Evento asociado al botón de buscar
document.getElementById("buscarBoton").addEventListener("click", buscarConvenio);