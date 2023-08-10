## 📝 Aula 06: Diretivas v-for
A diretiva ``v-for`` é uma diretiva do Vue.js que permite renderizar uma lista de itens com base em um array ou objeto. Ela é semelhante a um loop ``for`` em JavaScript, mas é usada diretamente no template do componente.

Aqui está um exemplo básico de como você pode usar a diretiva ``v-for`` para renderizar uma lista de itens:

```
<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3']
    };
  }
};
</script>
```

Neste exemplo, temos um componente Vue com um array de ``items`` em sua propriedade ``data``. No template do componente, usamos a diretiva ``v-for`` para iterar sobre o array de ``items`` e renderizar cada item como um elemento ``li`` dentro de uma lista não ordenada.

A sintaxe da diretiva ``v-for`` é semelhante a um loop ``for`` em JavaScript. O primeiro argumento é o nome da variável que será usada para armazenar o valor atual do item na iteração. O segundo argumento é o nome do array ou objeto que será iterado. No exemplo acima, estamos iterando sobre o array ``items`` e armazenando o valor atual do item na variável ``item``.

Também é importante notar que estamos usando a diretiva ``:key`` para atribuir uma chave única a cada elemento ``li``. Isso ajuda o Vue a rastrear cada nó e reutilizá-lo quando possível, melhorando o desempenho da renderização.

Em resumo, a diretiva ``v-for`` permite que você renderize uma lista de itens com base em um array ou objeto. Você pode usar essa diretiva para criar listas dinâmicas e atualizá-las facilmente quando os dados mudam.

<br>

## ✅ Questionário


Resposta: 