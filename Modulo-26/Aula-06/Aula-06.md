## 📝 Aula 06: Orientação a Objetos
A Programação Orientada a Objetos (POO) é um paradigma de programação que permite aos desenvolvedores estruturar seus programas em termos de objetos e suas interações. O TypeScript é um superconjunto do JavaScript criado pela Microsoft que adiciona recursos como tipagem estática e orientação a objetos ao JavaScript.

Com o TypeScript, é possível utilizar os conceitos de POO, como classes, interfaces, herança, encapsulamento, abstração e polimorfismo, para criar programas mais estruturados e reutilizáveis. Por exemplo, você pode definir uma classe ``Aluno`` com propriedades como ``nome, cursos e idade``, e métodos para manipular essas propriedades. Você também pode definir uma interface ``Pessoa`` que especifica quais propriedades e métodos uma classe deve implementar para ser considerada uma pessoa.

Aqui está um exemplo de como você pode usar classes e interfaces no TypeScript para implementar POO:

```
interface Pessoa {
    nome: string;
    idade: number;
}

class Aluno implements Pessoa {
    nome: string;
    cursos: string[];
    idade: number;

    constructor(nome: string, idade: number, cursos: string[]) {
        this.nome = nome;
        this.idade = idade;
        this.cursos = cursos;
    }

    exibirCursos() {
        console.log(this.cursos);
    }
}

const aluno1 = new Aluno('João', 30, ['Front-end', 'UX/UI']);
aluno1.exibirCursos(); // ['Front-end', 'UX/UI']
```

Neste exemplo, a interface ``Pessoa`` define duas propriedades: ``nome e idade``. A classe Aluno implementa a interface ``Pessoa`` e adiciona uma propriedade adicional chamada ``cursos``. A classe também define um construtor para inicializar as propriedades do objeto e um método chamado ``exibirCursos`` para exibir os cursos do aluno.

Um objeto do tipo ``Aluno`` é criado usando o operador ``new`` e passando os valores para o construtor. O método ``exibirCursos`` é chamado no objeto para exibir os cursos do aluno.

Em resumo, o TypeScript permite que você use os conceitos de POO para criar programas mais estruturados e reutilizáveis. Você pode definir classes e interfaces para representar objetos e suas interações, e usar recursos como herança, encapsulamento, abstração e polimorfismo para criar programas mais flexíveis e fáceis de manter.

### modificadores de acesso

- ``public``: Propriedades e métodos públicos são acessíveis em todos os lugares. Eles podem ser acessados tanto dentro quanto fora da classe. Por padrão, todas as propriedades e métodos são públicos se nenhum modificador de acesso for especificado.

- ``private``: Propriedades e métodos privados são acessíveis apenas dentro da classe em que são definidos. Eles não podem ser acessados fora da classe ou por classes derivadas.

- ``protected``: Propriedades e métodos protegidos são acessíveis dentro da classe em que são definidos e por classes derivadas. Eles não podem ser acessados fora da classe ou por instâncias da classe.

- ``static``: Propriedades e métodos estáticos pertencem à classe em si, não às instâncias da classe. Eles podem ser acessados usando o nome da classe, mas não podem ser acessados a partir de uma instância da classe.

Em resumo, os modificadores de acesso permitem controlar a visibilidade das propriedades e métodos de uma classe. Você pode usar os modificadores ``public, private, protected e static`` para especificar quem pode acessar as propriedades e métodos de uma classe. 

<br>

## ✅ Questionário
Qual afirmação a seguir descreve corretamente os modificadores de acesso, de forma respectiva: publico, privado, protegido, estático?

A- Acessível em todos os lugares, acessível dentro da classe e nas herdeiras, acessível dentro da classe, acessível dentro da classe e da instância

B- Acessível em todos os lugares, acessível dentro da classe, acessível dentro da classe e das herdeiras, acessível apenas pelo nome da classe - não na instância

C- Acessível em todos os lugares, acessível dentro da classe, acessível dentro da classe e das herdeiras, acessível dentro da classe e da instância

D- Acessível em todos os lugares, acessível nas instâncias, acessível dentro da classe e das herdeiras, acessível dentro da classe e da instância

Resposta: A resposta correta é a letra B. Os modificadores de acesso em TypeScript são usados para controlar a visibilidade das propriedades e métodos de uma classe.