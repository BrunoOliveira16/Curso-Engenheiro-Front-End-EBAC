<template>
  <h1>{{ dizOla(nome) }}</h1>

  <img v-if="gostaDoBatman" :src="urlImagemBatman" alt="imagem do Batman" width="500" height="300">
  <img v-else-if="gostaDoSuperman" :src="urlImagemSuperman" alt="imagem do Superman" width="500" height="300">
  <h2 v-else>Não curte Heróis da DC</h2><br><br>

  <button :disabled="botaoEstaDesabilitado">Enviar mensagem</button><br><br><hr>

  {{ estado.contador }}

  <button type="button" @click="incrementar">+</button>
  <button type="button" @click="decrementar">-</button>

  <br><br><hr>

  {{ estado.email }}<br><br>
  <input type="email" @keyup="alteraEmail">

  <br><br><hr>

  Saldo: {{ estado.saldo }} <br>
  Transferindo: {{ estado.transferindo }} <br>
  Saldo final: {{ mostraSaldoFuturo() }}<br>
  <input class="campo" :class="{ invalido: !validaValorTransferencia() }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir">
  <button v-if="validaValorTransferencia()">Transferir</button>
  <span v-else>Valor maior que o saldo</span>

  <br><br><hr>

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  <input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Digite um novo nome">
  <button @click="cadastraNome" type="button">Cadastrar Nome</button>

  <h4 v-for="nome in estado.nomes">{{ nome }}</h4>
</template>

<script setup>
import { reactive } from 'vue';

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

  // let contador = 0
  const estado = reactive({
    contador: 0,
    email: '',
    saldo: 5000,
    transferindo: 0,
    nomes : ['João', 'Maria', 'Donald', 'Arnold'],
    nomeAInserir: ''
  })

  function incrementar() {
    estado.contador++;
  }

  function decrementar() {
    estado.contador--;
  }

  function alteraEmail(evento) {
    estado.email = evento.target.value;
  }

  function mostraSaldoFuturo() {
    const { saldo, transferindo } = estado
    return saldo - transferindo;
  }

  function validaValorTransferencia() {
    const { saldo, transferindo } = estado
    return saldo >= transferindo;
  }

  function cadastraNome() {
    if(estado.nomeAInserir.length >= 3) {
      estado.nomes.push(estado.nomeAInserir);
    } else {
      alert('Nome inválido, menor que 3 caracteres')
    }
  }
</script>

<style scoped>

.invalido {
  outline-color: red;
  border-color: red;
}

.campo {
  border: 2px solid gray;
}
</style>
