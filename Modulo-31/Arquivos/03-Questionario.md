# 📌 Questionário
> Módulo 31: Projeto 5 - To do List

<br>

### Pergunta 1
#### Qual é a função do Redux no ecossistema React
A- criar componentes estilizados

B- criar sites responsivos

C- auxiliar a criação de aplicações leves

D- auxiliar a gestão do estado permitindo o compartilhamento entre diversos componentes

<details>
    <summary>Resposta</summary>

    auxiliar a gestão do estado permitindo o compartilhamento entre diversos componentes

    A função do Redux no ecossistema React é auxiliar na gestão do estado da aplicação. O Redux armazena o estado global da aplicação em uma única árvore de estado (state tree) em vez de espalhá-lo por diversos componentes. Isso facilita o compartilhamento do estado entre diferentes partes da aplicação e torna o gerenciamento do estado mais fácil de entender e depurar.
</details>

<br>

### Pergunta 2
#### Qual é a função do fragmento no React?
A- Criar elementos semânticos

B- Possibilitar o retorno de mais de uma tag

C- Criar um componente conectado ao estado

D- Otimizar a performance dos componentes

<details>
    <summary>Resposta</summary>
    
    Possibilitar o retorno de mais de uma tag

    A resposta correta é "Possibilitar o retorno de mais de uma tag". No React, um fragmento (também conhecido como "React fragment" ou "fragmento do React") é uma estrutura que permite retornar vários elementos adjacentes sem a necessidade de envolvê-los em uma única tag como uma <div>, <span> ou qualquer outro elemento HTML. É uma maneira de agrupar uma lista de elementos sem introduzir um nó adicional no DOM.
</details>

<br>


### Pergunta 3
#### Como informamos ao React com TypeScript que uma propriedade é opcional?
A- Adicionando a interrogação depois do nome da propriedade

B- Adicionando a palavra reserva optional antes do nome da propriedade

C- Utilizando o tipo any

D- Utilziando o tipo optional

<details>
    <summary>Resposta</summary>
    
    Adicionando a interrogação depois do nome da propriedade

    A resposta correta é "Adicionando a interrogação depois do nome da propriedade." Em TypeScript, para informar ao React que uma propriedade é opcional em um componente, você adiciona uma interrogação ? após o nome da propriedade na definição da interface ou tipo de propriedades do componente. Isso indica que a propriedade não é obrigatória e pode ser omitida na chamada do componente.
</details>

<br>

### Pergunta 4
#### Como podemos limitar o conteúdo de um container com base na altura e adicionar um scroll para visualizar o conteúdo restante?
A- através da propriedade overflow-x

B- através da propriedade max-height

C- através da propriedade overflow-y

D- através da propriedade overflow-both

<details>
    <summary>Resposta</summary>
    
    através da propriedade overflow-y

    A resposta correta é "Adicionando a interrogação depois do nome da propriedade." Em TypeScript, para informar ao React que uma propriedade é opcional em um componente, você adiciona uma interrogação ? após o nome da propriedade na definição da interface ou tipo de propriedades do componente. Isso indica que a propriedade não é obrigatória e pode ser omitida na chamada do componente.
</details>

<br>

### Pergunta 5
#### Como podemos desestruturar as propriedades de um objeto?
A- Através do uso dos colchetes, const [nome, idade] = pessoa

B- Através do uso da palavra import, import {nome, idade} from pessoa

C- Através do uso das chaves, const { nome, idade } = pessoa

D- Através do uso da palavra require, require([nome, idade]) = pessoa

<details>
    <summary>Resposta</summary>
    
    Através do uso das chaves, const { nome, idade } = pessoa

    A resposta correta é " Através da propriedade overflow-y". Para limitar o conteúdo de um container com base na altura e adicionar um scroll para visualizar o conteúdo restante, você pode usar a propriedade CSS overflow-y. Ela é usada para controlar o comportamento de estouro (overflow) vertical de um elemento. Ela define o que acontece quando o conteúdo de um elemento excede sua altura definida. Ao definir overflow-y: auto; ou overflow-y: scroll; para um container com altura limitada, o navegador adicionará uma barra de rolagem vertical quando o conteúdo exceder o tamanho do container, permitindo que o usuário role para ver o conteúdo que não está visível.
</details>

<br>

### Pergunta 6
#### Através de qual componente utilizamos o estado do Redux?
A- useState

B- Provider de Styled Components

C- Provider do Redux Toolkit

D- Provider do react-redux

<details>
    <summary>Resposta</summary>
    
    Provider do react-redux

    A resposta correta é "Através do uso das chaves, const { nome, idade } = pessoa". A desestruturação de objetos é uma funcionalidade do JavaScript que permite extrair propriedades de um objeto e atribuí-las a variáveis individuais. Isso facilita o acesso aos valores do objeto de forma mais concisa e legível. Para desestruturar as propriedades de um objeto, você utiliza chaves {} e atribui os nomes das propriedades desejadas a variáveis com o mesmo nome.
</details>

<br>

### Pergunta 7
#### Como aplicamos a tipagem a um elemento do Styled Components?
a - Informando o tipo no retorno da construção do componente:
```
const botao = styled.button``<Props>{}
```

b - Através do casting
```
const botao as Props = styled.button``
```

c - Informando o tipo após o nome da tag
```
const botao = styled.button<Props>``
```

d - Informando o tipo após o objeto styled
```
const botao = styled<Props>.button``
```
A- A

B- B

C- C

D- D

<details>
    <summary>Resposta</summary>
    
    C
</details>

<br>

### Pergunta 8
#### Qual é a sintaxe correta para criar um enum no TypeScript?
a -
```
enum Status = {
PENDENTE,
EM_ANDAMENTO,
CONCLUIDO,
}
```

b -
```
enum Status {
PENDENTE: 1,
EM_ANDAMENTO: 2,
CONCLUIDO: 3,
}
```

c -
```
enum Status {
PENDENTE = 1,
EM_ANDAMENTO = 2,
CONCLUIDO = 3,
}
```

d -
```
enum Status = {
PENDENTE: 1,
EM_ANDAMENTO: 2,
CONCLUIDO: 3,
}
```
A- A

B- B

C- C

D- D

<details>
    <summary>Resposta</summary>
    
    A opção correta é:
    ```
    enum Status {
    PENDENTE = 1,
    EM_ANDAMENTO = 2,
    CONCLUIDO = 3,
    }
    ```

    Nesta sintaxe, estamos criando um enum chamado Status, onde cada membro do enum é atribuído a um valor numérico específico. Quando os valores não são explicitamente definidos, eles começam a partir de 0 e aumentam em ordem crescente. Os membros do enum Status são explicitamente definidos com valores numéricos. Por exemplo, PENDENTE é associado ao valor 1, EM_ANDAMENTO ao valor 2 e CONCLUIDO ao valor 3.
</details>

<br>

### Pergunta 9
#### Com qual propriedade CSS podemos adicionar um espaçamento entre colunas e linhas?
A- column-gap

B- row-gap

C- grid-gap

D- Nenhuma das anteriores

<details>
    <summary>Resposta</summary>
    
    grid-gap

    A resposta correta é "grid-gap". Para adicionar espaçamento entre colunas e linhas em um layout de grade (grid) no CSS, podemos usar a propriedade grid-gap. Essa propriedade permite definir o espaçamento entre as células de uma grade, tanto na direção das colunas (espaçamento entre colunas) quanto na direção das linhas (espaçamento entre linhas).
</details>