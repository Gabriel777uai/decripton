let a = [
    {
        log: 'gabriel',
        senha: '2464'
    },
    {
        log: 'daniel',
        senha: '1234'
    },
    {
        log: 'sara',
        senha: '1512'
    }
]


function verificar() {

    let acesso = String(document.getElementById('acesso').value)
    let senha = String(document.getElementById('senha').value)
    let res = document.getElementById('resposta')
    let novasenha = document.getElementById('novasenha')
    let validalogin = false
    for (let i in a) {

        if (acesso == a[i].log && senha == a[i].senha){
            validalogin = true
            break
        }
    }
    if (validalogin == true){
        window.location.href = 'conta.html'
    } else {
       res.innerHTML= 'Senha ou Acesso invalido !'
       novasenha.innerText = 'esqueci a senha'
       res.style.background = '#f4796b'
       res.style.padding = '20px'
       res.style.border = '3px solid red'
       res.style.borderRadius = '10px'
       res.style.transition = '200ms linear'
      

    }
} 