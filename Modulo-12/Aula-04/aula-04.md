## 📝 Aula 4: Tabelas
Para estilizar uma tabela utilizando o Bootstrap utilizamos a classe table:
```
<tableclass="table">
    //...
</table>
```

Existem algumas variações que podemos utilizar em conjunto com a classe table: table-primary, table-secondary, table-success, table-danger, table-warning, table-info, table-light e table-dark.

Exemplo:
```
<table class="table table-dark">
        <caption>Tabela de produtos</caption>
        <thead>
            <th>Nome do Produto</th>
            <th>Preço Original</th>
            <th>Preço Atual</th>
            <th>Desconto</th>
        </thead>
        <tbody>
            <tr>
                <td>IPhone 13</td>
                <td>R$ 7.000,00</td>
                <td>R$ 5.000,00</td>
                <td>R$ 2.000,00</td>
            </tr>
            <tr>
                <td>IPhone 13</td>
                <td>R$ 7.000,00</td>
                <td>R$ 5.000,00</td>
                <td>R$ 2.000,00</td>
            </tr>
            <tr>
                <td>IPhone 13</td>
                <td>R$ 7.000,00</td>
                <td>R$ 5.000,00</td>
                <td>R$ 2.000,00</td>
            </tr>
        </tbody>
    </table>
```

<br>

### ✅ Questionário
Qual das tags a seguir não é válida para a construção de tabelas?

A- table

B- thead

C- column

D- tfoot 

Resposta: Letra C