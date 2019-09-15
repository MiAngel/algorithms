function removeLastItemOfArray(array){
    array.pop();
    x = array;
    return x;
}

var numeros = [1,2,3];
var salida = removeLastItemOfArray(numeros);
console.log(salida);