# 📌 Questionário
> Módulo 25: Recursos do ES6

<br>

### Pergunta 1
#### Sobre o Babel, qual afirmação a seguir é incorreta?
A- O Babel pode ser utilizado no navegador;

B- O Babel pode ser utilizado através da linha de comando;

C- O Babel compila código JavaScript para um arquivo de formato diferente;

D- O Babel compila código JavaScript para um outro código JavaScript compatível com mais dispositivos

<details>
    <summary>Resposta</summary>

    O Babel compila código JavaScript para um arquivo de formato diferente;

    Esta afirmação está incorreta porque o Babel não compila código JavaScript para um arquivo de formato diferente, mas sim para outro código JavaScript. O Babel é uma ferramenta de transpilação que transforma código JavaScript moderno (usando recursos mais recentes da linguagem) em código JavaScript compatível com versões mais antigas da linguagem, permitindo que ele seja executado em uma variedade de dispositivos e navegadores. As demais alternativas estão corretas: o Babel pode ser utilizado no navegador, através da linha de comando, e seu principal propósito é compilar código JavaScript para torná-lo compatível com mais dispositivos.
</details>

<br>

### Pergunta 2
#### Qual será o retorno do método find quando ele não encontrar um item que atenda ao critério utilizado?
A- undefined

B- null

C- 0

D- false

<details>
    <summary>Resposta</summary>
    
    undefined

    A resposta correta é "undefined", pois ao utilizar o método find para procurar um item no array teremos duas saídas possíveis.
    Caso a condição seja atendida teremos o retorno do item encontrado, caso não seja atendida teremos o retorno "undefined".
</details>

<br>


### Pergunta 3
#### Sobre as arrows functions é correto afirmar:
A- Não podem receber mais de um parâmetro

B- Possuem o mesmo escopo de uma função tradicional

C- Podemos usar uma arrow function junto com os métodos apply, call e bind

D- Nenhuma das alternativas.

<details>
    <summary>Resposta</summary>
    
    Nenhuma das alternativas.

    A resposta correta é a "Nenhuma das alternativas", pois as arrow functions podem receber vários parâmetros.
    Não possuem o mesmo escopo de uma função tradicional, escrita com function e por isso não dão suporte a apply, call e bind.
</details>

<br>

### Pergunta 4
#### Sobre o SET é incorreto afirmar:
A- Permite criar uma coleção de itens que não se repetem

B- Podemos limpar a coleção utilizando o método .clear()

C- Podemos adicionar itens duplicados

D- É um tipo de coleção onde não possui chave, apenas valor

<details>
    <summary>Resposta</summary>
    
    Podemos adicionar itens duplicados

    A alternativa correta é "Podemos adicionar itens duplicados" porque um conjunto (Set) em JavaScript é uma coleção que não permite elementos duplicados. Isso significa que, ao tentar adicionar um elemento duplicado a um Set, o elemento não será adicionado novamente. As demais alternativas estão erradas: "Permite criar uma coleção de itens que não se repetem" está correta, pois um Set permite criar uma coleção de itens que não se repetem; "Podemos limpar a coleção utilizando o método .clear()" está correta, pois o método .clear() pode ser usado para remover todos os elementos de um Set; e "É um tipo de coleção onde não possui chave, apenas valor" está incorreta, pois em um Set, os valores são usados como chaves e não pode haver chaves duplicadas, mas há chaves associadas aos valores internamente no Set.
</details>

<br>

### Pergunta 5
#### Quando devemos utilizar um código assíncrono?
A- Sempre que tivermos uma requisição ao back-end

B- Sempre que precisarmos que algum processo termine para continuar a execução do programa***

C- Sempre que precisarmos importar algum módulo

D- Sempre que tivermos uma iteração

<details>
    <summary>Resposta</summary>
    
    Sempre que precisarmos que algum processo termine para continuar a execução do programa

    A alternativa correta é " Sempre que precisarmos que algum processo termine para continuar a execução do programa". O código assíncrono é utilizado quando temos operações que podem levar tempo para serem concluídas, como requisições ao back-end, leitura de arquivos, ou qualquer tarefa que não deva bloquear a execução do programa principal. Isso permite que o programa continue sua execução sem esperar que a operação assíncrona seja concluída, melhorando a eficiência e a responsividade do programa. As demais alternativas estão erradas porque não são situações em que o código assíncrono é sempre necessário; ele é usado especificamente quando precisamos lidar com operações que podem ser realizadas de forma não bloqueante.
</details>

<br>

### Pergunta 6
#### Como podemos declarar um membro privado de uma classe?
A- Utilizando a palavra reservada private

B- Utilizando _ antes do nome do atributo ou método

C- Utilizando static antes do nome do atributo ou método

D- Utilizando # antes do nome do atributo ou método

<details>
    <summary>Resposta</summary>
    
    Utilizando # antes do nome do atributo ou método

    A alternativa correta é "Utilizando # antes do nome do atributo ou método" porque, a partir do ECMAScript 2022 (ES12), é possível declarar membros privados de uma classe em JavaScript usando a notação "#" antes do nome do atributo ou método. Isso garante que esses membros sejam acessíveis apenas dentro da classe onde foram definidos, impedindo o acesso direto a partir de instâncias da classe ou de fora dela. As demais alternativas estão erradas: "Utilizando a palavra reservada private" não é uma sintaxe válida para declarar membros privados em JavaScript, "Utilizando _ antes do nome do atributo ou método" é uma convenção comum, mas não torna os membros realmente privados, e "Utilizando static antes do nome do atributo ou método" é usada para declarar membros estáticos, não membros privados.
</details>

<br>

### Pergunta 7
#### Sobre o operador rest é correto afirmar:
A- Deve ser informado como primeiro argumento da função

B- É acessível a partir da palavra reservada argumentos

C- Deve ser informado como último argumento da função

D- Retornar um objeto contendo os argumentos informados

<details>
    <summary>Resposta</summary>
    
    Deve ser informado como último argumento da função

    A alternativa correta é a "Deve ser informado como último argumento da função" porque o operador rest (representado por três pontos, "...") na definição de uma função em JavaScript é usado para capturar um número variável de argumentos que são passados para a função e, por convenção, é colocado como o último parâmetro na lista de parâmetros da função. As demais alternativas estão erradas: " Deve ser informado como primeiro argumento da função" não é verdadeira, pois o operador rest pode ser colocado em qualquer posição da lista de parâmetros da função; "É acessível a partir da palavra reservada argumentos" não é verdadeira, pois o operador rest não é acessível através da palavra reservada "arguments" (esta é uma variável especial que contém todos os argumentos passados para a função); e "Retornar um objeto contendo os argumentos informados" não é verdadeira, pois o operador rest retorna os argumentos como um array, não como um objeto.
</details>