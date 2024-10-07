function confirmar(){
var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')

var passo = document.getElementById('passo')
var contando = document.getElementById('contando')
if ( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert('algo esta vazio')
}   else {
    contando.innerText = 'contando: '
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (i < p) {
        for(var c = i; c > f; c-= p)
            contando.innerText += ` ${c}`
    }
}
    if (i > p){
    for (var c = i ; c < f ; c += p) {
        contando.innerText += ` ${c}`
        }
    }

 

}