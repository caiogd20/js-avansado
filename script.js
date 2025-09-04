let container = document.getElementById('container');
let Pgeo = document.createElement('p');
Pgeo.id = 'geo';
container.appendChild(Pgeo);

function getCurrentPositionPromise() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

getCurrentPositionPromise()
    .then(pos => {
        console.log(`latitude: ${pos.coords.latitude}`);
        console.log(`longitude: ${pos.coords.longitude}`);
        Pgeo.innerText = `latitude: ${pos.coords.latitude}
        longitude: ${pos.coords.longitude}`;
    })
    .catch(erro => {
        console.error(`Erro: ${erro.code} - ${erro.message}`);
        Pgeo.innerText = `Erro: ${erro.code} - ${erro.message}`;
    });

let Pdb = document.createElement('p');
Pdb.id = 'db';
container.appendChild(Pdb);

function openIndexedDBPromise(name, version) {
    return new Promise((resolve, reject) => {
        let request = indexedDB.open(name, version);
        request.onsuccess = event => resolve(event.target.result);
        request.onerror = event => reject(event.target.error);
    });
}

openIndexedDBPromise('meuDB', 1)
    .then(db => {
        console.log('Banco aberto com sucesso');
        Pdb.innerText = 'Banco aberto com sucesso';
    })
    .catch(error => {
        console.error('Erro ao abrir o banco', error);
        Pdb.innerText = `Erro ao abrir o banco: ${error}`;
    });