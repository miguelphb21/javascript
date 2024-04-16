function carregar(){
    var msg = document.getElementById('msg')

    var img = document.getElementById('imagem')

    var data = new Date()
    
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        //bom dia
        msg.innerHTML += '<br> Bom dia!'
        document.body.style.background = '#f5be95'
        img.src = 'amanhecer.png'
    }
    else if ( hora >= 12 && hora <= 18){
       //boa tarde
       msg.innerHTML +='<br> Boa tarde!'
       document.body.style.background = '#fc6423'
       img.src = 'tarde.png'
    }
    else{
        //boa noite
        msg.innerHTML +='<br> Boa noite!'
        document.body.style.background = '#023054'
        img.src = 'noite.png'
    }
}