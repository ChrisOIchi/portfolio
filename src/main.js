document.addEventListener("DOMContentLoaded", function() {
    var copyEmailBtn = document.getElementById("copyEmailBtn");
  
    copyEmailBtn.addEventListener("click", function() {
      // Lógica para copiar el correo electrónico al portapapeles
      var emailText = copyEmailBtn.innerText;
      var tempTextArea = document.createElement("textarea");
      tempTextArea.value = emailText;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextArea);
      alert("Correo copiado al portapapeles: " + emailText);
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    mobileMenuToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });
});