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

  // Función para cargar y procesar el JSON
function buscarConvenio() {
    const inputBusqueda = document.getElementById("busqueda").value.trim();
    const contenedor = document.getElementById("conveniosContenedor");

    // Cargar el archivo JSON
    fetch("convenios.json")
        .then((response) => response.json())
        .then((data) => {
            contenedor.innerHTML = ""; // Limpiar el contenedor antes de mostrar resultados

            if (inputBusqueda) {
                // Buscar convenio por número
                const convenioEncontrado = data.find(
                    (convenio) => convenio.numConvenio === inputBusqueda
                );

                if (convenioEncontrado) {
                    // Mostrar el convenio encontrado
                    contenedor.innerHTML = generarCard(convenioEncontrado);
                } else {
                    // Mostrar mensaje si no se encuentra el convenio
                    contenedor.innerHTML =
                        "<p>Convenio no encontrado, intente una nueva búsqueda.</p>";
                }
            } else {
                // Mostrar los últimos 3 convenios si no hay búsqueda
                const ultimosConvenios = data.slice(-3).reverse();
                ultimosConvenios.forEach((convenio) => {
                    contenedor.innerHTML += generarCard(convenio);
                });
            }
        })
        .catch((error) => {
            console.error("Error al cargar el JSON:", error);
            contenedor.innerHTML = "<p>Error al cargar los convenios.</p>";
        });
}

// Función para generar la estructura de la card
function generarCard(convenio) {
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
