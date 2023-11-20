# 📌 Questionário
> Módulo 27: Visão geral do VueJS

<br>

### Pergunta 1
#### Qual é a extensão de arquivo utilizada pelo VueJS?
A- .vuejs

B- .vuex

C- .v

D- .vue

<details>
    <summary>Resposta</summary>

    .vue

    A alternativa correta é a opção ".vue" porque o Vue.js utiliza arquivos com a extensão ".vue" para organizar seus componentes. Esses arquivos contêm a marcação HTML, código JavaScript e estilos CSS relacionados a um componente Vue específico. As demais alternativas estão erradas, pois não correspondem à extensão de arquivo usada pelo Vue.js.
</details>

<br>

### Pergunta 2
#### Como podemos adicionar uma expressão JS dentro do HTML com VueJS?
A- através da função innerHTML

B- através do uso de {{ }} na expressão que contém o código JS

C- através da função innerText

D- através da função write

<details>
    <summary>Resposta</summary>
    
    através do uso de {{ }} na expressão que contém o código JS

    A alternativa correta é a opção "através do uso de {{ }} na expressão que contém o código JS" porque, no Vue.js, você pode adicionar expressões JavaScript em templates HTML usando a sintaxe de interpolação de Vue, que consiste em colocar o código JavaScript entre chaves duplas duplas ({{ }}). Isso permite que o Vue.js avalie a expressão e exiba o resultado no HTML renderizado. As demais alternativas estão erradas, pois não representam a forma correta de incorporar expressões JavaScript em um template Vue.js.
</details>

<br>


### Pergunta 3
#### Qual a diferença entre v-show e v-if:
A- v-show condiciona a renderização e v-if condiciona exibição

B- v-show quando false aplica display: none v-if quando false aplica visibility: hidden no CSS

C- v-show condiciona a exibição e v-if condiciona a renderização

D- não há diferença

<details>
    <summary>Resposta</summary>
    
    v-show condiciona a exibição e v-if condiciona a renderização

    A resposta correta é " v-show condiciona a exibição e v-if condiciona a renderização", pois com o v-show teremos a alternância entre o display: block e none, o elemento existirá sempre no HTML, porém nem sempre estará visível. Já com o v-if estamos condicionando a renderização, quando a condição for falsa não teremos a presença do elemento no código HTML.
</details>

<br>

### Pergunta 4
#### Como adicionamos um evento a um elemento com VueJS?
A- através de addEventListener

B- na própria tag adicionando @ antes do nome evento

C- na própria tag adicionando "on" antes do nome do evento

D- na própria tag adiciona v- antes do nome do evento

<details>
    <summary>Resposta</summary>
    
    na própria tag adicionando @ antes do nome do evento

    A alternativa correta é a opção "na própria tag adicionando @ antes do nome do evento" porque, em Vue.js, você pode adicionar eventos diretamente a elementos HTML em seu template usando a sintaxe de diretiva de evento. Ao colocar "@" seguido pelo nome do evento desejado, você está associando uma expressão ou nome de método no Vue.js que será executado quando o evento ocorrer. As demais alternativas estão erradas: "através de addEventListener" não é a maneira típica de adicionar eventos no Vue.js, "na própria tag adicionando "on" antes do nome do evento" não segue a sintaxe padrão do Vue.js para eventos, e "na própria tag adiciona v- antes do nome do evento" também não é a sintaxe correta para adicionar eventos em templates Vue.js.
</details>

<br>

### Pergunta 5
#### Qual atributo utilizamos para adicionar uma classe simples em um elemento com VueJS?
A- :class

B- classNam

C- v-class

D- class

<details>
    <summary>Resposta</summary>
    
    class

    A resposta correta é "class". O código de template escrito no VueJS é basicamente HTML, por isso ao termos uma classe simples, estática, utilizamos o atributo class. Caso necessite que uma classe seja adicionada dinamicamente podemos utilizar :class ou v-class.
</details>

<br>

### Pergunta 6
#### Como podemos fazer uma iteração dentro do HTML com VueJS?
A- através da diretiva v-for-in

B- através da diretiva v-loop

C- através da diretiva v-for

D- através da diretiva v-for-of

<details>
    <summary>Resposta</summary>
    
    através da diretiva v-for

    A alternativa correta é a opção "através da diretiva v-for". Esta afirmação está correta porque, no Vue.js, a diretiva "v-for" é usada para fazer iterações em elementos HTML. Ela permite que você renderize uma lista de itens diretamente no template do Vue.js, criando repetições de elementos com base em uma matriz ou objeto. As demais alternativas estão erradas porque não são diretivas válidas no Vue.js para realizar iterações dentro do HTML.
</details>

<br>

### Pergunta 7
#### Como podemos importar um componente no VueJS?
A- através da palavra import dentro da tag template

B- através da palavra use dentro da tag script

C- através da palavra require dentro da tag template

D- através da palavra import dentro da tag script

<details>
    <summary>Resposta</summary>
    
    através da palavra import dentro da tag script

    A alternativa correta é a opção "através da palavra import dentro da tag script". Esta afirmação está correta porque, no Vue.js, para importar um componente, você usa a palavra-chave "import" dentro da seção "script" do componente ou arquivo JavaScript. O "import" é usado para trazer um componente de outro arquivo e torná-lo disponível para uso no componente atual. As demais alternativas estão erradas porque não representam a maneira apropriada de importar componentes no Vue.js. A palavra "import" não é usada dentro da tag "template" (opção a) ou da tag "script" com "use" (opção b), e "require" (opção c) é mais comumente associado ao CommonJS e não é a forma recomendada de importar componentes no Vue.js.
</details>