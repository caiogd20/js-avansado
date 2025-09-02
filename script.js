let out = document.getElementById('out');
let ola = digaOla('pt-br'); // valor padrão

function digaOla(lg){
    return function(nome){
        switch (lg) {
            case 'es':
                out.innerHTML = `Hola ${nome}`;
                break;
            case 'en':
                out.innerHTML = `Hello ${nome}`;
                break;
            case 'fr':
                out.innerHTML = `Bonjour ${nome}`;
                break;
            default:
                out.innerHTML = `Ola ${nome}`;
                break;
        }
    }    
}

addEventListener('change', e => {
    if (e.target.name === 'idioma') {
        ola = digaOla(e.target.value);
    }
})
addEventListener('click', e => {
    if (e.target.id === 'btn') {
        let nome = document.getElementById('nome').value;
        ola(nome);
    }
})