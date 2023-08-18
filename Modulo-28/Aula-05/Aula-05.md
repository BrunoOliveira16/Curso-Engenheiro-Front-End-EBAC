## 📝 Aula 05: Renderizando listas
Renderizar listas é uma tarefa comum ao trabalhar com React. Para renderizar uma lista de itens, podemos usar o método ``map`` do JavaScript para transformar cada item da lista em um elemento JSX. Em seguida, podemos incluir esses elementos JSX no JSX do componente.

Aqui está um exemplo de como podemos renderizar uma lista de nomes em um componente ``ListaNomes``:
```
function ListaNomes(props) {
  const nomes = props.nomes;
  const listaNomes = nomes.map((nome) =>
    <li key={nome.toString()}>
      {nome}
    </li>
  );
  return (
    <ul>{listaNomes}</ul>
  );
}

const nomes = ['Alice', 'Bob', 'Charlie'];
ReactDOM.render(
  <ListaNomes nomes={nomes} />,
  document.getElementById('root')
);
```
Neste exemplo, estamos criando um componente ``ListaNomes`` que recebe uma propriedade ``nomes``, que é um array de strings. Dentro do componente, usamos o método ``map`` para transformar cada nome em um elemento ``<li>`` contendo o nome. Observe que estamos atribuindo uma chave única a cada elemento ``<li>`` usando a propriedade ``key``. Isso é importante para ajudar o React a identificar quais itens foram alterados, adicionados ou removidos quando a lista é atualizada.

Em seguida, incluímos a lista de elementos ``<li>`` dentro de um elemento ``<ul>`` e retornamos o resultado. Quando o componente ``ListaNomes`` é renderizado, ele exibe uma lista não ordenada contendo os nomes passados como propriedade.

<br>

## ✅ Questionário
O que podemos renderizar listas no React?

A- Através da direita react-for

B- Através do forEach dentro do return

C- Através do map dentro do return

D- Através da diretiva v-for

Resposta:  Podemos renderizar listas no React através do método map dentro do return de um componente. Isso significa que a resposta correta é a letra C: “Através do map dentro do return”.