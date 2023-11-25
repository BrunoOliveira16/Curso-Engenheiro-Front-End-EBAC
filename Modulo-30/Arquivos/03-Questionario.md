# 📌 Questionário
> Módulo 30: Introdução ao Redux com React

<br>

### Pergunta 1
#### Em qual camada da arquitetura Flux podemos atualizar o estado?
A- dispatcher

B- view

C- action

D- store

<details>
    <summary>Resposta</summary>

    store

    A alternativa correta é a opção "store" porque, na arquitetura Flux, a camada responsável por atualizar o estado da aplicação é a camada de Store. As Stores armazenam e gerenciam o estado da aplicação e respondem às Actions despachadas pela View, atualizando o estado conforme necessário. As demais alternativas estão erradas: "dispatcher" se refere ao Dispatcher, que é responsável por encaminhar as Actions para as Stores; "view" se refere à View, que é responsável por apresentar a interface do usuário; e "action" se refere às Actions, que representam eventos que ocorrem na aplicação e são despachadas para as Stores atualizarem o estado.
</details>

<br>

### Pergunta 2
#### Qual é o nome do componente obrigatório para utilizar o Redux numa aplicação React?
A- Provider

B- Store

C- Redux Provider

D- Dispatcher

<details>
    <summary>Resposta</summary>
    
    Provider

    A alternativa correta é a opção "Provider" porque, para utilizar o Redux em uma aplicação React, é necessário envolver a árvore de componentes com o componente <Provider> fornecido pelo Redux. O <Provider> garante que todos os componentes da aplicação tenham acesso ao estado global (store) do Redux, tornando-o disponível para as actions e reducers em qualquer parte da árvore de componentes. As demais alternativas estão incorretas: "Store" não é o componente obrigatório para utilizar o Redux, "Redux Provider" não é o nome correto do componente, e "Dispatcher" se refere ao Dispatcher, que não é um componente, mas sim uma parte do padrão Flux.
</details>

<br>


### Pergunta 3
#### Como utilizamos props no React?
A- Utilizando o prefixo v- antes do nome do atributo

B- Utilizando o prefixo r- antes do nome do atributo

C- Através de atributos nas tags

D- Utilizando os dois pontos : antes do nome do atributo

<details>
    <summary>Resposta</summary>
    
    Através de atributos nas tags

    A alternativa correta é a opção "Através de atributos nas tags". No React, as props (propriedades) são passadas para um componente como atributos nas tags JSX quando o componente é renderizado. Você define as props diretamente no componente pai ao atribuir valores a esses atributos na tag do componente filho. As demais alternativas estão erradas, pois não representam a maneira correta de passar props no React.
</details>

<br>

### Pergunta 4
#### Qual é o retorno de uma action creator?
A- um objeto action

B- o estado atualizado

C- um booleano

D- não tem retorno

<details>
    <summary>Resposta</summary>
    
    um objeto action

    A alternativa correta é a opção "um objeto action" porque uma action creator, em geral, é uma função que retorna um objeto action. Esse objeto action contém informações sobre a ação que está ocorrendo, como o tipo da ação e, frequentemente, os dados associados a ela. As demais alternativas estão erradas: "o estado atualizado" não é o retorno padrão de uma action creator, "um booleano" não é apropriado, pois uma action creator não costuma retornar um booleano diretamente, e "não tem retorno" está incorreta, pois as action creators retornam objetos action.
</details>

<br>

### Pergunta 5
#### Qual a diferença entre props e state?
A- não há

B- para criar uma prop utilizamos o useProps e para state utilizamos useState

C- as props são internas já o state é um valor que recebemos via atributos

D- o state é interno já as props são passadas via atributos

<details>
    <summary>Resposta</summary>
    
    o state é interno já as props são passadas via atributos

    A alternativa correta é a opção "o state é interno, enquanto as props são passadas via atributos". A principal diferença entre props (propriedades) e state (estado) no React é que as props são valores passados de um componente pai para um componente filho através de atributos HTML-like, enquanto o state é um objeto de dados que pertence internamente a um componente e pode ser modificado dentro do próprio componente. As demais alternativas estão incorretas: "não há" está errada porque há uma diferença fundamental entre props e state, "para criar uma prop utilizamos o useProps e para state utilizamos useState" menciona o uso de useProps, que não é uma função padrão do React, e "as props são internas já o state é um valor que recebemos via atributos" está incorreta, pois não descreve com precisão a diferença entre props e state.
</details>

<br>

### Pergunta 6
#### No reducer por onde podemos acessar argumentos das actions?
A- através da propriedade action do argumento payload

B- através da propriedade payload do argumento action

C- através da função getState()

D- através do hook useSelecto()

<details>
    <summary>Resposta</summary>
    
    através da propriedade payload do argumento action

    A alternativa correta é a opção "através da propriedade payload do argumento action" porque, em um reducer no Redux (ou em uma estrutura semelhante), você pode acessar os argumentos das actions por meio da propriedade payload do objeto action. As actions geralmente carregam os dados relevantes em seu campo payload, e o reducer usa essa propriedade para acessar esses dados e atualizar o estado da aplicação de acordo. As demais alternativas estão incorretas: "através da propriedade action do argumento payload" menciona uma estrutura que não é padrão em Redux, "através da função getState()" está relacionada à obtenção do estado atual e "através do hook useSelecto()" se refere a uma função do Redux Toolkit que não é usada dentro de um reducer.
</details>

### Pergunta 7
#### Através de qual função temos acesso ao dispatch?
A- useDispatch do pacote redux

B- useDispatch do pacote @reduxjs/toolkit

C- useDispatch do pacote react-redux

D- useDispatch importado do reducer

<details>
    <summary>Resposta</summary>
    
    useDispatch do pacote react-redux

    A alternativa correta é a opção "useDispatch do pacote react-redux" porque, ao utilizar o Redux com o React, o acesso à função dispatch é feito por meio da função useDispatch fornecida pelo pacote react-redux. Essa função permite que os componentes React acessem o dispatch para despachar actions para a store do Redux. As demais alternativas estão incorretas: "useDispatch do pacote redux" menciona o pacote Redux, mas não inclui o pacote react-redux necessário para a integração com o React, "useDispatch do pacote @reduxjs/toolkit" menciona o pacote Redux Toolkit, que também não é responsável por fornecer a função useDispatch e "useDispatch importado do reducer" não é uma abordagem comum para acessar o dispatch em componentes React.
</details>

### Pergunta 8
#### Sobre o redux toolkit query podemos afirmar que:
A- Precisa ser implementado junto com outro reducer

B- Não precisar ser configurado com a store

C- Está disponível apenas com o React utilizando o TypeScript

D- Com o createApi teremos também a criação dos reducers para os dados da requisição

<details>
    <summary>Resposta</summary>
    
    Com o createApi teremos também a criação dos reducers para os dados da requisição

    A alternativa correta é a opção "Com o createApi, teremos também a criação dos reducers para os dados da requisição" porque o Redux Toolkit Query é uma parte do Redux Toolkit que simplifica a gestão de dados assíncronos em aplicações React com Redux. Quando você utiliza o createApi, ele cria não apenas os endpoints de uma API, mas também os reducers, actions e selectors relacionados aos dados da requisição, tornando a configuração e o uso mais simplificados. As demais alternativas estão incorretas: "Precisa ser implementado junto com outro reducer" não é necessário implementar junto com outro reducer, "Não precisar ser configurado com a store" requer configuração com a store, e "Está disponível apenas com o React utilizando o TypeScript" não é restrito ao TypeScript ou ao React.
</details>