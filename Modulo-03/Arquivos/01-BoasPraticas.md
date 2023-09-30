# 📌 Boas Práticas
> Módulo 03: HTML

<br>

## Estruture páginas
### ✔ Diretiva "http-equiv.""
O uso da diretiva "http-equiv" não é tão comum quanto antes, pois muitos recursos específicos foram substituídos por soluções mais modernas e adequadas, como o uso de JavaScript ou cabeçalhos HTTP apropriados no servidor. Portanto, é recomendável procurar alternativas atualizadas antes de usar essa diretiva.

<br>

## Insira textos
### ✔ Tag ``<hr>``
Essa tag também pode receber atributos opcionais para personalizar sua aparência. Alguns atributos comuns incluem: 
- ``size``: especifica a altura da linha horizontal. Por exemplo, ``<hr size="2">`` cria uma linha mais alta do que ``<hr size="1">``. 

- ``color``: define a cor da linha. Você pode especificar uma cor usando um valor hexadecimal (#RRGGBB) ou um nome de cor pré-definido. Por exemplo, ``<hr color="#FF0000">`` define a linha como vermelha. 

-``width``: define a largura da linha horizontal. Pode ser especificada em pixels (por exemplo, ``<hr width="200">``) ou em porcentagem da largura da janela do navegador (por exemplo, ``<hr width="50%">``). 

Vale ressaltar que, embora a tag ``<hr>`` seja amplamente suportada pelos navegadores, é importante usar estilos CSS para personalizar a aparência da linha horizontal, em vez de depender exclusivamente dos atributos da tag. Isso permite um controle mais preciso sobre a aparência e o layout da linha.

### ✔ Tag ``<br> ``
O uso excessivo da tag ``<br>`` pode prejudicar a semântica e a estrutura correta do seu documento HTML. Para criar espaçamento vertical entre elementos ou parágrafos, é recomendado o uso de estilos CSS, como margens ou preenchimentos, em vez de depender exclusivamente da tag ``<br>``.

<br>

## Crie formulários
### ✔ A tag ``<label>`` 
Essa tag pode ser usada de duas maneiras principais: 

1) **Rótulo vinculado a um elemento de formulário**: Nesse caso, o rótulo é associado a um elemento de formulário específico usando o atributo for e o ID do elemento. Quando o rótulo é clicado, o foco é transferido para o elemento associado. Exemplo: 
```
<label for="nome">Nome:</label> 
<input type="text" id="nome" name="nome"> 
```
Nesse exemplo, o rótulo "Nome:" está associado ao campo de entrada de texto por meio do atributo for com o valor "nome". Quando o rótulo é clicado, o campo de entrada de texto recebe o foco.

2) **Rótulo envolvendo um elemento de formulário**: Nesse caso, o elemento de formulário é incluído diretamente dentro da tag ``<label>``. Isso significa que o rótulo abrange visualmente o elemento de formulário, facilitando a interação. Exemplo:
```
 Selecione uma opção: 
 <label> 
    <select name="opcao">  
        <option value="opcao1">Opção 1</option>  
        <option value="opcao2">Opção 2</option> 
    </select> 
 </label> 
 ```
 Nesse exemplo, o rótulo "Selecione uma opção:" envolve o elemento ``<select>``, que exibe um menu suspenso com duas opções.