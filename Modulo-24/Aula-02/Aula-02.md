## 📝 Aula 02: Criando objetos
### Objetos
Em outras linguagens de programação possuímos classes. Uma ``classe`` é um código que será utilizado para criar os objetos.

Por exemplo, uma classe carro é utilizada para criar um objeto do tipo carro.

**Uma classe será composta por atributos e métodos.**

``Atributos`` são as características que formam o objeto, no exemplo do carro temos como características a cor, modelo, marca, entre outros.

Já os ``métodos`` são as ações que o objeto é capaz de executar, como acelerar e frear.

No JavaScript não possuímos nativamente as classes, mas temos funções construtoras que possuem o mesmo papel, construir objetos.

```
function Carro() {}
```

É uma função normal, por convenção utilizamos a letra maiúscula na primeira letra do nome da função.

Os atributos numa função construtora são passados como argumentos da função e armazenados no próprio contexto do objeto, utilizando a palavra reservada ``this``:

```
function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log('acelerar');
    }
}
```

A diferença de um método com um atributo, é que o ``método tem como valor uma função``.

Para criar um objeto a partir de uma função construtora utilizamos a palavra reservada new, ele irá retornar o objeto construído:

```
const carroDoBruno = new Carro('Onix', 'GM', 2020, 2019);
```

Para acessar os atributos e métodos do objeto criado utilizamos a notação ponto, que nada mais que um ponto com o nome do atributo, depois do nome do objeto:

```
console.log(carroDoBruno.fabricante); //GM
```

<br>

## ✅ Questionário
Como criamos um objeto através do uso de construtores?

A- const joao = Pessoa("João");

B- const joao = new Pessoa("João");

C- const joao = Pessoa.new("João");

D- const joao = Pessoa.create("João");

Resposta: Letra B. Para criar um objeto através do uso de construtores, usamos a palavra-chave new seguida pelo nome da função construtora e quaisquer argumentos necessários entre parênteses.