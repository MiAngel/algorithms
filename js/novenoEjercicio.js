function addItemToFront(array,dato){
    array.unshift(dato);        //añade dato al inicio del array
    x = array;
    return x;
}

var numeros = [1,2,3];
var salida = addItemToFront(numeros,6);
console.log(salida);