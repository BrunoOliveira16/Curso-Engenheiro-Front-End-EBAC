## 📝 Aula 02: Componentes
Componentes são a base do React. Eles são pedaços de código autocontidos e lógicos que descrevem uma parte da interface do usuário. Os componentes podem ser compostos juntos para criar uma UI completa, e o React abstrai grande parte do trabalho de renderização, permitindo que você se concentre no design da UI.

Existem dois tipos de componentes no React: componentes de função e componentes de classe. Componentes de função são funções JavaScript que retornam elementos JSX. Eles são mais simples e fáceis de escrever do que componentes de classe, mas não têm algumas das funcionalidades avançadas, como estado e ciclo de vida.

Aqui está um exemplo de um componente de função:

```
function Welcome(props) {
  return <h1>Olá, {props.name}!</h1>;
}
```

Este componente recebe um objeto props como parâmetro e retorna um elemento JSX que exibe uma mensagem de boas-vindas com o nome passado como propriedade. Para usar este componente em outro lugar do código, basta importá-lo e renderizá-lo como qualquer outro elemento JSX:

```
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome name="Nome" />
      <Welcome name="Outro Nome" />
    </div>
  );
}
```

Neste exemplo, estamos importando o componente Welcome e renderizando-o duas vezes com diferentes valores para a propriedade name. Isso é apenas uma introdução aos componentes no React.

<br>

## ✅ Questionário
Sobre os componentes é INCORRETO afirmar que:

A- São compostos por uma junção de JavaScript e XML, conhecido como JSX

B- São pequenos pedaços de códigos que podem ser utilizados para compor uma aplicação maior,

C- São exportados com a palavra-reserva return

D- São exportados com a palavra-reserva export

Resposta: A afirmação INCORRETA é a letra C: “São exportados com a palavra-reserva return”. Os componentes são exportados com a palavra-reserva export, não com return. A palavra return é usada para retornar o resultado de uma função ou componente, mas não para exportá-lo. As outras afirmações estão corretas: os componentes são compostos por uma junção de JavaScript e XML, conhecido como JSX (A), são pequenos pedaços de códigos que podem ser utilizados para compor uma aplicação maior (B), e são exportados com a palavra-reserva export (D).