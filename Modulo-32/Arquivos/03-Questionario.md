# 📌 Questionário
> Módulo 32: Projeto 5 - Parte 2

<br>

### Pergunta 1
#### Qual método não está disponível na manipulação de arrays?
A- filter

B- find

C- findIndex

D- count

<details>
    <summary>Resposta</summary>

    count

    Esta afirmação está correta porque, nas operações padrão de manipulação de arrays em JavaScript, não existe um método chamado "count". Os métodos "filter", "find" e "findIndex" são comumente usados para filtrar, encontrar elementos e encontrar índices de elementos em um array, respectivamente. Por outro lado, "count" não faz parte das operações padrão de arrays em JavaScript e, portanto, as demais alternativas estão erradas.
</details>

<br>

### Pergunta 2
#### O que podemos informar como segundo argumento para a função useEffect?
A- um objeto contendo as dependências do efeito colateral

B- um array contendo as dependências do efeito colateral

C- um boolean informando se deverá atualizar o estado ou não

D- uma string que será chamada após a execução do useEffect

<details>
    <summary>Resposta</summary>
    
    um array contendo as dependências do efeito colateral

    Esta afirmação está correta porque, ao usar o hook useEffect em React, o segundo argumento é um array de dependências. Quando as dependências listadas nesse array mudam entre renderizações, o efeito colateral será acionado. Isso permite controlar quando o efeito deve ser executado com base nas mudanças específicas que você deseja observar. As demais alternativas estão erradas: um objeto (opção a) não é usado como segundo argumento para o useEffect, um booleano (opção c) não é usado dessa maneira e uma string (opção d) não é um tipo de argumento válido para o useEffect no React.
</details>

<br>


### Pergunta 3
#### Sobre o disparo de ações do Redux está correto afirmar que:
A- Podem ser feitos em qualquer componente, mesmo fora do componente Provider

B- A função action creator deve ser chamada dentro da função dispatch, retornada pelo useState

C- A função action creator deve ser chamada dentro da função dispatch, retornada pelo useDispatch

D- Está disponível apenas com o Redux Toolkit

<details>
    <summary>Resposta</summary>
    
    A função action creator deve ser chamada dentro da função dispatch, retornada pelo useDispatch

    A resposta correta é "A função action creator deve ser chamada dentro da função dispatch, retornada pelo useDispatch.". No Redux, as ações (actions) são objetos JavaScript que descrevem uma intenção de mudança de estado na aplicação. Para que as ações tenham efeito, elas precisam ser despachadas (dispatched) por meio de uma função chamada "dispatch". Essa função é responsável por enviar a ação para o store do Redux, permitindo que o estado da aplicação seja atualizado de acordo com a ação despachada. Quando estamos utilizando o React com o Redux, podemos utilizar o hook useDispatch fornecido pela biblioteca react-redux para obter acesso à função dispatch. Dessa forma, podemos chamar as action creators (criadoras de ação) dentro da função dispatch.
</details>

<br>

### Pergunta 4
#### Como podemos aceitar mais de um tipo no TypeScript?
A- Através da palavra or

B- Através do simbolo &&

C- Através do simbolo |

D- Através do simbolo ?

<details>
    <summary>Resposta</summary>
    
    Através do simbolo |

    A resposta correta é "Através do símbolo |". Em TypeScript, podemos aceitar mais de um tipo para uma variável, parâmetro de função ou propriedade de objeto utilizando a sintaxe de Union Type (união de tipos) representada pelo símbolo | (barra vertical).
</details>

<br>

### Pergunta 5
#### Em qual atributo informamos o caminho da rota no React Router?
A- path

B- to

C- address

D- location

<details>
    <summary>Resposta</summary>
    
    path

    A resposta correta é "path". No React Router, o atributo utilizado para informar o caminho da rota é path. Quando você define uma rota usando o componente Route, você especifica o caminho desejado através da propriedade path.
</details>

<br>

### Pergunta 6
#### Através de qual componente criamos links entre páginas com o React Router?
A- A

B- Anchor

C- Link

D- To

<details>
    <summary>Resposta</summary>
    
    Link

    A resposta correta é "Link". Através do componente Link fornecido pela biblioteca react-router-dom, criamos links entre páginas com o React Router. O Link é usado para criar links de navegação em aplicações React com roteamento, e permite a navegação entre diferentes rotas sem recarregar a página inteira, tornando a experiência de navegação mais suave e rápida em uma Single Page Application (SPA).
</details>

<br>

### Pergunta 7
#### Com qual atributo relacionamos uma tab label com um campo de formulário?
A- for

B- htmlFor

C- v-for

D- reactForm

<details>
    <summary>Resposta</summary>
    
    htmlFor

    A opção correta "htmlFor". Para relacionar uma tab label com um campo de formulário em HTML, você usa o atributo for no elemento <label>. No entanto, quando se trata de JSX/React, é necessário usar htmlFor (observe que a letra "f" é minúscula).
</details>

<br>

### Pergunta 8
#### Através de qual atributo do input checkbox verificamos se ele foi marcado ou não?
A- target.value

B- detail.checked

C- target.checked

D- detail.value

<details>
    <summary>Resposta</summary>
    
    target.checked

    A opção correta é "target.checked". Para verificar se um input checkbox foi marcado ou não em um evento em JavaScript ou React, podemos usar o atributo checked do objeto event.target. O evento pode ser um evento DOM padrão em JavaScript ou um evento sintético gerado pelo React.
</details>

<br>

### Pergunta 9
#### Como inserimos expressões JavaScript em uma template string
A- através do uso de $ antes da expressão

B- através do uso de ${ antes da expressão e fechando ela com }

C- através do uso de { antes e } depois da expressão

D- através do uso de $ depois da expressão

<details>
    <summary>Resposta</summary>
    
    através do uso de ${ antes da expressão e fechando ela com }

    A resposta correta é "Através do uso de ${ antes da expressão e fechando ela com }". Em JavaScript, quando usamos template strings (ou template literals), podemos inserir expressões JavaScript dentro do template utilizando a sintaxe ${expressao}. As expressões dentro das chaves ${} serão avaliadas e o resultado será incluído na string resultante.
</details>