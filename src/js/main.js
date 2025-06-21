// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("boton");

    // Add click event listener to the button
    boton.addEventListener("click", function () {
        // Get and trim the user's name input
        const nombre = document.getElementById("name").value.trim();
        // Get and parse the user's age input
        const edad = parseInt(document.getElementById("edad").value.trim());
        const resultado = document.getElementById("resultado");

        // Validate the age input
        if (isNaN(edad) || edad < 0) {
            resultado.textContent = "Por favor, ingresa una edad válida.";
            resultado.style.color = "red";
            return;
        }

        // Check if the user is 18 or older
        if (edad >= 18) {
            // Check if the name input is empty
            if (nombre === "") {
                resultado.textContent = "Por favor, ingresa tu nombre.";
                resultado.style.color = "orange";
            } else {
                // Display message for adults with valid name
                resultado.textContent = `Hola ${nombre}, tienes ${edad} años y eres mayor de edad.`;
                resultado.style.color = "green";
            }
        } else {
            // Display message for underage users
            resultado.textContent = "No eres mayor de edad.";
            resultado.style.color = "red";
        }
    });
});
