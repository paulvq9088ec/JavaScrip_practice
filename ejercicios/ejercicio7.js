//Realizar una función que, dado como dato de entrada una oración, nos devuelve un arreglo que contenga todas las palabras usadas en la oración

// function ejercicio7(a) {
//   let separado = a.split(" ");
//   for (let i = 0; i < separado.length; i++) {
//     parrafo.innerHTML += separado[i] + "</br>";
//   }
// }

// //Declarar
// let parrafo = document.getElementById("result");
// ejercicio7("Hola mundo, cómo está mi gente!!!");

function ejercicio7(a){
  let separador = a.split(" ");
  for(let i=0; i<= separador.length -1; i++ ) {
    console.log(separador[i] + ' '+ i);
  };
  console.log(separador)
};

ejercicio7('Hola mi gente cómo estamos el día de hoy');