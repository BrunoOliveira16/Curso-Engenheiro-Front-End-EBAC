## 📝 Aula 07: Toasts 
Um Toast é basicamente um informativo, um aviso rápido ao usuário, para situações onde temos um texto maior ou ações do usuário o recomendado é utilizarmos a Modal.

Situações onde podemos utilizar o Toast:
- Informar que um processo falhou;
- Informar que um processo foi finalizado;
- E-mail ou mensagem recebida.

Você pode conferir a documentação oficial do componente: https://getbootstrap.com/docs/5.2/components/toasts/

Exemplo desenvolvido:
```
<button type="button" class="btn btn-warning" id="btn-checar-email">Checar cx de entrada</button>

<div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div class="toast" id="mensagem-alerta">
        <header class="toast-header">
            <strong>Importante</strong>
        </header>
        <div class="toast-body">
            Você possui 10 mensagens não lidas!
            <div class="mt-2 pt-2 border-top">
                <button type="button" class="btn btn-danger" data-bs-dismiss="toast">Descartar</button>
            </div>
        </div>
    </div>
</div>

<script>
    const ativadorToast = document.getElementById('btn-checar-email');
    const mensagem = document.getElementById('mensagem-alerta');

    if(ativadorToast) {
        ativadorToast.addEventListener('click', function() {
            const toast = new bootstrap.Toast(mensagem);
            toast.show();
        })
    }
</script>
```

<br>

### ✅ Questionário
Através de qual função do Bootstrap abrimos um Toast?

A- toast.visible()

B- toast.create()

C- toast.show()

D- toast.open() 

Resposta: Letra C.