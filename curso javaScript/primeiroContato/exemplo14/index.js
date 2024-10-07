
function prompt(n) {
    if (n%2==0){
        return `numero par`
    } else {
        return `numero impar`
    }
}
let res = prompt(10)
console.log(res)