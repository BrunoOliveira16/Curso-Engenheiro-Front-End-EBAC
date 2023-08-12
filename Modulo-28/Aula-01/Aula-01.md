## 📝 Aula 01: Introdução ao JSX
### React
React é uma biblioteca JavaScript criada pelo Facebook para construir componentes de interface do usuário (UI). React cria um DOM virtual na memória, em vez de manipular diretamente o DOM do navegador. Isso permite que o React faça todas as manipulações necessárias no DOM virtual antes de fazer as alterações no DOM do navegador. O React só altera o que precisa ser alterado, o que torna a renderização mais eficiente.

React é frequentemente referido como um framework JavaScript de front-end, mas é importante notar que ele é apenas uma biblioteca e não um framework completo. Ele pode ser usado com outras bibliotecas para renderizar em diferentes ambientes, como o React Native para construir aplicativos móveis.

React foi criado para minimizar os bugs que ocorrem ao construir interfaces do usuário. Ele faz isso através do uso de componentes - pedaços de código autocontidos e lógicos que descrevem uma parte da interface do usuário. Esses componentes podem ser compostos juntos para criar uma UI completa, e o React abstrai grande parte do trabalho de renderização, permitindo que você se concentre no design da UI.

React pode ser usado para pequenas partes de uma interface ou para toda a interface do usuário de um aplicativo. No entanto, ele não é tão fácil de “incorporar” em um aplicativo como uma biblioteca como jQuery ou mesmo um framework como Vue. É mais acessível quando você constrói todo o seu aplicativo com React. Além disso, muitos dos benefícios da experiência do desenvolvedor em um aplicativo React, como escrever interfaces com JSX, requerem um processo de compilação.

<br>

### JSX
JSX é uma extensão de sintaxe para JavaScript que foi escrita para ser usada em aplicativos React. O código JSX se parece muito com HTML, mas vem com todo o poder do JavaScript. Com JSX, podemos escrever elementos HTML em JavaScript sem usar métodos como createElement() ou appendChild().

Aqui está um exemplo de código JSX:

```
const element = <h1>Olá Mundo!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

Neste exemplo, declaramos a variável ``element`` e a usamos dentro do JSX, renderizando-a com ``ReactDOM.render()``.

JSX também é uma expressão! Podemos utilizar expressões em JSX, transformando-se em chamadas normais de funções que retornam objetos JavaScript. Por exemplo:

```
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Nome',
  lastName: 'Sobrenome'
};

function greeting(user){
  if (user) {
    return <h1>Olá, {formatName(user)}!</h1>;
  }
  return <h1>Olá, anônimo!</h1>;
}
```

Ou seja, você pode utilizar o JSX dentro de estruturas condicionais e laços de repetição, atribuí-los a variáveis, aceitá-los como argumentos e retorná-los de funções Isso é apenas uma introdução ao JSX.

<br>

## ✅ Questionário
Como podemos renderizar um conteúdo dinâmico dentro do React, por exemplo: const nome = “Julio”:

A- echo $nome

B- Utilizando ${nome}

C- $nome

D- {nome}

Resposta: Para renderizar um conteúdo dinâmico dentro do React, podemos utilizar a opção D: {nome}. No React, podemos usar chaves {} para incorporar expressões JavaScript em JSX. 