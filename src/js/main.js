const name= document.getElementById('name')
const age= document.getElementById('age')
const boton= document.getElementById('boton')
const resultado = document.getElementById('resultado')


boton.addEventListener('click', function () {


    if (age >= 18) {
        message = 'eres mayor de edad';
    } else if (age < 18) {
        message = 'eres menor de edad';
    }else {
        message = 'edad no valida';
    } 

    resultado.textContent="tu nombre es " + name.value + ", tienes " + age.value + " años, por lo tanto " + message;
})