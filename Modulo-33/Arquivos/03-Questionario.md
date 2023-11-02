# 📌 Questionário
> Módulo 33: React Testing Library

<br>

### Pergunta 1
#### Qual função do Jest utilizamos para criar uma verificação, expectativa?
A- Should

B- ToBe

C- Expect

D- ToExpect

<details>
    <summary>Resposta</summary>

    Expect

    A resposta correta é "Expect". Para criar uma verificação ou expectativa (assertion) no Jest, utilizamos a função expect(). Através dessa função, podemos testar se um determinado valor é igual a outro, se contém certas propriedades, se é uma instância de um objeto específico, entre muitas outras possibilidades.
</details>

<br>

### Pergunta 2
#### O que fazemos com o teste unitário?
A- Simulamos o comportamento do usuário

B- Testamos a menor parte de um código, como uma função ou método de forma isolado;

C- Testamos o comportamento de duas funções ou mais trabalhando juntas;

D- Testamos a capacidade de um servidor, para ver quantas requisições são suportadas por minuto.

<details>
    <summary>Resposta</summary>
    
    Testamos a menor parte de um código, como uma função ou método de forma isolado;

    A resposta correta é "Testamos a menor parte de um código, como uma função ou método de forma isolada." Os testes unitários têm como objetivo verificar o funcionamento correto das partes menores e isoladas de um código, como funções, métodos ou componentes individuais. Eles são projetados para testar o comportamento dessas unidades de código individualmente, garantindo que elas produzam o resultado esperado para diferentes cenários e entradas.
</details>

<br>


### Pergunta 3
#### Qual funcionalidade do React Testing Library importamos para procurar um elemento renderizado?
A- render

B- document

C- screen

D- dom

<details>
    <summary>Resposta</summary>
    
    screen

    A resposta correta é "screen". Para procurar um elemento renderizado usando a React Testing Library, importamos a funcionalidade "screen". A biblioteca Testing Library fornece o objeto "screen" que contém uma série de funções úteis para selecionar elementos renderizados, interagir com eles e realizar verificações em testes.
</details>

<br>

### Pergunta 4
#### Qual é a função do Omit do TypeScript?
A- Adicionar propriedades a um tipo existente

B- Remover propriedades de um tipo

C- Remover propriedades de um objeto

D- Criar um tipo a partir de outro, removendo alguns atributos

<details>
    <summary>Resposta</summary>
    
    Criar um tipo a partir de outro, removendo alguns atributos

    A resposta correta é "Criar um tipo a partir de outro, removendo alguns atributos". Em TypeScript, a função Omit é um utilitário de tipo que permite criar um novo tipo a partir de um tipo existente, excluindo algumas propriedades específicas desse tipo. Em outras palavras, o Omit permite remover propriedades de um tipo para criar um novo tipo que contém apenas as propriedades desejadas.
</details>

<br>

### Pergunta 5
#### Qual função utilizamos para verificar se um elemento foi renderizado?

A- toBeInTheDocument()

B- Screen.toBeInTheDocument()

C- Screen.toContain()

D- toExists()

<details>
    <summary>Resposta</summary>
    
    toBeInTheDocument()

    A resposta correta é "toBeInTheDocument()". Em testes usando a Testing Library, você usa essa função como uma expectativa para verificar se um elemento está presente no DOM (Documento HTML) após a renderização do componente. Essa função retorna true se o elemento estiver no DOM e false se o elemento não for encontrado.
</details>

<br>

### Pergunta 6
#### Qual é a função do Mock Service Worker?

A- Simular ações do usuário

B- Simular envios a APIs

C- Simular respostas de APIs

D- Testar aplicações Redux

<details>
    <summary>Resposta</summary>
    
    Simular respostas de APIs

    A resposta correta é "Simular respostas de APIs". A função principal do Mock Service Worker (MSW) é simular respostas de APIs em ambientes de desenvolvimento ou testes automatizados. Ele intercepta as solicitações de rede feitas pela aplicação e fornece respostas simuladas, controladas pelo desenvolvedor, em vez de fazer chamadas reais para uma API externa.
</details>
