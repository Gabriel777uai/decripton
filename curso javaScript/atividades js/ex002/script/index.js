function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear()
    var anoF = document.querySelector('#ano')
    var res = document.querySelector('#res')
    var imagem = document.querySelector('#fotos')

    if (anoF.value.length == 0 || anoF.value > ano) {
        alert('Digite um ano por favor!')
    } else {
        var fsex = document.getElementsByName('masc')
        var idade = ano - Number(anoF.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked ){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'imagens/jovemmasc.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/senhor.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'imagens/jovemfem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/senhora.png')
            }
        }
        res.style.textaling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        imagem.appendChild(img)
    }
    
}
