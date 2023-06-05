## 📝 Aula 8: Alertas
Alertas no Bootstrap são mensagens de feedback contextual para ações típicas do usuário com um punhado de mensagens de alerta disponíveis e flexíveis 1. Eles estão disponíveis para qualquer comprimento de texto e também podem incluir um botão de fechar opcional. Para o estilo adequado, use uma das oito classes contextuais necessárias (por exemplo, .alert-success).

Exemplo:
```
<div class="alert alert-dark alert-dismissible">
    <button class="btn-close" data-bs-dismiss="alert"></button>
    Sou uma mensagem de informação
</div>
```

> OBS: Quando clicamos em fechar o alert, o bootstrap retira este elemento do DOM, não sendo possível aplicar classes CSS para visualizar o elemento novamente, somente recarregando a página.

<br>

### ✅ Questionário
Qual atributo utilizamos no botão para fechar o alert?

A- data-bs-close

B- data-close

C- data-dismiss

D- data-bs-dismiss 

Resposta: Letra D