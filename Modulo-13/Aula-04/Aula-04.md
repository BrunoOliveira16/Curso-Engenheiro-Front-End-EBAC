## 📝 Aula 04: Modal 
Com a Modal podemos estar criando mensagens, informativos, avisos e interagir com o usuário.

A exibição da Modal será como a de um pop up. Este componente é frequente na construção de sistemas onde temos que solicitar o consentimento do usuário para confirmar determinada ação, por exemplo: podemos criar uma Modal para confirmar a exclusão de um produto.

Você pode conferir a documentação oficial do componente: https://getbootstrap.com/docs/5.2/components/modal/

Exemplo desenvolvido:
```
<button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exemplo-modal">Abrir modal</button>
<div class="modal" id="exemplo-modal" data-bs-backdrop="static">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5>Titulo do Modal</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempore doloremque quaerat, assumenda veritatis, atque nihil praesentium eum officiis quod itaque debitis ut at reiciendis necessitatibus magnam sequi totam quae.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Confirmar</button>
            </div>
        </div>
    </div>
</div>
```

<br>

### ✅ Questionário
Através de qual atributo e valor adicionamos o comportamento de não fechar a modal ao clicar fora dela?

A- data-bs-backdrop="static"

B- data-bs-close="true"

C- data-bs-dismiss="static"

D- data-bs-backdrop="close"  

Resposta: Letra A.