function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
   
    msg.innerHTML = `Agora sao ${hora} horas`

    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = 'lightblue'

    } else if (hora >= 12 && hora <= 17){
        //boa tarde 
        img.src = 'imagens/tarde.png'
         document.body.style.background = '#b9846f'
    } else {
        //boa noite
        img.src = 'imagens/noite.png'
       document.body.style.background = '#190c76'
    }
}
