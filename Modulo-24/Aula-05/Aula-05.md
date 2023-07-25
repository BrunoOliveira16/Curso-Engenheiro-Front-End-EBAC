## 📝 Aula 05: Herança
A herança é um conceito fundamental da programação orientada a objetos que permite que uma classe herde propriedades e métodos de outra classe. Isso permite que você crie classes mais específicas com base em classes mais gerais, reutilizando código e evitando duplicação.

No exemplo abaixo, a função ``Pessoa`` é um construtor que pode ser usado para criar objetos do tipo ``Pessoa``. Esses objetos têm um atributo ``nome`` e dois métodos: ``dizOi`` e ``dizCargo``.

A função ``Funcionario`` é outro construtor que pode ser usado para criar objetos do tipo ``Funcionario``. Esses objetos têm três atributos: ``nome``, ``cargo`` e ``salario``. Além disso, a função ``Funcionario`` chama a função Pessoa usando o método ``call``, passando a si mesma (``this``) como o primeiro argumento e o valor do parâmetro ``nome`` como o segundo argumento. Isso faz com que o objeto ``Funcionario`` herde as propriedades e métodos do objeto ``Pessoa``.

```
function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + ' diz olá');
    }
    this.dizCargo = function() {
        console.log(this.cargo)
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    Pessoa.call(this, nome);
}

const pessoa1 = new Pessoa('Maria');
const funcionario1 = new Funcionario('Maria', 'dev front-end', 5000);
funcionario1.dizOi();
funcionario1.dizCargo();


console.log(pessoa1);
console.log(funcionario1);
```

Como resultado, o objeto ``funcionario1``, criado usando a função construtora Funcionario, tem acesso aos métodos dizOi e dizCargo herdados do objeto Pessoa. Portanto, as linhas ``funcionario1.dizOi()`` e ``funcionario1.dizCargo()`` exibirão as mensagens ``'Maria diz olá'`` e ``'dev front-end'``, respectivamente.

Em resumo, neste exemplo, a função construtora ``Funcionario`` herda propriedades e métodos da função construtora ``Pessoa`` usando o método ``call``. Isso permite que os objetos do tipo ``Funcionario`` tenham acesso aos métodos definidos na função construtora ``Pessoa``.

<br>

## ✅ Questionário
Sobre a herança é incorreto afirmar que:

A- Os atributos privados do construtor pai NÃO serão passados para o construtor filho;

B- Podemos alterar um construtor através da propriedade prototype;

C- Os métodos do construtor pai serão passados para o construtor filho;

D- Os atributos do construtor pai serão passados para o construtor filho;

Resposta: A afirmação incorreta é a opção A: os atributos privados do construtor pai não são acessíveis pelo construtor filho.