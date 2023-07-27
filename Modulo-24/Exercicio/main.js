function Carro(modelo, fabricante, cor, valor) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.cor = cor;
    this.valor = valor;

    this.getValor = function() {
        return this.valor;
    }

    this.setValor = function(valor) {
        if(typeof valor == 'number') {
            this.valor = valor;
        }
    }
}

function CarroNovo(modelo, fabricante, cor, ano, valor, garantia) {
    this.ano = ano;
    this.garantia = garantia

    this.desconto = function() {
        const novoValor = this.getValor() * 0.9;
        this.setValor(novoValor);
    }

    Carro.call(this, modelo, fabricante, cor, valor);
}

function CarroUsado(modelo, fabricante, cor, ano, km, valor) {
    this.ano = ano;
    this.km = km;

    this.desconto = function() {
        const novoValor = this.getValor() * 0.85;
        this.setValor(novoValor);
    }

    Carro.call(this, modelo, fabricante, cor, valor);
}

const carro1 = new CarroNovo('Onix', 'GM', 'Preto', 2023, 60000, '1 ano');
const carro2 = new CarroNovo('HB20', 'Hyundai', 'Prata', 2023, 63000, '1 ano');
const carro3 = new CarroUsado('Argo', 'Fiat', 'Vermelho', 2019, 15000, 42000);

console.log(carro1);
carro1.desconto();
console.log(carro1.getValor());

console.log(carro2);

console.log(carro3);
carro3.desconto();
console.log(carro3.getValor());
