let out = document.getElementById('out')
function criaContador() {
    let n = 0
    return function() {
        console.log(++n)
        return n       
    }
}
let contador = criaContador()
out.innerHTML = contador() + '<br>' + contador() + '<br>'+ contador() + '<br>'+ contador() + '<br>'+ contador() + '<br>'