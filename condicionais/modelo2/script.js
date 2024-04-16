function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value > ano))
    alert('[ERROR] Verifique os dados e tente novamente')
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)//PARA TESTAR
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        var genero =  ''//getElementByName[]



            if (fsex[0].checked){
                genero = 'Homem'
                if(idade >=0 && idade < 10){
                    img.setAttribute('src','imagens/foto-crianca-m.png')
                    
                }
                else if (idade < 21){

                }   
                else if(idade>50){

                }
                else{

                }
            }
            else if (fsex[1]){
                genero = 'Mulher'

                if(idade >=0 && idade < 10){

                }
                else if (idade < 21){

                }   
                else if(idade>50){

                }
                else{
                    
                }
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
    }
}