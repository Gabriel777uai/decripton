function soma(n1, n2){
    return n1 + n2
}
let somar = soma(5, 8)
console.log(somar)

let v = function (x){
    return x*2
}
console.log(v(5))


function fatorial(n){
    let i = 1
    for(var c = n; c > 1; c-- ){
        i *= c
    }
    return i
}
console.log(fatorial(5))