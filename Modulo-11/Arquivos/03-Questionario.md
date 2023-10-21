# 📌 Questionário
> Módulo 11: Fundamentos do CSS Responsivo

<br>

### Pergunta 1
#### Através de qual atributo da tag source informamos o endereço da imagem a ser utilizada em determinada resolução?
A- href

B- srcset

C- src

D- address

<details>
    <summary>Resposta</summary>

    srcset
    
    Alternativa srcset: Essa alternativa está correta. O atributo "srcset" é usado para informar o endereço da imagem a ser utilizada em determinada resolução em elementos <img> (imagens). Com o "srcset", é possível fornecer várias opções de imagens com diferentes tamanhos ou resoluções para que o navegador escolha a mais apropriada com base na capacidade do dispositivo ou da janela do navegador.
</details>

<br>

### Pergunta 2
#### Qual propriedade utilizamos na metatag viewport para limitar o zoom do usuário?
A- max-zoom=0.7;

B- maximum-scale=0.7

C- maximum-zoom=0.7

D- max-scale=0.7

<details>
    <summary>Resposta</summary>
    
    maximum-scale=0.7
    
    A resposta correta é "maximum-scale=0.7". A metatag viewport é uma tag HTML que pode ser usada para controlar o tamanho e a escala de uma página da web no navegador. A propriedade maximum-scale pode ser usada para limitar o zoom do usuário. O valor da propriedade maximum-scale deve ser um número entre 0 e 1, onde 1 é o zoom normal. Por exemplo, se você definir maximum-scale como 0.7, o usuário só poderá ampliar a página até 70% do tamanho normal.
</details>

<br>


### Pergunta 3
#### A respeito da unidade de media EM é correto afirmar que:
A- 1em sempre vai ser igual à 16px

B- o valor do EM está relacionado ao font-size do elemento HTML

C- o valor do EM está relacionado ao font-size do elemento-pai

D- o valor do EM está relacionado à largura do elemento-pai

<details>
    <summary>Resposta</summary>
    
    o valor do EM está relacionado ao font-size do elemento-pai

    A resposta correta é "o valor do EM está relacionado ao font-size do elemento-pai". Ao utilizar a medida relativa EM o font-size do elemento sempre estará condicionado ao font-size do elemento pai, quando o elemento pai não tiver um font-size definido o navegador irá subir a árvore de elementos podendo chegar até a tag HTML. Mas diferentemente da medida REM, a medida EM nem sempre estará atrelada ao font-size da tag HTML.
</details>

<br>

### Pergunta 4
#### Qual propriedade não é válida para utilizarmos como condição para uma media query?
A- max-width

B- localization

C- min-width

D- orientation

<details>
    <summary>Resposta</summary>
    
    localization

    A alternativa correta é "localization." Essa é a resposta correta porque as propriedades "max-width," "min-width" e "orientation" são todas propriedades válidas para se utilizar como condição em uma media query. Elas permitem definir regras de estilo com base na largura máxima da tela, largura mínima da tela e orientação (por exemplo, retrato ou paisagem). Por outro lado, a alternativa "localization" não é uma propriedade válida para media queries, pois as media queries se concentram principalmente em características relacionadas ao dispositivo e à tela, não na localização geográfica do usuário.
</details>

<br>

### Pergunta 5
#### Através de qual propriedade e valor alinhamos um elemento na vertical, utilizando o flexbox?
A- vertical-align: center

B- justify-content: center

C- alignment: vertical

D- align-items: center

<details>
    <summary>Resposta</summary>
    
    align-items: center

    a resposta correta é a alternativa "align-items: center", pois é a propriedade correta para alinhar um elemento individual na vertical usando o flexbox. As demais alternativas estão incorretas porque não são apropriadas para esse propósito ou não existem no contexto do flexbox.
</details>

<br>

### Pergunta 6
#### Através de qual propriedade CSS configuramos o layout com o display grid?
A- columns

B- grid-columns

C- layout

D- grid-template-columns

<details>
    <summary>Resposta</summary>
    
    grid-template-columns

    a resposta correta é a alternativa "grid-template-columns", pois é a propriedade correta para configurar o layout de colunas usando o display grid. As demais alternativas estão incorretas porque não são propriedades relevantes para o display grid ou não existem no contexto do CSS.
</details>

<br>

### Pergunta 7
#### Qual dos valores não é válido para a propriedade grid-template-columns?
A- 50% auto

B- 1fr 1fr 1fr

C- 1fr 50% auto

D- space-between

<details>
    <summary>Resposta</summary>
    
    space-between

    a resposta correta é a alternativa "space-between", pois não é um valor válido para a propriedade "grid-template-columns". As demais alternativas estão corretas e representam valores válidos para definir as colunas em um grid usando a propriedade "grid-template-columns".
</details>