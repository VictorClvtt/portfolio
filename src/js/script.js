const agora = new Date()
const hora = agora.getHours()

if(hora>5 && hora <=12){
    document.getElementById('saudacao').innerText = 'Bom dia'
}else if(hora>12 && hora<=18){
    document.getElementById('saudacao').innerText = 'Boa tarde'
}else{
    document.getElementById('saudacao').innerText = 'Boa noite'
}

