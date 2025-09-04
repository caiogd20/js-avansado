let container = document.getElementById('container');
function carga(n) {
    fetch('https://reqres.in/api/users/'+n)
        .then((resp) => resp.json())
        .then((obj) => console.log(obj))
        .catch(err => {
            let out = document.getElementById('users');
            console.error(err);
            out.innerHTML = 'Erro ao carregar usuários: ' + err;
        });
}
container.innerHTML = '<button onclick="carga(1)">Carregar Usuário 1</button><button onclick="carga(2)">Carregar Usuário 2</button><div id="users"></div>';


carga(1);