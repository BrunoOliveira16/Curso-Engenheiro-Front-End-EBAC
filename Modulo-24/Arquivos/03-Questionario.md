# 📌 Questionário
> Módulo 24: Orientação a Objetos com Java Script

<br>

### Pergunta 1
#### Qual dos pilares da programação orientada a objetos permite criar classes que estendem atributos e métodos de outras classes?
A- encapsulamento

B- polimorfismo

C- herança

D- Todas as opções

<details>
    <summary>Resposta</summary>

    herança

    A alternativa correta é a "herança", pois ela é a que se relaciona diretamente com a capacidade de criar classes que herdam atributos e métodos de outras classes. O encapsulamento é um dos pilares da programação orientada a objetos, mas ele está relacionado com a ideia de esconder os detalhes internos de uma classe e fornecer uma interface pública para interagir com essa classe.
</details>

<br>

### Pergunta 2
#### Como criamos um objeto através do uso de construtores?
A- const joao = Pessoa("João")

B- const joao = Pessoa.new("João")

C- const joao = new Pessoa("João")

D- const joao = Pessoa.create("João")

<details>
    <summary>Resposta</summary>
    
    const joao = new Pessoa("João")

    A sintaxe "new" é usada para criar objetos em várias linguagens, como JavaScript, Java e C#. E a maneira correta de criar objetos usando construtores. "new" é seguido pelo nome do construtor (por exemplo, "Pessoa") e parênteses para argumentos de inicialização. As outras opções estão erradas, pois não seguem a sintaxe padrão para criação de objetos com construtores.
</details>

<br>


### Pergunta 3
#### Sobre o typeof é o incorreto afirmar que:
A- retornará string para typeof “1.54”

B- retornará object para typeof [1, 2, 3]

C- retornará object para typeof new Error()

D- retornará error para typeof new Error()

<details>
    <summary>Resposta</summary>
    
    retornará error para typeof new Error()

    A alternativa d está incorreta. O typeof new Error() retornará "object" e não "error". Em JavaScript, o tipo de um objeto Error é "object", não "error".
</details>

<br>

### Pergunta 4
#### Sobre o acesso a atributos é incorreto afirmar que:
A- São acessíveis através da notação ponto

B- São acessíveis através dos colchetes

C- São passíveis de remoção

D- Não podemos deletar atributos de objetos criados com a palavra const

<details>
    <summary>Resposta</summary>
    
    Não podemos deletar atributos de objetos criados com a palavra const

    A alternativa correta é a opção "Não podemos deletar atributos de objetos criados com a palavra const". Esta afirmação está correta porque em JavaScript, quando um objeto é criado com a palavra-chave "const", a referência para o objeto não pode ser alterada (ou seja, não podemos atribuir um novo objeto a essa variável), mas os atributos do objeto podem ser modificados, incluindo a remoção de atributos usando a função "delete". Portanto, as demais alternativas estão erradas porque os atributos de objetos podem ser acessados tanto através da notação de ponto quanto dos colchetes, e também são passíveis de remoção, independentemente de o objeto ter sido criado com "const".
</details>

<br>

### Pergunta 5
#### Sobre a herança é incorreto afirmar que:
A- Os atributos do construtor pai serão passados para o construtor filho

B- Os métodos do construtor pai serão passados para o construtor filho

C- Os atributos privados do construtor pai NÃO serão passados para o construtor filho

D- Podemos alterar um construtor através da propriedade prototype

<details>
    <summary>Resposta</summary>
    
    Os atributos privados do construtor pai NÃO serão passados para o construtor filho
</details>

<br>

### Pergunta 6
#### Sobre o polimorfismo é correto afirma que:
A- Tem como objetivo compartilhar atributos e métodos entre as classes

B- Tem como objetivo permitir que uma mesma atividade tenha diferentes implementações

C- Está disponível no JavaScript através da palavra reservada override

D- Está disponível no JavaScript através da função super()

<details>
    <summary>Resposta</summary>
    
    Tem como objetivo permitir que uma mesma atividade tenha diferentes implementações

    Esta afirmação está correta porque o polimorfismo, na programação orientada a objetos, permite que um mesmo método ou função possa ser usado com diferentes implementações, dependendo do contexto da chamada. Isso significa que objetos de diferentes classes podem responder de maneira específica a chamadas de método com o mesmo nome, permitindo a flexibilidade e a reutilização do código. As demais alternativas estão erradas porque o polimorfismo não se trata de compartilhar atributos e métodos entre classes (opção a), não envolve a palavra reservada "override" (opção c), e a função "super()" não está diretamente relacionada ao polimorfismo, mas sim à chamada de métodos da classe pai em classes filhas.
</details>

<br>

### Pergunta 7
#### Como podemos unir dois objetos?
A- Object.join(obj1, obj2)

B- Object.concat(obj1, obj2)

C- Object.new(obj1, obj2)

D- Object.assign(obj1, obj2)

<details>
    <summary>Resposta</summary>
    
    Object.assign(obj1, obj2)

    Esta afirmação está correta porque o método Object.assign() é usado em JavaScript para unir dois objetos. Ele copia as propriedades de obj2 para obj1, resultando em um único objeto contendo as propriedades de ambos. As demais alternativas estão incorretas porque não representam a maneira correta de unir objetos em JavaScript. Não existe um método "join" (opção a) ou "concat" (opção b) para objetos, e "Object.new" (opção c) não é uma sintaxe válida para a operação de união de objetos em JavaScript.
</details>