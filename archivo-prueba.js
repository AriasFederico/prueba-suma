let decision = prompt('qué operación queres hacer? sumar o multiplicar?');
let numero = prompt('numero1');
let numeroDos = prompt('numero2');
// parse
let uno = parseInt(numero);
let dos = parseInt(numeroDos);

if (decision == '+' || decision == 'sumar'){
    const suma = (a,b)=>{
        console.log(a + b);
    }
    suma(uno, dos)
}else if (decision == 'x' || decision == 'multiplicar'){
    const multiplicacion = (a,b)=>{
        console.log(a * b);
    } 
    multiplicacion(uno, dos);
}
