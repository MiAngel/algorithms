var txtIni = "My favorite food is "
var txt1 = youChoose("meat","!");
console.log(txt1);

var txt2 = youChoose("rice","!");
console.log(txt2);

function youChoose(txt,simb){
    texto = txtIni+txt+simb;
    return texto;
}