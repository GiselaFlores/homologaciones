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