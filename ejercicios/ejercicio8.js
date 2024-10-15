/* Crear 5 objetos y almacenarlos en un arreglo.
Debes hacer una función para filtrar a todas las personas que tengan el nombre "Luis" 
y que esa misma función también muestre cuáles son mayores de edad
*/
// function ejercicio8() {
//   const personas = [
//     {
//       nombre: "Luis",
//       apellido: "Fernandez",
//       edad: 19,
//     },
//     {
//       nombre: "Lucas",
//       apellido: "Casilla",
//       edad: 10,
//     },
//     {
//       nombre: "Luis",
//       apellido: "Lopez",
//       edad: 29,
//     },
//     {
//       nombre: "Carlo",
//       apellido: "Veintimilla",
//       edad: 45,
//     },
//     {
//       nombre: "Maria",
//       apellido: "Escobar",
//       edad: 26,
//     },
//   ];
//   parrafo.innerHTML += 'Estas son las persona que llevan el nombre "Luis":'+ '<br>'+ '<lu>';
//   personas.filter((e) => {
//     if (e.nombre === "Luis") parrafo.innerHTML += '<li>' + (`${e.nombre} ${e.apellido}`+'</li></lu>'+ '<br>')
//   });
//   parrafo.innerHTML += 'Las personas mayores de edad son las siguientes:'+ '<br>'+ '<lu>';
//   personas.filter((e)=> {
//     if (e.edad >= 18) parrafo.innerHTML += '<li>' + (`${e.nombre} ${e.apellido}`+'</li></lu>'+ '<br>')
//   });
// }

// //Declarar
// let parrafo = document.getElementById('result');
// ejercicio8()

function ejercicio8() {
  const notasAlumno = [
    {
      nombre: "Alex",
      curso: 1,
      nota: 9,
    },
    {
      nombre: "Pepito",
      curso: 3,
      nota: 5,
    },
    {
      nombre: "Juanito",
      curso: 2,
      nota: 6,
    },
  ];
  notasAlumno.filter((e) => {
    if (e.nota < 8) {
      console.log(`El estudiante ${e.nombre}, del curso ${e.curso} está peligrando el curso! Hay que estudiar`);
    }
  });
}

ejercicio8();
