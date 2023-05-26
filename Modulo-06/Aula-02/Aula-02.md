## 📝 Aula 02: Variáveis e constantes
### ✅ Variáveis
Variáveis são como caixas que armazenam um valor.

Para criar uma variável no JavaScript podemos usar as palavras-reservada var e let.

*let pode não funcionar em navegadores mais antigos, esse recurso foi introduzido em 2015.*

Nossa primeira variável:
```
Let nome = "Bruno"
```

Composição de uma variável:
```
Let ou var NOME_DA_VARIAVEL = VALOR
```

Podemos alterar o valor da variável simplesmente escrevendo o seu nome e atribuindo (=) o novo valor:
```
nome = "Bruno Oliveira"
```

O JavaScript não possui tipagem, isso quer dizer, se quisermos sobrescrever o exemplo anterior, com:
```
nome = 32
```

<br>

### ✅ Constantes
Constantes assim como as variáveis são containers de valor.

A grande diferença além do uso da palavra reservada const, é que uma vez inicializada não poderá ter o seu valor trocado.
```
const cpf = 12345678910
cpf = 123 // irá gerar um erro
```

<br>

### ✅ Nomeando variáveis e constantes
Podemos escrever o nome das variáveis seguindo alguns padrões de nomenclatura:
```
Underscore: var primeiro_nome= "Bruno"
PascalCase: var PrimeiroNome= "Bruno"
CamelCase: var primeiroNome= "Bruno"
```

*Não podemos começar uma variável ou constante com um número,caracteres especiais ou usar traço hífen no meio das palavras.*

<br>

### ✅ Questionário
Qual das informações a seguir é incorreta?

A- Uma constante deve ter seu valor atribuído no momento da criação e não poderá ter o valor alterado

B- Podemos usar as palavras reservadas var e let para declarar variáveis

C- Variáveis podem ser declaradas e ter seu valor atribuido posteriormente

D- Uma variável não poderá ter seu valor alterado para o valor de um tipo diferente 

Resposta: letra D