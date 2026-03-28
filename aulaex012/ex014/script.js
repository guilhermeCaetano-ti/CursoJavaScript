function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA 
        img.src ='dia.foto.jpg'  
        document.body.style.background = '#043814'
    }else if (hora >= 12 && hora <18) {
       //BOA TARDE 
       img.src ='tarde.foto.jpg'
       document.body.style.background = '#48915eb7'
    }else {
        //BOA NOITE 
        img.src ='noite.foto.jpg'
        document.body.style.background = '#856611'
    }
}