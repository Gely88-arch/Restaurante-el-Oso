// Mostrar descripción en modal
function mostrarDescripcion(titulo, descripcion) {
  document.getElementById('modalTitulo').innerText = titulo;
  document.getElementById('modalTexto').innerText = descripcion;
  let modal = new bootstrap.Modal(document.getElementById('modalDescripcion'));
  modal.show();
}

// Simular promoción del día
function mostrarPromocion() {
  alert("🌿 Promoción del día: 2x1 en Coctel de Camarón hasta las 6 PM.");
}
