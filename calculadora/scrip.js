const botonNumero = document.querySelectorAll('[data-numero]'); 
const botonOperador = document.querySelectorAll('[data-operador]');
const botonIgual = document.querySelector('[data-igual]');
const botonBorrarTodo = document.querySelector('[data-borrar-todo]');
const botonBorrar = document.querySelectorAll('[data-borrar]');
const textoValorSuperior = document.querySelector('[data-valor-superior]');
const textoValorInferior = document.querySelector('[data-valor-inferior]');

class Calculadora {
    constructor(textoValorInferior,textoValorSuperior){
        this.textoValorInferior = textoValorInferior
        this.textoValorSuperior = textoValorSuperior
        this.valorInferior = '' 
        this.valorSuperior = '' 
        this.operador = undefined 
    };

    agregarNumero(numero){
        this.valorInferior = this.valorInferior + numero
    };

    imprimirDisplay(){
        this.textoValorInferior.innerText = this.valorInferior
    };
};

const calculadora = new Calculadora (textoValorInferior,textoValorSuperior)

botonNumero.forEach(boton => {
    boton.addEventListener('click', () =>{
        calculadora.agregarNumero(boton.innerText);
        calculadora.imprimirDisplay();
        // console.log(boton.innerText)
    });
});
