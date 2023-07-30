function somar() {
    let soma = 0;

    for(let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}
console.log(somar(10, 20, 30)); //60

// Rest
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numerosAtual) => {
        total += numerosAtual;
        return total;
    }, 0)
    return soma;
}
console.log(somarComRest(10, 20, 30)); //60


//spread
const numeros = [1, 2, 3, 4]
console.log(...numeros);

const timesDeSP = ['corinthians', 'são paulo', 'palmeiras', 'santos'];
const timesDeRJ = ['flamengo', 'vasco', 'fluminense', 'botafogo'];

//tradicional
const times = timesDeSP.concat(timesDeRJ);
console.log(times);

// com spread
const timesDeFutebol = [...timesDeSP, ...timesDeRJ];
console.log(timesDeFutebol);


const carroDoBruno = {
    modelo: 'gol',
    marca: 'VW',
    motor: 1.6
}
const carroDaBianca = {
    ...carroDoBruno,
    motor: 1.8
}
console.log(carroDaBianca);

// desestruturação
const motorCarroBianca = carroDaBianca.motor // tradicional

const { motor } = carroDaBianca; // ES6 - desestruturação
const { motor: motorCarroBruno } = carroDoBruno; // aplicando apelidos com a desestruturação
console.log(motor); //1.8
console.log(motorCarroBruno); //1.6

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;
console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);
