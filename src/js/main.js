//Variables del DOM
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let btnSend = document.getElementById("btnSend");
let resultElement = document.getElementById("result");

//Evento click del boton
btnSend.addEventListener("click", (event) => {
  //No enviar formulario
  event.preventDefault();

  //Datos extraidos de los inputs
  let age = parseInt(ageInput.value);
  let name = nameInput.value;

  //Validaciones
  if (name == "") {
    resultElement.textContent = "Ingrese un nombre por favor";
  } else if (isNaN(age)) {
    resultElement.textContent =
      "Dato inválido, por favor ingrese una edad válida en números";
  } else if (age >= 18) {
    resultElement.textContent = `Hola ${name}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
  } else if (age < 18) {
    resultElement.textContent = `Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
  }
});
