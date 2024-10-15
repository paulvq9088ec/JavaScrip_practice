// Hacer una función que haga de forma aleatoria un numero ente 1 al 1000, y que a ese número le saque la mitad, el dobel y su raíz cuadrada
// function numAleatorio (){
//     let num = Math.floor(Math.random() * (1000 -1) +1);
//     //console.log(`El número aleatorio es: ${num}`);
//      `El número aleatorio es: ${num}` + "<br>";
//     let mitad = num / 2;
//     let doble = num * 2;
//     let raiz = Math.sqrt(num).toFixed(2);
//     parrafo.innerHTML = `El número aleatorio es: ${num}` + "<br>" + `La mitad del número es: ${mitad};` + "<br>" + `el doble es: ${doble};` + "<br>" + `y la raíz cuadrada es: ${raiz}`;
// }

// Declaración
// let parrafo = document.getElementById('result');
// numAleatorio();

function numAleatorio (){
    let num = Math.floor(Math.random() * (1000-1)+1)
    let mitad = (num / 2).toFixed(2);
    let doble = num * 2;
    let raiz = Math.sqrt(num).toFixed(2);
    console.log(num)
    console.log(mitad)
    console.log(doble)
    console.log(raiz)
}

numAleatorio();