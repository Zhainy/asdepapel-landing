document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Manejo del formulario de contacto
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("form-success");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        form.reset();

        successMessage.classList.remove("d-none");
        successMessage.classList.add("show");

        // Ocultar después de 5 segundos
        setTimeout(() => {
          successMessage.classList.remove("show");
          successMessage.classList.add("d-none");
        }, 5000);
      } else {
        alert("Ups, algo salió mal. Intenta más tarde.");
      }
    })
    .catch((error) => {
      alert("Error al enviar el formulario. Intenta de nuevo.");
    });
});
