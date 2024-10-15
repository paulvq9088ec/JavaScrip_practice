// En un arreglo tenemos varios valores numéricos, hacer una función que elimine aquellos valores que se encuentran repetidos
// let lista = [1, 2, 3, 3, 4, 4, 5, 5];
// let nuevaLista = [];
// function ejercicio10() {
//   for (let i = 0; i < lista.length; i++) {
//     if (i != (i + 1)) {
//       nuevaLista.push(i+1);
//     };
//   };
//   console.log(lista);
//   console.log(nuevaLista);

// };

// //Declarar
// ejercicio10();

function ejercicio10(){
  const lista = [1, 2, 3, 3, 4, 4, 5, 5];
  let filtrado = lista.filter((item, index) =>{
    return lista.indexOf(item) === index
  });
  console.log(lista)
  console.log(filtrado)

  //Segunda forma
  let nuevoFiltrado = new Set(lista);
  console.log(nuevoFiltrado);
  let nuevalista = [...arguments,...nuevoFiltrado];
  console.log(nuevalista);
}

ejercicio10();