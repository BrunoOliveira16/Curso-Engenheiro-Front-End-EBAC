# 📌 Boas Práticas
> Módulo 26: Conheça o TypeScript

<br>

## Conheça o TypeScript
> TypeScript: Existem vários benefícios em usar o TypeScript. Acompanhe alguns dos principais
### ✔ Tipagem estática: 
O TypeScript é uma linguagem com tipagem estática, o que significa que você pode declarar tipos para as suas variáveis, parâmetros de função e retornos de função. Isso permite que você detecte erros de digitação e problemas de tipo em tempo de compilação, antes mesmo de executar o código. 

### ✔ Maior robustez e confiabilidade: 
Devido à tipagem estática, o TypeScript ajuda a evitar erros comuns que podem ocorrer no JavaScript, como tentar chamar um método inexistente ou passar argumentos incorretos para uma função. Com a detecção de erros em tempo de compilação, você pode escrever um código mais robusto e confiável.

### ✔ Refatoração e manutenção de código: 
O TypeScript facilita a refatoração e a manutenção de código. Com a tipagem estática, você pode fazer alterações em seu código com mais segurança, sabendo que o compilador do TypeScript irá ajudá-lo a encontrar todas as ocorrências do código afetado. Isso é particularmente útil em projetos grandes e complexos, nos quais a manutenção e a evolução do código são desafios importantes. 

### ✔ Compatibilidade com JavaScript: 
O TypeScript é um superset do JavaScript, o que significa que qualquer código JavaScript válido é um código TypeScript válido. Isso permite que você adote gradualmente o TypeScript em projetos existentes, adicionando gradualmente tipos e recursos adicionais conforme necessário. Além disso, você pode utilizar todas as bibliotecas e frameworks JavaScript existentes no ecossistema TypeScript.

### ✔ Recursos avançados: 
O TypeScript oferece recursos avançados que não estão disponíveis no JavaScript puro. Isso inclui recursos como tipos de união, tipos genéricos, interfaces, classes, módulos e muito mais. Esses recursos permitem uma programação mais estruturada e orientada a objetos, facilitando o desenvolvimento e a manutenção de código complexo.

<br>

## Tipos básicos
> Array: Acompanhe algumas dicas para utilizar arrays de forma eficaz em TypeScript, aproveitando a segurança de tipo oferecida pela linguagem e tirando proveito dos métodos e recursos disponíveis para trabalhar com arrays
### ✔ Utilize os métodos e propriedades do array: 
O TypeScript fornece suporte completo aos métodos e propriedades do array, como push(), pop(), length, forEach(), map(), filter(), entre outros. Esses métodos podem ser usados   para manipular e iterar sobre os elementos do array de forma segura e eficiente. 

### ✔ Utilize generics para arrays de tipos complexos: 
Se você estiver trabalhando com arrays que contêm tipos complexos, como objetos personalizados, é recomendado utilizar generics para especificar o tipo dos elementos do array. 

### ✔ Evite mutações inesperadas: 
Ao trabalhar com arrays em TypeScript, é importante ter cuidado para evitar mutações inesperadas. Caso você declare um array como readonly ou atribua um array a uma constante, isso impedirá que o array seja modificado. Isso pode ajudar a evitar bugs sutis em seu código.

### ✔ Considere o uso de métodos imutáveis: 
Em vez de modificar diretamente o array, considere o uso de métodos imutáveis, como map(), filter(), reduce(), entre outros. Esses métodos retornam um novo array com os resultados da operação, sem alterar o array original. Isso promove a imutabilidade dos dados, que é uma prática recomendada em programação funcional. 

### ✔ Utilize a desestruturação para acessar elementos do array: 
A desestruturação é uma técnica útil para extrair elementos individuais de um array em variáveis separadas. Em vez de acessar elementos por meio da notação de índice, você pode desestruturar o array em variáveis.

### ✔ Utilize os tipos utilitários do TypeScript: 
O TypeScript fornece tipos utilitários integrados, como Array``<T>``, Partial``<T>``, ReadonlyArray``<T>``, entre outros, que podem facilitar o trabalho com arrays em diferentes situações. Esses tipos podem ajudar a definir arrays imutáveis, arrays parciais e muito mais. 

### ✔ Considere o uso de bibliotecas para manipulação de arrays: 
Existem várias bibliotecas populares disponíveis, como o Lodash e o Ramda, que fornecem uma ampla gama de métodos e utilitários para trabalhar com arrays. Essas bibliotecas podem ajudar a simplificar e agilizar a manipulação de arrays em seu código.

<br>

