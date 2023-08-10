## 📝 Aula 04: Two way data binding
Two-way data binding é um recurso do Vue.js que permite a sincronização automática entre o modelo de dados e a interface do usuário. Isso significa que quando o modelo de dados é atualizado, a interface do usuário é atualizada automaticamente para refletir as alterações. Da mesma forma, quando a interface do usuário é atualizada, o modelo de dados é atualizado automaticamente para refletir as alterações.

Um exemplo comum de two-way data binding é um formulário com campos de entrada que são vinculados a propriedades do modelo de dados. Isso pode ser feito usando a diretiva ``v-model`` do Vue.js, como mostrado no exemplo abaixo:

```
<template>
  <div>
    <input type="text" v-model="mensagem">
    <p>{{ mensagem }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensagem: ''
    }
  }
}
</script>
```

Neste exemplo, a diretiva v-model é usada para vincular o valor do campo de entrada à propriedade mensagem do modelo de dados. Quando o usuário digita algo no campo de entrada, o valor da propriedade mensagem é atualizado automaticamente para refletir as alterações. Da mesma forma, quando a propriedade mensagem é atualizada, o valor do campo de entrada é atualizado automaticamente para refletir as alterações. Isso permite que o Vue.js mantenha o modelo de dados e a interface do usuário sincronizados automaticamente.

<br>

## ✅ Questionário
Como adicionamos um evento a um elemento com VueJS?

A- na própria tag adicionando @ antes do nome evento

B- na própria tag adiciona v- antes do nome do evento

C- através de addEventListener

D- na própria tag adicionando "on" antes do nome do evento

Resposta: A resposta correta é a letra A. No Vue.js, você pode adicionar um evento a um elemento usando a diretiva v-on ou o atalho @. A diretiva v-on é usada para escutar eventos do DOM e executar algum código JavaScript quando o evento for disparado.