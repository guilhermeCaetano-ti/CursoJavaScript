let valores = []

function adicionar () {
    let num = document.getElementById('numero')
    let ana = document.getElementById('anali')

    if (num.value.length == 0) {
        alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)

        if (valores.includes(n)) {
            alert("Número já foi adicionado na lista")
        } else {
            valores.push(n)

            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado`
            ana.appendChild(item)
        }
    }
}

function finalizar () {
    let res = document.getElementById('res')

    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0

        for (let c = 0; c < valores.length; c++) {
            soma += valores[c]

            if (valores[c] > maior) {
                maior = valores[c]
            }

            if (valores[c] < menor) {
                menor = valores[c]
            }
        }

        let media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}


/*if (valores.includes(n)) {
    alert("Número já foi adicionado")
} else {
    valores.push(n)
}
*/