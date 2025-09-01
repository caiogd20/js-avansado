let nome = document.getElementById('nome')
let salariao = document.getElementById('salariao')
let idade = document.getElementById('idade')
let funcionario ={
    prenome: 'Ana',
    sobrenome: 'Silva',
    salariao: 2000,
    nacimento: new Date(1987, 10, 25),
    get nomecompleto(){
        return `${this.prenome} ${this.sobrenome}`
    },
    set nomecompleto(nc){
       [this.prenome, this.sobrenome] = nc.split(' ')
    },
    set novoSalario(v) {
        if(v < this.salariao)
            throw new Error('Salário menor que o atual')
        else
            this.salariao = v
    },
    get idade(){
        let hoje = new Date().getFullYear()
        return hoje - this.nacimento.getFullYear()
    }
}
funcionario.nomecompleto = 'Maria Souza'
nome.innerHTML = `Nome: ${funcionario.nomecompleto}`
salariao.innerHTML = `Salário: ${funcionario.salariao}`
let btn = document.getElementById('btn')
let inpt = document.getElementById('in')
btn.addEventListener('click', e => {
    e.preventDefault()
    funcionario.nomecompleto = inpt.value
    nome.innerHTML = `Nome: ${funcionario.nomecompleto}` // Atualiza o nome na tela
})
let btn2 = document.getElementById('btn2')
let inpt2 = document.getElementById('in2')
btn2.addEventListener('click', e => {
    e.preventDefault()
    funcionario.novoSalario = Number(inpt2.value)
    salariao.innerHTML = `Salário: ${funcionario.salariao}`
})
let btn3 = document.getElementById('btn3')
let inpt3 = document.getElementById('in3')
btn3.addEventListener('click', e => {
    e.preventDefault()
    let dataStr = inpt3.value; // Exemplo: "1990-05-20"
    let partes = dataStr.split('-'); // ["1990", "05", "20"]
    let ano = Number(partes[0]);
    let mes = Number(partes[1]) - 1; // Mês começa do zero em JS
    let dia = Number(partes[2]);
    let data = new Date(ano, mes, dia);
    funcionario.nacimento = data
    idade.innerHTML = `Idade: ${funcionario.idade} anos`
})
idade.innerHTML = `Idade: ${funcionario.idade} anos`
