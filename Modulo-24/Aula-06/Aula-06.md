## 📝 Aula 06: Encapsulamento
O encapsulamento é um conceito fundamental da programação orientada a objetos que permite ocultar os detalhes internos de um objeto e controlar o acesso às suas propriedades e métodos. Isso é feito definindo propriedades e métodos como públicos, privados ou protegidos.

No exemplo abaixo, a função ``Funcionario`` foi modificada para incluir o encapsulamento do atributo ``salario``. Em vez de definir ``salario`` como uma propriedade pública do objeto ``Funcionario``, ele é definido como uma variável local dentro da função construtora ``Funcionario`` usando a palavra-chave ``let``. Isso torna o atributo ``salario`` privado, o que significa que ele só pode ser acessado dentro da função construtora ``Funcionario``.

Para permitir o acesso ao atributo ``salario`` fora da função construtora, foram adicionados dois métodos públicos: ``getSalario`` e ``setSalario``. O método ``getSalario`` retorna o valor do atributo ``salario``, enquanto o método ``setSalario`` permite alterar o valor do atributo ``salario``. No entanto, o método ``setSalario`` inclui uma verificação para garantir que apenas valores numéricos sejam atribuídos ao atributo ``salario``.

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
```

A linha ``funcionario1.setSalario(7000)`` chama o método ``setSalario`` para alterar o valor do atributo ``salario`` do objeto ``funcionario1``. Em seguida, a linha ``console.log(funcionario1.getSalario())`` chama o método ``getSalario`` para exibir o novo valor do atributo ``salario``.

Em resumo, neste exemplo, a função construtora ``Funcionario`` usa encapsulamento para ocultar os detalhes internos do objeto e controlar o acesso ao atributo ``salario``. Isso é feito definindo o atributo como privado e fornecendo métodos públicos para acessá-lo.

<br>

## ✅ Questionário
Como podemos criar atributos privados no JavaScript?

A- utilizando uma variável para criar o atributo e disponibilizando métodos para acessar e manipular a variável;

B- utilizando # antes do nome do atributo;

C- utilizando _ antes do nome do atributo;

D- utilizando a palavra private antes do nome do atributo;

Resposta: A maneira correta de criar atributos privados em JavaScript é a opção A: utilizando uma variável para criar o atributo e disponibilizando métodos para acessar e manipular a variável. Isso pode ser feito definindo uma variável local dentro de uma função construtora e fornecendo métodos públicos para acessar e modificar o valor dessa variável.