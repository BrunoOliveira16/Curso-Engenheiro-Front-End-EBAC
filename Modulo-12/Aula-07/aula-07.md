## 📝 Aula 7: Collapse 
O Collapse no Bootstrap é um componente que permite alternar a visibilidade do conteúdo em seu projeto com algumas classes e plugins JavaScript 1. Ele pode ser usado para mostrar e ocultar outro elemento através de mudanças de classe: .collapse oculta o conteúdo, .collapsing é aplicado durante as transições e .collapse.show mostra o conteúdo.

Exemplo:
```
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#preco">Ver preço</button>
<div class="collapse mt-2" id="preco">
    <p class="h4">3x de R$ 300,00</p>
</div>
```

<br>

### ✅ Questionário
Qual atributo utilizamos para referenciar o elemento que será colapsado?

A- data-target

B- data-bs-collapse

C- data-bs-target

D- data-collapse 

Resposta: Letra C