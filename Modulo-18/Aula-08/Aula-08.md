## 📝 Aula 08: JavaScript Math
Nesta aula, desenvolvemos a lógica no javascript para os números sorteados:
```
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})
```

<br>

### ✅ Questionário
Qual função utilizamos para arredondar um número para baixo, ou seja, considerar apenas a parte inteira do número?

A- Math.ceil(4.52)

B- floor(4.52)

C- Math.round(4.52)

D- Math.floor(4.52)

Resposta: A resposta correta é a opção D. A função Math.floor() é usada para arredondar um número para baixo, ou seja, considerar apenas a parte inteira do número. Por exemplo, Math.floor(4.52) retorna o valor 4, que é a parte inteira do número 4.52.