let container = document.getElementById('container');
let Pgeo = document.createElement('p');
Pgeo.id = 'geo';
container.appendChild(Pgeo);
let mostraCoods = function (pos) {
    console.log(`latitude: ${pos.coords.latitude}`);
    console.log(`longitude: ${pos.coords.longitude}`);
    Pgeo.innerText = `latitude: ${pos.coords.latitude}
    longitude: ${pos.coords.longitude}`;
}
let erroCoods = function (erro) {
    console.error(`Erro: ${erro.code} - ${erro.message}`);
    out.innerText = `Erro: ${erro.code} - ${erro.message}`;
}
let geo = navigator.geolocation;
geo.getCurrentPosition(mostraCoods, erroCoods);
let Pdb = document.createElement('p');
Pdb.id = 'db';
container.appendChild(Pdb);
let db;
let rqsDB = indexedDB.open('meuDB', 1);

rqsDB.onsuccess = function (event) {
    db = event.target.result;
    console.log('Banco aberto com sucesso');
    Pdb.innerText = 'Banco aberto com sucesso';
}
rqsDB.onerror = function (event) {
    console.error('Erro ao abrir o banco', event.target.error);
    Pdb.innerText = `Erro ao abrir o banco: ${event.target.error}`;
}