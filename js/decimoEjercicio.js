function subArray(array,inicial,final){
    array1 = array.slice(inicial,final);
    x = array1;
    return x;
}

var numeros = [1,2,3,4];
var salida = subArray(numeros,1,3);
console.log(salida);