var hora = 1
if (hora < 5){
    var tempo = console.log('Boa noite!!')
}
else if (hora >= 5 && hora < 12 ){
    var tempo = console.log('Bom dia!!')    
}
else if (hora >= 12  && hora <18){
    var tempo = console.log('Boa tarde!!')
}
else if (hora >= 18 && hora <=24){
    var tempo = console.log('Boa noite!!')
}
var resp = tempo == 'Boa noite!!'? 'noite':(tempo == 'Bom dia!!') ?'manhã':(tempo == 'Boa tarde!!')?'tarde':tempo == 'Boa noite!!'? 'noite' :''

console.log(`São exatamente ${hora} horas da ${resp}`)





