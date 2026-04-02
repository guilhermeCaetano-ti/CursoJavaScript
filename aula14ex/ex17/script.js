    function contar () {
    let num = document.getElementById('Numb')
    let tabu = document.getElementById('tabu')
    if (num.value.length == 0) {
        window.alert ('Por favor , digite um numero')
    }else {
        let n = Number(num.value)
        let c = 1 
        tabu.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tabu.appendChild(item)
            c++
        }
    }
}








/*function contar () {
    var num = document.getElementById('Numb')
    var tabu = document.getElementById('tabu')
    if (num.value.length == 0) {
        window.alert ('Por favor , digite um numero')
    }else {
    var numero = Number(num.value)

    tabu.innerHTML = ''
    tabu.text = 'digite um numero'

        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
        
            item.text = `${numero} x ${c} = ${numero * c}`
            tabu.appendChild(item)
    }
    }
} 
*/
