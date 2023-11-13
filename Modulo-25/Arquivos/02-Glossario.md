# 📌 Glossário
> Módulo 25: Recursos do ES6

<br>

## Conheça o Babel
### ✔ ECMA TC39
Comitê responsável pela padronização da linguagem JavaScript. O TC39 é composto por membros de várias empresas e organizações que têm interesse na evolução e no desenvolvimento da linguagem JavaScript. Esses membros trabalham em conjunto para propor, discutir, revisar e aprovar mudanças, melhorias e novas funcionalidades para a linguagem JavaScript.

### ✔ Preset 
É um conjunto pré-configurado de plugins que são utilizados para transpilar o código-fonte de JavaScript para uma determinada versão do ECMAScript (ES). Em vez de adicionar manualmente uma lista de plugins individuais, um preset permite agrupar e aplicar várias transformações em um único passo.

### ✔ Transpilação
Processo de converter código-fonte de uma linguagem para outra linguagem de nível semelhante, geralmente para obter compatibilidade com versões mais antigas da linguagem ou para converter entre linguagens com sintaxe semelhante. No contexto do JavaScript, a transpilação é comumente usada para converter código ES6 ou posterior em código ES5 compatível com navegadores mais antigos.

<br>

## Entenda a arrow function
### ✔ Arrow function (função de seta)
Sintaxe mais concisa para definir funções em JavaScript. Ela foi introduzida no ECMAScript 6 (ES6) como uma alternativa mais compacta às funções tradicionais. A sintaxe de uma arrow function usa uma seta => para separar os parâmetros da função do corpo da função.

<br>

## Operadores de Spread e Rest
### ✔ Arguments
Variável implícita disponível em todas as funções, que contém uma lista dos argumentos passados para a função durante sua invocação. Ela é semelhante a um objeto de array, mas não é um array real. Permite que você acesse os argumentos fornecidos para a função, mesmo que eles não sejam definidos explicitamente nos parâmetros da função.

### ✔ Concat
Função usada para concatenar dois ou mais arrays. Ela retorna um novo array que combina os elementos dos arrays originais.

### ✔ Desestruturação (Destructuring)
Funcionalidade que permite extrair valores de arrays ou propriedades de objetos em variáveis individuais de forma concisa. Isso simplifica a atribuição de valores e o acesso a elementos dentro de arrays e objetos.

### ✔ Rest (Descanse)
Operador que coleta o "restante" dos argumentos em uma função ou elementos em um array. Na definição do operador rest, os três pontos (...) indicam que a função ou array pode receber um número variável de argumentos ou elementos. Esses argumentos ou elementos "descansam" em um único local, que é o parâmetro rest ou o array resultante. 

### ✔ Spread (Espalhar)
Operador usado para desempacotar elementos de um array ou objeto em lugares diferentes. É usado em diferentes contextos para facilitar a manipulação de arrays, objetos e argumentos de função.

<br>

## Estruturas Map e Set
### ✔ Map
Estrutura de dados que permite armazenar pares chave-valor, em que cada chave é única e mapeia para um valor correspondente. É uma coleção de valores que são organizados com base em suas chaves.

### ✔ Set
Estrutura de dados que representa uma coleção de valores únicos, em que cada valor pode ocorrer apenas uma vez no conjunto. Ele permite armazenar elementos sem repetição e não mantém uma ordem específica dos elementos.

<br>

## Programação Assíncrona
### ✔ Async
Função assíncrona é uma função que permite a execução de operações assíncronas de maneira mais concisa e legível. Ela permite que você defina blocos de código que não bloqueiam a execução sequencial, aguardando a conclusão de operações assíncronas antes de prosseguir.

### ✔ Await
Função assíncrona em JavaScript para pausar a execução da função até que uma Promise seja resolvida. Ela só pode ser usada dentro de uma função marcada como async. Quando o await é utilizado antes de uma expressão Promise, ele pausa a execução da função assíncrona até que a Promise seja resolvida ou rejeitada. Enquanto aguarda a conclusão da Promise, a execução da função é suspensa, permitindo que outras tarefas sejam executadas.

### ✔ Processadores lógicos
Também conhecidos como núcleos de processamento lógico (Logical Processing Units - LPUs), são unidades de processamento dentro de um processador que podem executar instruções de forma independente. Cada processador lógico é capaz de realizar tarefas de processamento, como cálculos matemáticos e lógicos, execução de instruções de programa e manipulação de dados. A quantidade de núcleos de um processador depende do modelo e da geração específicos do processador, podendo ser dual core, quad core, octa core, deca core etc. 

### ✔ Promise (Promessa)
Objeto em JavaScript que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. Ela é usada para lidar com códigos assíncronos de maneira mais estruturada e oferece um fluxo de controle mais fácil para tratar operações que podem levar algum tempo para serem concluídas. Pode estar em um dos três estados: pendente (pending), resolvida (fulfilled) ou rejeitada (rejected). O termo foi escolhido para descrever esse conceito em JavaScript porque reflete a ideia de uma operação assíncrona que promete retornar um valor ou falhar em algum momento futuro.

### ✔ Single thread
O JavaScript é frequentemente considerado uma linguagem de programação "single thread" (de apenas uma thread) porque possui apenas uma única thread de execução principal. Isso significa que o código JavaScript é executado de forma sequencial, um comando após o outro, sem a capacidade de executar múltiplas tarefas simultaneamente. Entretanto, é capaz de lidar com operações assíncronas de forma não bloqueante, permitindo que o código JavaScript seja eficiente e responsivo.

<br>

## Orientações a Objetos com ES6
### ✔ Extends
Cria uma relação de herança entre classes. É usada na sintaxe de classes na programação orientada a objetos (POO) do JavaScript para estabelecer uma classe filha que herda características de uma classe pai.

### ✔ Super
A palavra reservada super é usada em JavaScript para acessar e chamar membros da classe pai em uma classe filha que estende a classe pai.