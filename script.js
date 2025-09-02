let out = document.getElementById('out');
function criaContador(){
    let n = 0;
    function altera(v){
        n += v;
    };
    return {
        inc: function(){ altera(1); },
        dec: function(){ altera(-1); },
        valor: function(){ return n; }
    };
}
let contador = criaContador();
out.innerText = contador.valor();
function inc(){
    contador.inc();
    out.innerText = contador.valor();
}
function dec(){
    contador.dec();
    out.innerText = contador.valor();
}
