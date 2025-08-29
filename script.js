let out = document.getElementById('out')
out.innerHTML = ''
let a;
try {
    a = x;
} catch (error) {
    console.error(error.name)
    console.error(error.message)
    console.error(error.stack)
    out.innerHTML = `<div class="alert alert-danger" role="alert">Valor de A não pode ser calculado<br/>${error.message}</div>`
}
console.log('fim')
