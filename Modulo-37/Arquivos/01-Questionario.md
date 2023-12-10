# 📌 Questionário
> Módulo 37: Projeto 6 - Part 3

<br>

### Pergunta 1
#### Em qual objeto dentro da função createSlice, criamos as ações do estado?
A- actions

B- reducers

C- functions

D- slice

<details>
    <summary>Resposta</summary>

    reducers

    Dentro da função createSlice do Redux Toolkit, as ações do estado são criadas no objeto reducers. A função createSlice é um dos utilitários fornecidos pelo Redux Toolkit e é usada para criar um conjunto de ações e reducers relacionados para gerenciar uma parte específica do estado global da aplicação. Essa função retorna um objeto que contém os reducers e as ações relacionadas.
</details>

<br>

### Pergunta 2
#### Em qual objeto temos acesso aos dados retornados pela requisição utilizando o RTK Query?
A- response

B- json

C- data

D- request

<details>
    <summary>Resposta</summary>
    
    data

    A resposta correta é "data". Esse objeto é retornado como parte da resposta da requisição e contém os dados retornados pelo servidor após a operação de busca ou mutação.
</details>

<br>


### Pergunta 3
#### "Qual valor da propriedade justify-content utilizamos para posicionar os elementos a partir do final da flex-box?"
A- start

B- end

C- space-between

D- flex-end

<details>
    <summary>Resposta</summary>
    
    flex-end

    A resposta correta é flex-end. Quando justify-content é definido como flex-end, os elementos dentro do contêiner flex são alinhados ao final do eixo principal da flexbox, que é geralmente da esquerda para a direita para direção row ou de cima para baixo para direção column. Os elementos restantes são distribuídos antes dos elementos posicionados ao final.
</details>

<br>

### Pergunta 4
#### Através de qual hook do react-redux podemos acessar aos dados da Store do Redux?
A- useData

B- useStore

C- useSelector

D- useState

<details>
    <summary>Resposta</summary>
    
    useSelector

    A alternativa correta é a opção "useSelector" porque o useSelector é o hook do react-redux usado para acessar os dados da Store do Redux em componentes React. Ele permite que os componentes se inscrevam seletivamente a partes específicas do estado global da Store e sejam atualizados automaticamente quando esses dados mudam. As demais alternativas estão erradas: "useData" e "useState" não são hooks do react-redux, e "useStore" não é o hook correto para acessar dados da Store.
</details>

<br>

### Pergunta 5
#### Qual método de array não possui retorno
A- foreach

B- map

C- filter

D- some

<details>
    <summary>Resposta</summary>
    
    foreach

    O método de array que não possui retorno é o "foreach." Diferentemente dos outros métodos mencionados, como "map," "filter," e "some," que retornam um novo array ou um valor booleano, o método "forEach" é usado principalmente para iterar sobre os elementos do array, mas não gera um novo array como resultado, nem retorna algum valor específico. Em vez disso, ele executa uma função de callback em cada elemento do array, sem criar um novo array ou um resultado direto. Portanto, o "forEach" é útil principalmente para efeitos colaterais, como a atualização do estado interno do componente ou a realização de ações específicas em cada item do array.
</details>

<br>

### Pergunta 6
#### Com a propriedade gap do CSS, definimos:
A- o espaçamento entre linhas

B- o espaçamento entre linhas e colunas

C- o espaçamento entre colunas

D- o espaçamento entre containers

<details>
    <summary>Resposta</summary>
    
    o espaçamento entre linhas e colunas

    A resposta correta é espaçamento entre linhas e coluna. A propriedade gap pode receber um ou dois valores, representando o espaçamento vertical (entre as linhas) e o espaçamento horizontal (entre as colunas), respectivamente. Quando apenas um valor é fornecido, ele é usado tanto para o espaçamento vertical quanto para o horizontal.
</details>