const name= document.getElementById('name')
const age= document.getElementById('age')
const boton= document.getElementById('boton')
const resultado = document.getElementById('resultado')


boton.addEventListener('click', function () {

    const imc = pe.value / (altura.value * altura.value)

    let message

    if (imc < 18.5) {
        message = 'Bajo peso';
    } else if (imc < 24.9) {
        message = 'Peso normal';
    } else if (imc < 29.9) {
        message = 'Sobrepeso';
    } else {
        message = 'Obesidad';
    }

    resultado.textContent="tu tienes un imc de "+ Math.round(imc) +" por lo tanto esta en: "+ message
})