function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + ' diz olá');
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function() {
        return `O salário de ${this.nome} é ${_salario}`;
    }

    this.setSalario = function(valor) {
        if(typeof valor == 'number') {
            _salario = valor;
        }
    }

    this.dizCargo = function() {
        console.log(this.cargo)
    }

    Pessoa.call(this, nome);
}

const pessoa1 = new Pessoa('Maria');
const funcionario1 = new Funcionario('Maria', 'dev front-end', 5000);

funcionario1.setSalario(7000);
console.log(funcionario1.getSalario());