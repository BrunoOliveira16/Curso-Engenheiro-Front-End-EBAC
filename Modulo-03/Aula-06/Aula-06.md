## 📝 Aula 06: Formulários
### ✅ Formulários
Para construir um formulário com o HTML possuímos as tags:

``<form>``: container do formulário, todos os campos e botões deverão estar dentro desta tag;

``<input>``: para inserir um campo;

``<select>``: para criar uma lista de opções, uma caixa de seleção;

``<button>``: para inserir botões;

<br>

### ✅ Formulários - Tipos de campo
Na tag ``<input>`` possuímos um atributo chamado type, este atributo pode receber os valores:
- text: para campos de texto;
- email: para campos que receberão um e-mail;
- tel: para campos que irão receber um número de telefone;
- file: para campos que serão utilizados para anexar um arquivo;
- color: para campos que receberão uma cor;
- checkbox: para criar caixas de marcação;
- radio: para criar campos de opção.

<br>

### ✅ Formulários - Validações
Podemos informar ao navegador que um campo é obrigatório utilizando o atributo required=“true”, ou apenas adicionamento o atributo required. Além disso quando utilizamos o type correto para o input, o próprio navegador aplica uma validação, caso digitemos um valor incorreto para um campo de e-mail, o navegador irá retornar uma mensagem alertando.

<br>

### ✅ Questionário
1- Através de qual atributo na tag Input informamos ao usuário que esperamos receber o nome completo no campo?

a- placeholder="Nome Completo" 

b- label="Nome Completo"

c- hint="Nome Completo"

d- name="Nome Completo"

Resposta: letra a