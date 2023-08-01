function funcaoMuitoPesada() {
    let execucoes = 0;

    for(let i = 0; i < 1000000000; i++) {
        execucoes++;
    }

    return execucoes;
}

// Promisses
const funcaoMuitoPesadaPromisse = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for(let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes);
    } catch (e) {
        reject('Deu erro na iteração dos números')
    }
});

// Promisse com parametro
const promiseComParametro = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuario: ${login}`)
        }, 3000)
    });
}


console.log('inicio');
// console.log(funcaoMuitoPesada());
funcaoMuitoPesadaPromisse.then(result => console.log(result)).catch(erro => console.log(erro));
console.log('fim');

async function execucaoPrincipal() {
    console.log('inicio');
    // await funcaoMuitoPesadaPromisse.then(result => console.log(result)).catch(erro => console.log(erro));
    promiseComParametro('bruno@gmail.com', 123456).then(result => console.log(result));

    try {
        const result = await funcaoMuitoPesadaPromisse;
        console.log(result);
    } catch (e) {
        console.log(e);
    }
    console.log('fim');
}

execucaoPrincipal();