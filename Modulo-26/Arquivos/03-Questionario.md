# 📌 Questionário
> Módulo 26: Conheça o TypeScript

<br>

### Pergunta 1
#### Qual resultado teremos ao executar no JavaScript: “olá “ + 10?
A- Error

B- Undefined

C- olá 10

D- TypeError

<details>
    <summary>Resposta</summary>

    olá 10

    O resultado correto é a alternativa "olá 10". Isso acontece porque, em JavaScript, quando você concatena uma string (no caso, "olá ") com um número (no caso, 10), o número é automaticamente convertido em uma string e concatenado à primeira string, resultando em "olá 10".
</details>

<br>

### Pergunta 2
#### Qual tipo a seguir não pertence ao TypeScript?
A- number

B- string

C- boolean

D- char

<details>
    <summary>Resposta</summary>
    
    char

    A alternativa correta é a opção "char" porque o tipo "char" não faz parte dos tipos primitivos disponíveis no TypeScript. TypeScript oferece tipos como "number" para números, "string" para cadeias de caracteres e "boolean" para valores booleanos, mas não possui um tipo "char". Em vez disso, caracteres individuais em TypeScript são tratados como strings de comprimento 1. As demais alternativas estão corretas, pois "number," "string" e "boolean" são tipos de dados válidos em TypeScript.
</details>

<br>


### Pergunta 3
#### Quando não utilizamos o return dentro de uma função, qual será o tipo de retorno dela?
A- boolean

B- any

C- void

D- unknown

<details>
    <summary>Resposta</summary>
    
    void

    A alternativa correta é a opção "void" porque, em TypeScript e em muitas linguagens de programação, quando uma função não retorna explicitamente um valor usando a instrução "return", o tipo de retorno da função é considerado "void". Isso significa que a função não produz um valor específico como resultado. As demais alternativas estão erradas: "boolean" e "unknown" não são tipos de retorno quando não há uma declaração "return", e "any" geralmente não é usado como tipo de retorno para funções que não retornam um valor, em vez disso, "any" é usado para representar valores de tipo desconhecido.
</details>

<br>

### Pergunta 4
#### Qual afirmação a seguir é incorreta a respeita da conversão de tipos?
A- Podemos converter um tipo de dado utilizando parseFloat

B- Podemos converter um tipo de dado utilizando parseInt

C- Podemos converter um tipo de dado utilizando convertToNumber

D- Podemos converter um tipo de dado utilizando toString

<details>
    <summary>Resposta</summary>
    
    Podemos converter um tipo de dado utilizando convertToNumber

    A alternativa correta é a opção "Podemos converter um tipo de dado utilizando convertToNumber" porque não existe uma função nativa chamada "convertToNumber" em JavaScript para converter tipos de dados.
</details>

<br>

### Pergunta 5
#### Qual palavra reservada utilizamos para criar tipos customizados?
A- package

B- namespace

C- struct

D- type

<details>
    <summary>Resposta</summary>
    
    type

    A alternativa correta é a opção "type" porque a palavra reservada "type" é usada em TypeScript para criar tipos personalizados, permitindo que você defina estruturas de dados personalizadas com formatos específicos. As demais alternativas estão erradas: "package" e "namespace" não são usadas para criar tipos personalizados em TypeScript, e "struct" é uma palavra reservada do C# e não é usada para criar tipos em TypeScript.
</details>

<br>

### Pergunta 6
#### O que não podemos fazer com interfaces?
A- Criar instâncias da interface

B- Compartilhar interfaces, como herança

C- Utilizar como tipos de dados

D- Aplicar interfaces para serem implementadas por classes

<details>
    <summary>Resposta</summary>
    
    Criar instâncias da interface

    A alternativa correta é a opção "Criar instâncias da interface". Isso ocorre porque em TypeScript, as interfaces são apenas contratos que definem a estrutura esperada dos objetos, mas não podem ser instanciadas diretamente como objetos reais. As demais alternativas estão incorretas: "Compartilhar interfaces, como herança" está errada, pois é possível herdar uma interface em outra interface; "Utilizar como tipos de dados" está incorreta, pois as interfaces podem ser usadas como tipos de dados para garantir que objetos sigam a estrutura definida pela interface; e "Aplicar interfaces para serem implementadas por classes" está correta, pois as interfaces são frequentemente aplicadas a classes para garantir que a classe implemente todos os membros definidos na interface.
</details>

<br>

### Pergunta 7
#### Qual afirmação a seguir descreve corretamente os modificadores de acesso, de forma respectiva: publico, privado, protegido, estático?
A- Acessível em todos os lugares, acessível dentro da classe, acessível dentro da classe e das herdeiras, acessível dentro da classe e da instância

B- Acessível em todos os lugares, acessível dentro da classe, acessível dentro da classe e das herdeiras, acessível apenas pelo nome da classe - não na instância

C- Acessível em todos os lugares, acessível dentro da classe e nas herdeiras, acessível dentro da classe, acessível dentro da classe e da instância

D- Acessível em todos os lugares, acessível nas instâncias, acessível dentro da classe e das herdeiras, acessível dentro da classe e da instância

<details>
    <summary>Resposta</summary>
    
    Acessível em todos os lugares, acessível dentro da classe, acessível dentro da classe e das herdeiras, acessível apenas pelo nome da classe - não na instância

    A alternativa correta é a opção "Acessível em todos os lugares, acessível dentro da classe, acessível dentro da classe e das herdeiras, acessível apenas pelo nome da classe - não na instância". Isso descreve corretamente os modificadores de acesso em TypeScript da seguinte forma:

    - "public": Acessível em todos os lugares.

    - "private": Acessível apenas dentro da classe.

    - "protected": Acessível dentro da classe e das classes herdeiras.

    - "static": Acessível apenas pelo nome da classe, não na instância.
</details>