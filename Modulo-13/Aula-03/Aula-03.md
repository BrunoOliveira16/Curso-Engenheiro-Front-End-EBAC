## 📝 Aula 03: Dropdown 
O Dropdown é basicamente um menu, onde temos a ação principal e podemos expandir para outras opções.

Geralmente iremos utilizar este tipo de componente na construção de sistemas onde temos ações de criação, edição ou remoção de algum recurso, como no exemplo da aula, o cadastro de um usuário, fornecedor ou funcionário.

Você pode conferir a documentação oficial do componente: https://getbootstrap.com/docs/5.2/components/dropdowns/


Exemplo desenvolvido:
```
<div class="container mt-3">
        <div class="btn-group">
            <button class="btn btn-primary">Cadastrar</button>
            <button class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"></button>
            <ul class="dropdown-menu dropdown-menu-dark">
                <li class="dropdown-item">
                    <a href="#">Usuário</a>
                </li>
                <li class="dropdown-item">
                    <a href="#">Fornecedor</a>
                </li>
                <li class="dropdown-item">
                    <a href="#">Funcionário</a>
                </li>
            </ul>
        </div>
    </div>
```

<br>

### ✅ Questionário
Através de qual atributo e valor informamos que o botão deve ter o comportamento de abrir um menu?

A- data-bs-toggle="dropdown"

B- data-bs-target="dropdown"

C- data-bs-dropdown="toggle"

D- data-bs-dropdown="true"  

Resposta: Letra A.