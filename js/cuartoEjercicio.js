var texto1 = "Este es el tercer ejercicio";
var texto2 = "con funcion incluida";
var textoFinal = youChoose(texto1,texto2);

console.log(textoFinal);

function youChoose(txt1,txt2){
    texto = txt1+" "+txt2;
    return texto;
}