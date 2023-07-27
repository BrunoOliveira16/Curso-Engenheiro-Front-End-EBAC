## 📝 Aula 07: Polimorfismo
O polimorfismo é um conceito fundamental da programação orientada a objetos que permite que objetos de diferentes classes sejam tratados como objetos de uma classe comum. Isso é feito criando classes que compartilham uma interface comum, mas têm implementações diferentes para seus métodos.

No exemplo fornecido, a função ``Funcionario`` foi modificada para incluir um novo método chamado ``aumento``. Esse método aumenta o valor do atributo ``salario`` do objeto ``Funcionario`` em 10%.

Além disso, foram criadas duas novas funções construtoras: ``Estagiario`` e ``Gerente``. Essas funções herdam propriedades e métodos da função construtora ``Funcionario`` usando o método call. No entanto, ambas as funções sobrescrevem o método ``aumento`` com suas próprias implementações.

```
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
        return _salario;
    }

    this.setSalario = function(valor) {
        if(typeof valor == 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    this.dizCargo = function() {
        console.log(this.cargo)
    }

    Pessoa.call(this, nome);
}

function Estagiario(nome) {
    Funcionario.call(this, nome, 'Estagiario', 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario)
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, 'Gerente', 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario)
    }
}

const funcionario1 = new Funcionario('Maria', 'dev front-end', 5000);
const funcionario2 = new Estagiario('Joao');
const funcionario3 = new Gerente('Bruno');

funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario());

funcionario3.aumento();
console.log(funcionario3.getSalario());
```

A função construtora ``Estagiario`` define o método ``aumento`` para aumentar o valor do atributo ``salario`` em 7%, enquanto a função construtora ``Gerente`` define o método ``aumento`` para aumentar o valor do atributo ``salario`` em 15%.

No exemplo fornecido, são criadas três instâncias de objetos: ``funcionario1``, ``funcionario2`` e ``funcionario3``. O objeto ``funcionario1`` é uma instância da classe Funcionario, enquanto os objetos ``funcionario2`` e ``funcionario3`` são instâncias das classes ``Estagiario`` e ``Gerente``, respectivamente.

Em seguida, o método ``aumento`` é chamado em cada um desses objetos. Como cada objeto tem sua própria implementação do método ``aumento``, o resultado final será diferente para cada objeto. O objeto ``funcionario1`` terá seu atributo ``salario`` aumentado em 10%, enquanto os objetos ``funcionario2`` e ``funcionario3`` terão seus atributos ``salario`` aumentados em 7% e 15%, respectivamente.

Em resumo, neste exemplo, as funções construtoras ``Estagiario`` e ``Gerente`` herdam propriedades e métodos da função construtora ``Funcionario``, mas sobrescrevem o método ``aumento`` com suas próprias implementações. Isso permite que objetos dessas classes sejam tratados como objetos da classe comum ``Funcionario``, mas tenham comportamentos diferentes quando o método ``aumento`` é chamado.

<br>

## ✅ Questionário

Sobre o polimorfismo é correto afirma que:

A- Tem como objetivo permitir que uma mesma atividade tenha diferentes implementações;

B- Tem como objetivo compartilhar atributos e métodos entre as classes;

C- Está disponível no JavaScript através da função super();

D- Está disponível no JavaScript através da palavra reservada override;

Resposta: A afirmação correta é a opção A: o objetivo do polimorfismo é permitir que uma mesma atividade tenha diferentes implementações, dependendo da classe do objeto que está executando a atividade.