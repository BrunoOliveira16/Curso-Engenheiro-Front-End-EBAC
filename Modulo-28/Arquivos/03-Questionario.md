# 📌 Questionário
> Módulo 28: Introdução ao React

<br>

### Pergunta 1
#### Como podemos renderizar um conteúdo dinâmico dentro do React, por exemplo: const nome = "Julio":
A- {nome}

B- Utilizando ${nome}

C- echo $nome

D- $nome

<details>
    <summary>Resposta</summary>

    {nome}

    A alternativa correta é a opção "{nome}" porque, no React, você pode renderizar conteúdo dinâmico dentro de componentes utilizando chaves "{}" para incorporar variáveis ou expressões JavaScript no JSX. Portanto, para renderizar o valor da variável "nome" em um componente React, você usaria "{nome}". As demais alternativas estão erradas: "Utilizando ${nome}" não é a sintaxe correta para incorporar variáveis em JSX do React, "echo $nome" parece ser uma sintaxe de PHP, e "$nome" também não é a forma correta de incorporar variáveis em JSX.
</details>

<br>

### Pergunta 2
#### Sobre os componentes é INCORRETO afirmar que:
A- São pequenos pedaços de códigos que podem ser utilizados para compor uma aplicação maior

B- São exportados com a palavra-reserva export

C- São exportados com a palavra-reserva return

D- São compostos por uma junção de JavaScript e XML, conhecido como JSX

<details>
    <summary>Resposta</summary>
    
    São exportados com a palavra-reserva return

    A alternativa correta é a opção "São exportados com a palavra-reserva return" porque os componentes em React não são exportados usando a palavra reservada "return". Em React, os componentes são geralmente definidos como funções ou classes que retornam elementos JSX e, em seguida, exportados usando a palavra reservada "export". As demais alternativas estão corretas: "São pequenos pedaços de códigos que podem ser utilizados para compor uma aplicação maior" descreve a natureza dos componentes, "São exportados com a palavra-reserva export" é uma forma comum de exportar componentes, e "São compostos por uma junção de JavaScript e XML, conhecido como JSX" está correto ao mencionar que os componentes React são frequentemente compostos por JavaScript e JSX (uma extensão do XML).
</details>

<br>


### Pergunta 3
#### O que podemos renderizar listas no React?
A- Através da diretiva v-for

B- Através da direita react-for

C- Através do forEach dentro do return

D- Através do map dentro do return

<details>
    <summary>Resposta</summary>
    
    Através do map dentro do return

    A alternativa correta é a opção "Através do map dentro do return" porque, no React, a forma comum de renderizar listas é utilizando o método map em um array de elementos JSX dentro do return de um componente. O map permite percorrer cada item da lista e criar um elemento JSX para cada item, que é então renderizado. As demais alternativas estão erradas: "diretiva v-for" refere-se à sintaxe do Vue.js para renderizar listas, "react-for" não representa uma diretiva reconhecida no React, e "forEach dentro do return" não é uma prática comum para renderizar listas em React, pois o map é a abordagem preferida.
</details>

<br>

### Pergunta 4
#### Como criamos um arquivo de estilos CSS modules?
A- nomeando o arquivo com o sufixo m.css

B- nomeando o arquivo com o sufixo modulecss

C- nomeando o arquivo com o sufixo com module.css

D- nomeando o arquivo normalmente, com o sufixo .css

<details>
    <summary>Resposta</summary>
    
    nomeando o arquivo normalmente, com o sufixo .css

    A alternativa correta é a opção "nomeando o arquivo normalmente, com o sufixo .css". Em CSS Modules, você cria um arquivo de estilos CSS comum, como faria em CSS tradicional, e, em seguida, ele é automaticamente tratado como um módulo CSS quando você importa e utiliza-o em seu código JavaScript ou TypeScript. As demais alternativas estão erradas, pois não representam a convenção padrão para a criação de arquivos de estilos CSS modules.
</details>

<br>

### Pergunta 5
#### Como podemos criar um useEffect exclusivo para um dado?
a. Passando como argumento da função do useEffect:
```
useEffect((nome) ⇒ {
    console.log("o nome mudou");
})
```
b. Passando como segundo argumento do useEffect:
```
useEffect(() ⇒ {
    console.log("o nome mudou");
}, nome)
```

A- A

B- B

C- Não é possível

D- Passando o dado dentro do array de dependências que é passado como segundo argumento do useEffect.

<details>
    <summary>Resposta</summary>
    
    Passando o dado dentro do array de dependências que é passado como segundo argumento do useEffect.

    A alternativa correta é a opção "Passando o dado dentro do array de dependências que é passado como segundo argumento do useEffect" porque, no React, você pode criar um useEffect exclusivo para um dado controlando as dependências do efeito. Ao passar o dado como parte do array de dependências (segundo argumento do useEffect), o efeito só será acionado quando o dado especificado sofrer alterações.
</details>

<br>

### Pergunta 6
#### Como adicionamos um evento a um elemento com VueJS?
A- Não há

B- Props podem ser mudadas pelo componente que a recebe e o state não pode ser alterado

C- Com props passamos dados de um componente para outro e com state criamos dados mutáveis dentro do componente

D- Props estão disponíveis no React e só temos o state no VueJS

<details>
    <summary>Resposta</summary>
    
    Com props passamos dados de um componente para outro e com state criamos dados mutáveis dentro do componente;

    A alternativa correta é a opção "Com props passamos dados de um componente para outro e com state criamos dados mutáveis dentro do componente" porque descreve corretamente a diferença entre "props" e "state" no Vue.js (e também no React). Com "props", você passa dados de um componente pai para um componente filho, enquanto o "state" é usado para criar dados mutáveis dentro do próprio componente. As demais alternativas estão erradas: "Não há" está incorreta, pois é possível adicionar eventos a elementos com Vue.js; " Props podem ser mudadas pelo componente que a recebe e o state não pode ser alterado" não está relacionada à adição de eventos, mas sim à diferenciação entre "props" e "state"; e "Props estão disponíveis no React e só temos o state no VueJS" está incorreta, pois tanto React quanto Vue.js suportam "props" e "state", com propósitos semelhantes.
</details>