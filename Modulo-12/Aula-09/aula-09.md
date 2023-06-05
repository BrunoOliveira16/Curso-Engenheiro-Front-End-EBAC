## 📝 Aula 9: Formulários 
Para estilizar um formulário e seus elementos utilizando o Bootstrap temos as classes:

- ``form-label:`` para os elementos label;

- ``form-control:`` para os campos de entrada de dados, inputs e textarea;

- ``form-select:`` para os elementos select;

- ``form-check-label:`` para os elementos label do input tipo check;

- ``form-check-input:`` para os elementos input do tipo check.

Exemplo:
```
<div class="row">
    <div class="col">
        <h2>Entre em contato</h2>
        <form>
            <label for="nome" class="form-label">Seu nome:</label>
            <input class="form-control" type="text" id="nome">
            <label for="email" class="form-label">Seu email:</label>
            <input class="form-control" type="email" id="email">
            <label for="mensagem" class="form-label">Sua mensagem:</label>
            <textarea class="form-control" id="mensagem"></textarea>
            <div class="form-check form-switch">
                <label for="aceito-termos">Li e concordo com os termos do site</label>
                <input type="checkbox" class="form-check-input" id="aceito-termos">
            </div>
            <button class="btn btn-success">Enviar</button>
        </form>
    </div>
</div>
```

<br>

### ✅ Questionário
Qual classe do Bootstrap utilizamos para estilizar os inputs?

A- input

B- bs-input

C- form-control

D- form-input 

Resposta: Letra C