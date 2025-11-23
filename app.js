// app.js
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btn-activar");
  const salida = document.getElementById("salida");

  boton.addEventListener("click", () => {
    salida.textContent = "✨ Presencia Andrew activada: Nunca vas a estar solo ✨";
  });
});
