let container = document.getElementById('container');
container.innerHTML = '<input type="number" id="in" value="0"> <input type="button" id="submit" value="submit" class="btn btn-primary" onclick="submit()"><br>';

let input = document.getElementById('in');

// Função auxiliar para aguardar um tempo
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Agora fnmetade é async
async function fnmetade(n) {
    let num = Number(n);
    let ms = Math.floor(Math.random() * 2000) + 500;
    await delay(ms);
    if (num % 2 == 0) {
        return num / 2;
    } else {
        throw 'Valor não é par';
    }
}

let Pcaunt = 0;
let PcauntF = 0;

function novoP() {
    let p = document.createElement('p');
    p.setAttribute('id', 'p' + Pcaunt);
    p.innerHTML = 'continua sem esperar o resultado da requisição de id: ' + Pcaunt;
    container.appendChild(p);
    Pcaunt++;
}

function atualizaP(text, sucesso) {
    let p = document.getElementById('p' + PcauntF);
    if (!sucesso) p.style.color = 'red';
    if (sucesso) p.style.color = 'green';
    p.innerHTML = 'Resultado da requisição de id ' + PcauntF + ': ' + text;
    PcauntF++;
}

// submit pode ser normal, mas precisa usar then/catch com async fnmetade
function submit() {
    let n = input.value;
    fnmetade(n)
        .then(resp => {
            console.log(resp);
            atualizaP(`a merade de ${n} é ${resp}`, true);
        })
        .catch(err => {
            console.log(err);
            atualizaP(err, false);
        });
    novoP();
    console.log('continua sem esperar o resultado');
}
