## 📝 Aula 05: Eventos
Em Vue.js, os eventos são usados para responder a uma ação. Por exemplo, você pode usar a diretiva ``v-on`` para escutar eventos do DOM e executar algum código JavaScript quando o evento for disparado.

Aqui está um exemplo básico de como você pode usar eventos em Vue.js:

```
<template>
  <div>
    <button @click="contador++">Adicionar 1</button>
    <p>O botão acima foi clicado {{ contador }} vezes.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    };
  }
};
</script>
```

Neste exemplo, temos um botão com um manipulador de eventos ``@click`` que incrementa a variável contador toda vez que o botão é clicado. O valor da variável contador é exibido em um elemento ``p`` abaixo do botão.

Além de escutar eventos do DOM, você também pode emitir seus próprios eventos personalizados usando o método ``$emit`` da instância do Vue. Isso permite que você crie componentes personalizados que podem se comunicar com seus componentes pai através de eventos.

Em resumo, os eventos em Vue.js permitem que você responda a ações do usuário e crie componentes interativos. Você pode usar a diretiva ``v-on`` para escutar eventos do DOM e o método $emit para emitir seus próprios eventos personalizados. 

<br>

## ✅ Questionário


Resposta: 