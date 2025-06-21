document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("boton");

    boton.addEventListener("click", function () {
        const nombre = document.getElementById("name").value.trim();
        const edad = parseInt(document.getElementById("edad").value.trim());

        if (isNaN(edad) || edad < 0) {
            alert("Por favor, ingresa una edad válida.");
            return;
        }

        if (edad >= 18) {
            if (nombre === "") {
                alert("Por favor, ingresa tu nombre.");
            } else {
                alert(`Hola ${nombre}, tienes ${edad} años y eres mayor de edad.`);
            }
        } else {
            alert("No eres mayor de edad.");
        }
    });
});