> Tuplas: As tuplas em TypeScript são úteis quando você precisa representar uma sequência fixa de elementos de diferentes tipos, mantendo sua ordem. Acompanhe algumas dicas para que você possa usá-la de forma eficaz

### ✔ Declare explicitamente o tipo da tupla: 
Ao definir o tipo da tupla, você estabelece a ordem e os tipos dos elementos que ela pode conter. 

### ✔ Acesse os elementos da tupla pela posição: 
Você pode acessar os elementos de uma tupla pela sua posição usando a notação de índice. Lembrando que as tuplas são indexadas a partir de zero, ou seja, o primeiro elemento é ``minhaTupla[0]``, o segundo é ``minhaTupla[1]``, e assim por diante. 

### ✔ Utilize métodos de array com cautela: 
Embora as tuplas sejam semelhantes a arrays, nem todos os métodos de array estão disponíveis para tuplas. Alguns métodos, como push() e pop(), não são permitidos em tuplas porque podem alterar seu tamanho ou tipos. Portanto, é importante ter cuidado ao usar métodos de array em tuplas.

### ✔ Considere desestruturação: 
A desestruturação é uma técnica útil para extrair elementos individuais de uma tupla de forma mais conveniente. Em vez de acessar elementos por meio da notação de índice, você pode desestruturar a tupla em variáveis separadas. 

### ✔ Utilize tuplas quando a ordem dos elementos é importante: 
As tuplas são especialmente úteis quando você precisa representar uma sequência de elementos de diferentes tipos em uma ordem específica. Ao usar tuplas, você pode garantir que a ordem dos elementos seja mantida. 

### ✔ Considere usar alias de tipo para melhorar a legibilidade: 
Se você estiver usando tuplas com uma estrutura complexa ou com muitos elementos, considere utilizar alias de tipo (type) para atribuir um nome mais descritivo ao tipo da tupla. Isso pode tornar seu código mais legível e facilitar a manutenção.

<br>

> Union type: O Union Type é uma poderosa ferramenta no TypeScript para lidar com valores que podem ter diferentes tipos. Acompanhe as dicas a seguir para usá-lo de forma eficaz

### ✔ Escolha os tipos adequados para a união: 
Ao usar o Union Type, é importante escolher os tipos que fazem sentido no contexto do seu código. Considere quais tipos de valores a variável ou parâmetro pode aceitar e escolha os tipos apropriados para a união. 

### ✔ Trate os diferentes tipos de forma condicional: 
Ao lidar com uma variável ou parâmetro de Union Type, é necessário lidar com os diferentes tipos de forma condicional para evitar erros em tempo de execução. Use estruturas de controle como if, switch ou operadores de verificação de tipo, como typeof ou instanceof, para realizar operações específicas com base no tipo atual da variável. 

### ✔ Utilize type guards: 
Type guards são construções de código que permitem verificar o tipo de uma variável em tempo de execução para que você possa realizar operações seguras com base no tipo. Existem várias formas de implementar type guards no TypeScript, como typeof, instanceof, in, entre outros. Utilize-os para garantir que o código seja executado corretamente e evitar erros de tipo.

### ✔ Considere o uso de type aliases: 
Se você estiver usando uma união de tipos em vários lugares do seu código, considere criar um type alias para tornar o código mais legível e facilitar a manutenção. Os type aliases permitem dar um nome personalizado a uma união de tipos, o que pode tornar o código mais expressivo e evitar a repetição de código. 

### ✔ Pense na segurança de tipo: 
Ao usar o Union Type, você pode aproveitar a segurança de tipo fornecida pelo TypeScript para detectar erros em tempo de compilação. Certifique-se de tratar todos os tipos possíveis corretamente e de garantir que as operações realizadas sejam seguras para cada tipo.

### ✔ Utilize métodos e funções genéricas: 
Em alguns casos, você pode precisar de métodos ou funções que aceitem uma união de tipos de forma genérica, sem tratar cada tipo individualmente. Nesses casos, você pode usar tipos genéricos e restringir a união de tipos usando restrições genéricas (extends) para fornecer funcionalidade genérica para todos os tipos da união. 

### ✔ Considere a utilização de discriminated unions: 
Em casos mais complexos, onde uma união de tipos pode ter um comportamento diferente com base em um valor discriminante específico, você pode utilizar discriminated unions. Uma discriminated union é uma união de tipos que contém um membro discriminante comum, que permite ao TypeScript inferir o tipo corretamente com base nesse valor discriminante.

<br>

> Any: Acompanhe algumas dicas para usar o any

