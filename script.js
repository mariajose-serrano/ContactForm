const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.style.display = "none";

    const successMessage = document.createElement("div");
    successMessage.textContent = "✅ ¡Gracias por tu mensaje!";
    successMessage.classList.add("success-message");

    document.body.appendChild(successMessage);
  });
}

const btn = document.querySelector("#miBoton");

if (btn) {
  btn.addEventListener("click", () => {
    alert("¡Funciona!");
  });
}
