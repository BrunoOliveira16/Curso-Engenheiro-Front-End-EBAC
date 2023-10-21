# 📌 Questionário
> Módulo 12: Fundamentos do Bootstrap

<br>

### Pergunta 1
#### Por padrão no Bootstrap, temos quantas colunas por linha?
A- 12

B- 6

C- 24

D- 18

<details>
    <summary>Resposta</summary>

    12
    
    Alternativa 12: Essa alternativa está correta. O Bootstrap utiliza um sistema de grade com 12 colunas por linha. Isso significa que, por padrão, você pode dividir a largura total do contêiner em 12 colunas iguais e, em seguida, definir a largura de cada coluna usando classes CSS como "col-6", "col-md-3", etc.
</details>

<br>

### Pergunta 2
#### Qual das tags a seguir não é válida para a construção de tabelas?
A- table

B- thead

C- column

D- tfoot

<details>
    <summary>Resposta</summary>
    
    column
    
    Alternativa column: Essa alternativa está incorreta. A tag <column> não é uma tag válida para a construção de tabelas em HTML. Não existe uma tag chamada <column>.
</details>

<br>


### Pergunta 3
#### Qual classe utilizamos para aplicar o estilo de texto de cabeçalho no Bootstrap?
A- h1 até h6

B- title-1 até title-6

C- heading-1 até heading-6

D- bs-h1 até bs-h6

<details>
    <summary>Resposta</summary>
    
    h1 até h6

    Alternativa bs-h1 até bs-h6: Essa alternativa está incorreta. O Bootstrap não utiliza classes com o prefixo "bs-" seguido por "h1" até "h6" para aplicar estilos de texto de cabeçalho.
</details>

<br>

### Pergunta 4
#### Qual valor utilizamos para o atributo data-bs-toggle?
A- accordion

B- accordion-collapse

C- tab

D- collapse

<details>
    <summary>Resposta</summary>
    
    collapse

    Alternativa collapse: Essa alternativa está correta. O valor "collapse" é utilizado para o atributo "data-bs-toggle" quando desejamos criar um componente que pode ser recolhido ou expandido, como um elemento de colapso.
</details>

<br>

### Pergunta 5
#### Qual atributo utilizamos no botão para fechar o alert?
A- data-close

B- data-bs-close

C- data-bs-dismiss

D- data-dismiss

<details>
    <summary>Resposta</summary>
    
    data-bs-dismiss

    Alternativa data-bs-dismiss: Essa alternativa está correta. O atributo "data-bs-dismiss" é utilizado no botão do alert para fechá-lo. Quando um botão possui o atributo "data-bs-dismiss" e é clicado, o alert associado a ele é fechado.
</details>

<br>

### Pergunta 6
#### Qual dos valores não é válido para o atributo type na tag button?
A- submit

B- cancel

C- button

D- reset

<details>
    <summary>Resposta</summary>
    
    cancel

    Alternativa cancel: Essa alternativa está incorreta. O valor "cancel" não é válido para o atributo "type" na tag <button>. Não existe um valor "cancel" para esse atributo.
</details>

<br>

### Pergunta 7
#### Qual classe do Bootstrap utilizamos para estilizar os inputs?
A- form-input

B- form-control

C- input

D- bs-input

<details>
    <summary>Resposta</summary>
    
    form-control

    Alternativa form-control: Essa alternativa está correta. A classe "form-control" é utilizada no Bootstrap para estilizar os inputs, sejam eles de texto, de seleção (select) ou outras variações. Essa classe aplica os estilos de fonte, cor, largura, altura e outros estilos necessários para melhorar a aparência e consistência dos inputs.
</details>

<br>

### Pergunta 8
#### O que é menos indicado para Bootstrap?
A- utilizar componentes estilizados

B- aplicar validação de formulários

C- construir layouts responsivos

D- utilizar componentes com comportamento JavaScript

<details>
    <summary>Resposta</summary>
    
    aplicar validação de formulários

    A resposta correta é "aplicar validação de formulários". No Bootstrap temos algumas classes especiais que podemos utilizar na validação de formulários, por exemplo: is-valid e is-invalid. Apesar disso a lógica da validação não poderá ser feita através do Bootstrap, pois sua abrangência se limita a estilização dos elementos.
</details>

<br>

### Pergunta 9
#### Qual atributo utilizamos para referenciar o elemento que será colapsado?
A- data-collapse

B- data-bs-target

C- data-bs-collapse

D- data-target

<details>
    <summary>Resposta</summary>
    
    data-target

    Alternativa data-bs-target: Essa alternativa está correta. O atributo "data-bs-target" é utilizado para referenciar o elemento que será colapsado quando um elemento com o atributo "data-bs-toggle" com valor "collapse" é clicado. É por meio deste atributo que o Bootstrap sabe qual elemento deve ser colapsado/expandido quando o botão ou link é clicado.
</details>