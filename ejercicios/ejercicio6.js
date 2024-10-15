// Hacer una función que, dado como dato de entrada nuestra fecha de cumpleaños, nos diga cuántos días faltan para el mismo
// function ejercicio6(a){
//     let cumple = new Date(a);
//     let hoy = new Date();
//     let restante = Math.floor((cumple.getTime() - hoy.getTime())/ (1000 * 60 * 60 * 24))
//     console.log(`El día de tu cumpleaños es: ${cumple} y faltan ${restante} días para que lo vuelvas a celebrar.` )
// }
// ejercicio6("8 aug 2024");

function ejercicio6(cumple){
    let fechaCumple = new Date(cumple);
    let actualFecha = new Date();
    let faltante = Math.floor(((fechaCumple.getTime() - actualFecha.getTime()) / (1000 * 60 * 60 * 24)));

    console.log(`Faltan ${faltante} días para que sea tu cumpleaños`)
}

ejercicio6('11 Nov 2024');