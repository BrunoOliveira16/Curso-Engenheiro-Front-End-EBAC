function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log('acelerar');
    }
}

const carroDoBruno = new Carro('Onix', 'GM', 2020, 2019);
const carroDaBianca = new Carro('Mobile', 'Fiat', 2018, 2017);

console.log(carroDoBruno.fabricante);