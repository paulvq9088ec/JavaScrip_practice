/*Realizar una función que nos diga la fecha de apertura de un examen de la universidad, es decir, la cantidad de horas restantes que faltan para que abra dicho examen.
En caso de que el examen haya cerrado que nos retorne un mensaje que diga "El examen ya cerró"
*/

// function ejercicio9(open = "", close = ""){
//     if(open === "" || close === "") return console.error('Faltan parámetros');
//     else{
//         let today = new Date(),
//             testOpen = new Date(open),
//             testClose = new Date(close);
//         let resulTimeOpen = Math.floor((testClose.getTime() - testOpen.getTime()) / (1000 * 60));
//         let resulTimeRest = Math.floor((testOpen.getTime() - today.getTime()) / (1000 * 60));
//         let timeRest = Math.floor((testClose.getTime() - today.getTime()) / (1000 * 60));
//         let horasFalta = Math.floor(resulTimeRest / 60);
//         let minutosFalta = resulTimeRest % 60;
//         let horasDuran = Math.floor(timeRest / 60);
//         let minutosDuran = timeRest % 60;
//         let segundoDuran = Math.floor((testClose.getTime() - today.getTime()) / (1000)) % 60;
//         console.log(resulTimeOpen, resulTimeRest);
//         if(testClose.getTime() < today.getTime()) return console.log('La luz ya se fue otra vez');
//         else{
//             if(resulTimeRest > 0) console.log(`Faltan ${horasFalta} horas y ${minutosFalta} minutos para que vuelva la luz`);
//             else{
//             console.log('La luz ha vuelto');
//             console.log(`Tendremos luz durante ${horasDuran} horas, ${minutosDuran} minutos y ${segundoDuran} segundos`);
//             }
//         }
//     }
// };

//Declarar
// ejercicio9('Fri Oct 11 2024 14:00:00', 'Fri Oct 11 2024 19:00:00');

function ejercicio9(open = "", close = "") {
  if (open === "" || close === "") return console.error("Faltan parámetros");
  else {
    let todayDate = new Date(),
        openExam = new Date(open),
        closeExam = new Date(close);
    let openTime = Math.floor((closeExam.getTime() - todayDate.getTime())/(1000 * 60));
    let timeUntil = Math.floor((openExam.getTime() - todayDate.getTime())/(1000 * 60));
    let timeClose = Math.floor((todayDate.getTime() - closeExam.getTime()) / (1000 * 60));

    if (timeUntil > 0) console.log(`Falta ${timeUntil} minutos para que inicie el examen`);
    else{
        if (timeClose < 0) console.log(`Queda ${openTime} minutos para que se cierre el examen`)
        else{
            console.log(`El examen ya se cerro hace ${timeClose} minutos.`)
        }
    }

  }
}

//Declaración
ejercicio9("Sat Oct 12 2024 10:10:00","Sat Oct 12 2024 11:00:00");
