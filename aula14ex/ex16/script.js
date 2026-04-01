function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    // Converter para número
    var inicio = Number(ini.value)
    var final = Number(fim.value)
    var p = Number(passo.value)

    // Validação
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        return
    }

    if (p <= 0) {
        alert('Passo inválido! Considerando passo = 1')
        p = 1
    }

    res.innerHTML = 'Contando: <br>'

    // Contagem crescente
    if (inicio <= final) {
        for (var c = inicio; c <= final; c += p) {
            res.innerHTML += `${c} 👉 `
        }
    } else {
        // Contagem regressiva
        for (var c = inicio; c >= final; c -= p) {
            res.innerHTML += `${c} 👉 `
        }
    }

    res.innerHTML += '🏁'
}



//* for (var c = 0 ; c <= 20; c += 2 ) {
//  console.log (c)