### ✔ Use o any com moderação: 
O any deve ser usado com cuidado e apenas quando necessário. É recomendado que você utilize os tipos mais específicos disponíveis em vez do any, pois isso fornece uma melhor verificação de tipos e ajuda a evitar erros em tempo de execução. 

### ✔ Restrinja o uso do any a fronteiras de tipos desconhecidos: 
O any pode ser útil quando você precisa trabalhar com valores de bibliotecas de terceiros ou APIs externas cujos tipos são desconhecidos ou não estão disponíveis. Nesses casos, o uso do any pode ser necessário para lidar com esses valores sem erros de tipo. 

### ✔ Documente o uso do any: 
Quando você optar por usar o any, é importante documentar o motivo por trás dessa escolha. Explique o contexto em que o any está sendo usado e por que é necessário. Isso ajudará a comunicar aos outros desenvolvedores que o uso do any é intencional e não um descuido.

### ✔ Minimize o escopo do any: 
Se você precisar usar o any, tente limitar o escopo em que ele é aplicado. Isso significa evitar propagar o uso do any para outras partes do código, limitando-o a um escopo específico ou até mesmo a uma única função, se possível. Quanto mais restrito o escopo, menor será o impacto negativo na segurança de tipo geral do código. 

### ✔ Utilize type assertion: 
Quando você usa o any, pode ser necessário realizar operações ou chamadas de métodos específicos para um tipo desconhecido. Nesses casos, você pode usar a type assertion (afirmação de tipo) para informar ao compilador que você sabe que o valor é de um tipo específico. No entanto, tenha cuidado ao usar type assertion, pois isso pode contornar a verificação de tipos do TypeScript e levar a erros em tempo de execução se usado incorretamente.

### ✔ considere a criação de tipos mais específicos: 
Em vez de usar o any, considere a criação de tipos mais específicos usando union types, intersection types ou generics, dependendo do caso. Isso ajudará a fornecer uma melhor segurança de tipo e evitará o uso indiscriminado do any. 

### ✔ Utilize ferramentas de análise de tipo: 
Ao usar o any, é recomendado utilizar ferramentas de análise de tipo, como o compilador do TypeScript e linters como o ESLint com regras específicas para any. Essas ferramentas podem ajudar a identificar usos desnecessários ou problemáticos do any e fornecer orientações para melhorar a segurança de tipo.

<br>

## Casting
> Namespace: O uso de namespaces é uma questão de preferência e depende do contexto do seu projeto. Acompanhe algumas dicas para usar namespaces
### ✔ Organize o código relacionado: 
Use namespaces para agrupar declarações e definições relacionadas. Isso ajuda a organizar seu código de forma lógica e torná-lo mais legível e manutenível. Considere agrupar classes, interfaces, funções e constantes que tenham uma relação próxima dentro do mesmo namespace. 

### ✔ Evite aninhar namespaces desnecessariamente: 
Embora seja possível aninhar namespaces, evite criar uma hierarquia profunda de namespaces, a menos que seja necessário. Aninhar namespaces em excesso pode tornar seu código complexo e difícil de entender. Mantenha a estrutura de namespace o mais plana e simples possível. 

### ✔ Evite poluição de nomes globais: 
O uso de namespaces ajuda a evitar colisões de nomes entre elementos de diferentes partes do código. Ao agrupar as declarações em namespaces, você reduz a chance de ter nomes conflitantes. Isso é especialmente útil em projetos grandes ou colaborativos, onde várias pessoas estão trabalhando em diferentes partes do código.

### ✔ Use aliases de importação para simplificar o acesso a elementos: 
o importar namespaces de outros módulos ou arquivos, você pode usar aliases de importação para simplificar o acesso aos elementos dentro do namespace. Isso pode tornar seu código mais conciso e legível. 

### ✔ Documente o uso do namespace: 
Ao criar namespaces, documente sua finalidade e os elementos que ele contém. Isso ajuda outros desenvolvedores a entender a estrutura do código e como acessar os elementos dentro do namespace. Use comentários, documentação inline ou um sistema de documentação como o JSDoc para fornecer informações úteis sobre o namespace.

### ✔ Considere módulos externos para projetos maiores: 
Para projetos maiores e mais complexos, considere a utilização de módulos externos (external modules) em vez de namespaces. Os módulos externos seguem a especificação do ECMAScript 6 (ES6) e fornecem uma forma mais robusta e padronizada de organizar e compartilhar código em escala. Eles permitem uma melhor separação de responsabilidades e facilitam a importação/exportação de elementos entre diferentes partes do código. 

