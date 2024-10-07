// bom dia, boa tarde e boa noite
// condiçao condicional
var agora = new Date()
var data = new Date()
var dataAtual = data.getDate()
var hora = agora.getHours()
console.log(`Hoje e dia ${dataAtual}`)
console.log(`Sao exatamente ${hora} Hrs`)
if (hora < 12){
    console.log('BOM DIA !')
} else if (hora > 12 && hora < 18){
    console.log('BOA TARDE !')
} else {
    console.log('BOA NOITE !')
}