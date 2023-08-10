## 📝 Aula 03: Renderização condicional
A renderização condicional é um recurso do Vue.js que permite exibir ou ocultar elementos da página com base em condições específicas. Isso é útil quando você deseja mostrar ou ocultar partes da interface de usuário dependendo do estado da aplicação.

Um exemplo comum de renderização condicional é mostrar uma mensagem de boas-vindas para usuários autenticados e um formulário de login para usuários não autenticados. Isso pode ser feito usando a diretiva ``v-if`` do Vue.js, como mostrado no exemplo abaixo:

```
<template>
  <div>
    <div v-if="usuarioAutenticado">
      Bem-vindo, {{ nomeUsuario }}!
    </div>
    <div v-else>
      <form>
        <!-- formulário de login -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarioAutenticado: true,
      nomeUsuario: 'João'
    }
  }
}
</script>
```

Neste exemplo, a diretiva ``v-if`` é usada para verificar se a propriedade ``usuarioAutenticado`` é verdadeira. Se for verdadeira, o elemento ``<div>`` que contém a mensagem de boas-vindas será exibido. Caso contrário, o elemento ``<div>`` que contém o formulário de login será exibido. Isso permite que o Vue.js alterne entre os dois elementos com base no valor da propriedade ``usuarioAutenticado``.

### Outras condicionais
Além da diretiva ``v-if``, o Vue.js também fornece outras diretivas para lidar com a renderização condicional, como ``v-else`` e ``v-else-if``. Essas diretivas podem ser usadas em conjunto com ``v-if`` para criar cadeias de condições mais complexas.

Por exemplo, suponha que você tenha uma aplicação que exibe diferentes mensagens para usuários com base em sua idade. Você pode usar as diretivas ``v-if``, ``v-else-if`` e ``v-else`` para criar uma cadeia de condições que verifica a idade do usuário e exibe a mensagem apropriada, como mostrado no exemplo abaixo:

```
<template>
  <div>
    <div v-if="idade < 18">
      Você é menor de idade.
    </div>
    <div v-else-if="idade >= 18 && idade < 30">
      Você é um jovem adulto.
    </div>
    <div v-else-if="idade >= 30 && idade < 60">
      Você é um adulto.
    </div>
    <div v-else>
      Você é um idoso.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idade: 25
    }
  }
}
</script>
```

Neste exemplo, a diretiva ``v-if`` é usada para verificar se a idade do usuário é menor que 18. Se for verdadeira, o elemento ``<div>`` que contém a mensagem “Você é menor de idade” será exibido. Caso contrário, a diretiva ``v-else-if`` é usada para verificar se a idade do usuário está entre 18 e 30. Se for verdadeira, o elemento ``<div>`` que contém a mensagem “Você é um jovem adulto” será exibido. Caso contrário, outra diretiva ``v-else-if`` é usada para verificar se a idade do usuário está entre 30 e 60. Se for verdadeira, o elemento ``<div>`` que contém a mensagem “Você é um adulto” será exibido. Finalmente, se nenhuma das condições anteriores for verdadeira, o elemento ``<div>`` que contém a mensagem “Você é um idoso” será exibido usando a diretiva ``v-else``. Isso permite que o Vue.js alterne entre diferentes elementos com base no valor da propriedade idade.

### V-show
A diretiva ``v-show`` é usada para exibir ou ocultar condicionalmente um elemento em Vue.js. Ela funciona de maneira semelhante à diretiva ``v-if``, mas, em vez de adicionar ou remover elementos do DOM, ela apenas alterna a propriedade CSS display do elemento com base na condição especificada.

Aqui está um exemplo básico de como você pode usar a diretiva ``v-show`` para exibir ou ocultar condicionalmente um elemento:

```
<template>
  <div>
    <button @click="exibir = !exibir">Exibir/Ocultar</button>
    <p v-show="exibir">Olá, Mundo!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exibir: true
    };
  }
};
</script>
```

Neste exemplo, temos um componente Vue com uma propriedade data chamada ``exibir``, que é inicializada como ``true``. No template do componente, temos um botão com um manipulador de eventos ``@click`` que alterna o valor da propriedade ``exibir`` entre ``true`` e ``false`` toda vez que o botão é clicado.

Também temos um elemento p com a diretiva ``v-show`` vinculada à propriedade ``exibir``. Isso significa que o elemento será exibido apenas quando a propriedade ``exibir`` for verdadeira. Quando a propriedade ``exibir`` for falsa, o elemento será ocultado usando a propriedade CSS ``display: none``.

Depois de compilar e executar este código em uma página HTML, você verá um botão e um elemento p contendo o texto "Olá, Mundo!". Se você clicar no botão, o elemento p será ocultado. Se você clicar no botão novamente, o elemento p será exibido novamente.

Em resumo, a diretiva ``v-show`` permite que você exiba ou oculte condicionalmente um elemento em Vue.js. Ela funciona de maneira semelhante à diretiva ``v-if``, mas, em vez de adicionar ou remover elementos do DOM, ela apenas alterna a propriedade CSS display do elemento. Você pode usar essa diretiva para criar interfaces de usuário dinâmicas e atualizá-las facilmente quando os dados mudam.


<br>

## ✅ Questionário
Qual a diferença entre v-show e v-if

A- v-show condiciona a renderização e v-if condiciona exibição

B- v-show condiciona a exiibção e v-if condiciona a renderização

C- não há diferença

D- v-show quando false aplica display: none v-if quando false aplica visibility: hidden no CSS

Resposta: A resposta correta é a letra B. A principal diferença entre v-show e v-if em Vue.js é a maneira como eles condicionalmente renderizam ou exibem elementos. A diretiva v-if é usada para renderizar condicionalmente um bloco, enquanto a diretiva v-show é usada para exibir condicionalmente um elemento.