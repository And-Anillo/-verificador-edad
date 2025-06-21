document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("boton");

    boton.addEventListener("click", function () {
        const nombre = document.getElementById("name").value.trim();
        const edad = parseInt(document.getElementById("edad").value.trim());
        const resultado = document.getElementById("resultado");

        if (isNaN(edad) || edad < 0) {
            resultado.textContent = "Por favor, ingresa una edad válida.";
            resultado.style.color = "red";
            return;
        }

        if (edad >= 18) {
            if (nombre === "") {
                resultado.textContent = "Por favor, ingresa tu nombre.";
                resultado.style.color = "orange";
            } else {
                resultado.textContent = `Hola ${nombre}, tienes ${edad} años y eres mayor de edad.`;
                resultado.style.color = "green";
            }
        } else {
            resultado.textContent = "No eres mayor de edad.";
            resultado.style.color = "red";
        }
    });
});
