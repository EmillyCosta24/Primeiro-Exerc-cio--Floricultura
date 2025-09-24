function abrirModal(id) {
  document.getElementById(id).style.display = "block";
}

function fecharModal(id) {
  document.getElementById(id).style.display = "none";
}

// Fechar modal clicando fora do conteúdo
window.onclick = function(event) {
  const modais = document.getElementsByClassName("modal");
  for (let modal of modais) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
}

