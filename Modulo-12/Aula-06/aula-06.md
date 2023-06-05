## 📝 Aula 6: Accordions 
Accordions no Bootstrap são componentes que permitem a criação de conteúdo colapsável verticalmente em combinação com o plugin Collapse JavaScript. Eles são úteis para apresentar informações de maneira organizada e concisa, permitindo que o usuário expanda e contraia seções de conteúdo. Alguns exemplos de uso incluem páginas de FAQ, apresentação de vários itens e tabelas de dados.

Exemplo:
```
<div class="accordion">
    <div class="accordion-item">
        <div class="accordion-header">
            <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#resposta-01">
                Pergunta
            </button>
        </div>
        <div id="resposta-01" class="accordion-collapse collapse show">
            <div class="accordion-body">
                Resposta da pergunta
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <div class="accordion-header">
            <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#resposta-02">
                Pergunta 2
            </button>
        </div>
        <div id="resposta-02" class="accordion-collapse collapse">
            <div class="accordion-body">
                Resposta da pergunta 2
            </div>
        </div>
    </div>
</div>
```

<br>

### ✅ Questionário
Qual valor utilizamos para o atributo data-bs-toggle?

A- collapse

B- accordion

C- accordion-collapse

D- tab 

Resposta: Letra A