## 📝 Aula 07: Orientações a Objetos com ES6
Orientação a Objetos é um paradigma de programação que permite modelar conceitos do mundo real em termos de classes e objetos. O ECMAScript 6 (ES6), também conhecido como ECMAScript 2015, introduziu várias melhorias na sintaxe para trabalhar com classes e objetos em JavaScript.

Antes do ES6, a criação de classes em JavaScript era feita através de funções construtoras e protótipos. Com o ES6, foi introduzida a sintaxe de classe, que permite definir classes de maneira mais clara e concisa. Aqui está um exemplo de uma classe ``Carro`` definida usando a sintaxe de classe do ES6:

```
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  acelerar() {
    console.log('Vrum Vrum!');
  }
}

const meuCarro = new Carro('Ford', 'Mustang', 1969);
meuCarro.acelerar(); // Vrum Vrum!
```

A classe ``Carro`` possui um método construtor que é chamado quando criamos uma nova instância da classe usando a palavra-chave ``new``. O construtor recebe os argumentos ``marca``, ``modelo`` e ``ano`` e os atribui às propriedades correspondentes do objeto criado.

A classe também possui um método ``acelerar`` que pode ser chamado em qualquer instância da classe ``Carro``. No exemplo acima, criamos uma instância da classe ``Carro`` chamada ``meuCarro`` e chamamos o método ``acelerar``, que imprime ``“Vrum Vrum!”`` no console.

### Herança
No ES6, você pode herdar de uma classe usando a palavra-chave extends. Aqui está um exemplo que ilustra como criar uma subclasse CarroEletrico que herda da classe Carro que definimos anteriormente:

```
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  acelerar() {
    console.log('Vrum Vrum!');
  }
}

class CarroEletrico extends Carro {
  constructor(marca, modelo, ano, autonomia) {
    super(marca, modelo, ano);
    this.autonomia = autonomia;
  }

  recarregar() {
    console.log('Recarregando...');
  }
}

const meuCarroEletrico = new CarroEletrico('Tesla', 'Model S', 2022, 400);
meuCarroEletrico.acelerar(); // Vrum Vrum!
meuCarroEletrico.recarregar(); // Recarregando...
```

A classe ``CarroEletrico`` herda todas as propriedades e métodos da classe Carro através do uso da palavra-chave ``extends``. Isso significa que podemos chamar o método ``acelerar`` na instância ``meuCarroEletrico`` da classe ``CarroEletrico``, mesmo que esse método esteja definido na classe ``Carro``.

A classe ``CarroEletrico`` também possui um método construtor que recebe os argumentos ``marca``, ``modelo``, ``ano`` e ``autonomia``. Dentro do construtor, chamamos o construtor da classe base (no caso, a classe ``Carro``) usando a palavra-chave ``super``. Isso é necessário para inicializar corretamente as propriedades herdadas da classe base.

Além disso, a classe ``CarroEletrico`` possui um método adicional chamado ``recarregar``, que é específico para carros elétricos.

<br>

## ✅ Questionário
Como podemos declarar um membro privado de uma classe?

A- Utilizando a palavra reservada private;

B- Utilizando # antes do nome do atributo ou método;

C- Utilizando static antes do nome do atributo ou método;

D- Utilizando _ antes do nome do atributo ou método;

Resposta: A afirmação correta é a letra B. No ES6, podemos declarar um membro privado de uma classe usando # antes do nome do atributo ou método. Isso garante que o membro só possa ser acessado dentro da classe e não possa ser acessado de fora da classe.