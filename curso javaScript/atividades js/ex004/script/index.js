function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (num.value.length == 0){
      window.alert('Por favor Digite um numero')

    } else {
        let n1 = Number(num.value)
        let c = 1
        tab.innerHTML = ' '
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            tab.appendChild(item)
            c++
        }

    }
    
}