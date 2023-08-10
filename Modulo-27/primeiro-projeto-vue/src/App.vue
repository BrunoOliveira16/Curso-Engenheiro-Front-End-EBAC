<template>
  <h1>{{ dizOla(nome) }}</h1>

  <img v-if="gostaDoBatman" :src="urlImagemBatman" alt="imagem do Batman" width="500" height="300">
  <img v-else-if="gostaDoSuperman" :src="urlImagemSuperman" alt="imagem do Superman" width="500" height="300">
  <h2 v-else>Não curte Heróis da DC</h2><br><br>

  <button :disabled="botaoEstaDesabilitado">Enviar mensagem</button>
</template>

<script setup>
  const nome = 'Bruno'
  const meuObj = {
    nome: 'Bruno',
    filmeFavorito: 'Vingadores'
  }

  function dizOla() {
    return `${nome} diz oi`
  }

  const urlImagemBatman = 'https://image.api.playstation.com/vulcan/img/rnd/202010/2621/H9v5o8vP6RKkQtR77LIGrGDE.png'
  const urlImagemSuperman = 'https://www.cultura.sp.gov.br/wp-content/uploads/2018/12/camiseta-superman-hq-ref-sm-hq-08-D_NQ_NP_373505-MLB25038562421_092016-F-1013x1080.jpg'

  const botaoEstaDesabilitado = false;

  const gostaDoBatman = true
  const gostaDoSuperman = false
</script>

<style scoped>
</style>
