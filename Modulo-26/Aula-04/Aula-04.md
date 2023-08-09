## 📝 Aula 04: Casting
Casting é o processo de substituir um tipo. No TypeScript, é possível usar o operador ``as`` ou ``<>`` para fazer casting de tipos. O casting é útil quando você está trabalhando com dados dinâmicos ou quando o tipo de um valor não é inferido corretamente automaticamente.

Por exemplo, considere o seguinte código:

```
let x: unknown = 'hello';
console.log((x as string).length);
```

Neste exemplo, a variável ``x`` é declarada como do tipo ``unknown``, mas é atribuída a uma ``string``. Para acessar a propriedade ``length`` da ``string``, é necessário fazer o casting do tipo ``unknown`` para o tipo ``string`` usando o operador ``as``. Isso permite que o TypeScript saiba que a variável ``x`` contém uma ``string`` e que a propriedade ``length`` pode ser acessada.

<br>

Outra maneira de fazer o casting de tipos é usando o operador ``<>``. O exemplo acima poderia ser reescrito da seguinte maneira:

```
let x: unknown = 'hello';
console.log((<string>x).length);
```

Neste caso, o operador ``<>`` é usado para fazer o casting do tipo ``unknown`` para o tipo ``string``. O resultado é o mesmo que no exemplo anterior.

É importante notar que o casting não altera o valor real da variável, apenas informa ao TypeScript qual é o tipo esperado do valor. Se você tentar fazer um casting incorreto, como no exemplo abaixo, o resultado pode não ser o esperado:

```
let x: unknown = 4;
console.log((x as string).length);
```

Neste caso, a variável ``x`` contém um número, mas está sendo feito um casting para o tipo ``string``. Como números não têm uma propriedade ``length``, o resultado será ``undefined``.

Em resumo, casting é uma maneira de informar ao TypeScript qual é o tipo esperado de um valor. Isso pode ser útil quando se trabalha com dados dinâmicos ou quando o tipo de um valor não é inferido corretamente automaticamente. Você pode usar os operadores ``as`` ou ``<>`` para fazer casting de tipos no TypeScript.

<br>

## ✅ Questionário
Qual afirmação a seguir é incorreta a respeita da conversão de tipos?

A- Podemos converter um tipo de dado utilizando toString

B- Podemos converter um tipo de dado utilizando parseFloat

C- Podemos converter um tipo de dado utilizando parseInt

D- Podemos converter um tipo de dado utilizando convertToNumber

Resposta: A afirmação incorreta é a letra D. Não existe um método chamado convertToNumber para converter um tipo de dado em JavaScript. No entanto, existem várias maneiras de converter tipos de dados em JavaScript, incluindo os métodos toString, parseFloat e parseInt mencionados nas outras opções.