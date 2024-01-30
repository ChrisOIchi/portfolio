document.addEventListener("DOMContentLoaded", function() {
  var copyEmailBtn = document.getElementById("copyEmailBtn");
  var copyTooltip = document.getElementById("copyTooltip");

  copyEmailBtn.addEventListener("click", function(event) {
      var emailText = copyEmailBtn.innerText;

      // Utilizar el API de Clipboard para copiar al portapapeles
      navigator.clipboard.writeText(emailText).then(function() {
          // Posicionar el tooltip cerca del puntero
          copyTooltip.style.top = (event.clientY - 30) + "px"; // Ajusta la posición vertical según tu preferencia
          copyTooltip.style.left = event.clientX + "px";

          // Mostrar el tooltip
          copyTooltip.classList.add("active");

          // Ocultar el tooltip después de 2 segundos
          setTimeout(function() {
              copyTooltip.classList.remove("active");
          }, 2500);
      }).catch(function(err) {
          console.error('Error al copiar al portapapeles: ', err);
      });
  });
});