### ✔ unknown 
O tipo unknown pode ser combinado com outros tipos para obter uma verificação de tipo mais precisa. Você pode utilizar union types (|) ou intersection types (&) para criar tipos mais específicos. 

<br>

## Interfaces
> Acompanhe algumas dicas sobre o uso das interfaces no TypeScript
### ✔ Defina interfaces com clareza: 
Ao criar interfaces, forneça nomes descritivos e significativos que reflitam a finalidade e a semântica dos objetos que serão implementados por essas interfaces. Isso torna o código mais legível e compreensível para outros desenvolvedores. 

### ✔ Mantenha as interfaces coesas: 
Siga o princípio da responsabilidade única ao definir interfaces. Crie interfaces que tenham um único propósito e sejam focadas em uma única responsabilidade. Isso ajuda a manter as interfaces concisas e facilita a compreensão do seu código. 

### ✔ Utilize as interfaces para definir a estrutura dos objetos: 
As interfaces no TypeScript são usadas principalmente para definir a estrutura dos objetos. Utilize as interfaces para especificar quais propriedades e métodos um objeto deve ter. Isso ajuda a garantir consistência e padronização entre diferentes implementações de objetos.

### ✔ Utilize interfaces para definir contratos: 
As interfaces também são usadas para definir contratos que uma classe deve cumprir. Ao implementar uma interface em uma classe, você está garantindo que a classe terá todas as propriedades e métodos exigidos pela interface. Isso ajuda a garantir a conformidade e consistência do código. 

### ✔ Utilize a herança de interfaces: 
Assim como as classes, as interfaces também podem ser estendidas usando a palavra-chave extends. Isso permite criar hierarquias de interfaces, onde as interfaces filhas herdam as propriedades e métodos das interfaces pai. A herança de interfaces é útil para definir interfaces mais específicas que compartilham características comuns.

### ✔ Utilize interfaces como tipos: 
Além de usar interfaces para definir a estrutura dos objetos, você também pode usá-las como tipos em outros contextos, como parâmetros de função ou tipos de retorno. Isso ajuda a melhorar a legibilidade do código e a fornecer informações de tipo mais precisas. 

### ✔ Documente suas interfaces: 
Assim como qualquer outra parte do código, é importante documentar suas interfaces para ajudar outros desenvolvedores a entender seu propósito e como usá-las corretamente. Utilize comentários, documentação inline ou sistemas de documentação como o JSDoc para fornecer informações úteis sobre suas interfaces. 

### ✔ Mantenha interfaces atualizadas: 
À medida que o código evolui, é importante revisar e atualizar suas interfaces para refletir as alterações feitas nas implementações. Certifique-se de que suas interfaces estejam sempre em sincronia com as classes que as implementam para evitar inconsistências e erros de tipo.

<br>

## TypeScript e DOM
> Acompanhe algumas dicas sobre o uso do DOM no TypeScript:
### ✔ Importe a definição do DOM: 
O TypeScript fornece as definições de tipo para o DOM por padrão, mas é necessário importar explicitamente a definição do DOM em seu projeto. 

### ✔ Utilize as definições de tipo do DOM: 
O TypeScript fornece definições de tipo precisas para todas as APIs do DOM. Ao utilizar métodos e propriedades do DOM, você se beneficiará das informações de tipo fornecidas pelo TypeScript, que ajudarão na detecção de erros em tempo de compilação e na obtenção de autocompletar no seu editor de código. 

### ✔ Evite a manipulação direta do DOM: 
Ao invés de manipular diretamente o DOM, considere utilizar bibliotecas ou frameworks como React, Angular ou Vue.js, que facilitam a manipulação do DOM de forma declarativa e fornecem recursos avançados de componentização e estado. Esses frameworks também têm suporte completo ao TypeScript.

### ✔ Importe a definição do DOM: 
O TypeScript fornece as definições de tipo para o DOM por padrão, mas é necessário importar explicitamente a definição do DOM em seu projeto. 

### ✔ Utilize as definições de tipo do DOM: 
O TypeScript fornece definições de tipo precisas para todas as APIs do DOM. Ao utilizar métodos e propriedades do DOM, você se beneficiará das informações de tipo fornecidas pelo TypeScript, que ajudarão na detecção de erros em tempo de compilação e na obtenção de autocompletar no seu editor de código. 

### ✔ Evite a manipulação direta do DOM: 
Ao invés de manipular diretamente o DOM, considere utilizar bibliotecas ou frameworks como React, Angular ou Vue.js, que facilitam a manipulação do DOM de forma declarativa e fornecem recursos avançados de componentização e estado. Esses frameworks também têm suporte completo ao TypeScript.