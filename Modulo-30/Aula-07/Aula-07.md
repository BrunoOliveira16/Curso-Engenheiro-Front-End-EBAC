## 📝 Aula 07: Atualizando o estado
No Redux, o estado de um componente é atualizado através do despacho de ações. As ações são objetos JavaScript que descrevem uma mudança que deve ocorrer no estado. Elas são despachadas usando a função ``dispatch`` fornecida pelo Redux.

Quando uma ação é despachada, o Redux chama a função reducer correspondente com o estado atual e a ação despachada. A função reducer é responsável por retornar um novo estado com base na ação.

Para um componente React atualizar seu estado em resposta a mudanças no estado do Redux, ele precisa estar conectado ao Redux. Isso é feito usando a função connect fornecida pelo pacote react-redux. A função connect aceita duas funções como argumentos: ``mapStateToProps`` e ``mapDispatchToProps``.

A função ``mapStateToProps`` é usada para mapear partes do estado do Redux para as props do componente. Quando o estado do Redux muda, a função ``mapStateToProps`` é chamada novamente, e se os valores mapeados mudarem, o componente será renderizado novamente com as novas props.

Aqui está um exemplo de como você pode conectar um componente ao Redux e fazer com que ele atualize seu estado em resposta às mudanças no estado do Redux:
```
import React from 'react';
import { connect } from 'react-redux';

class MyComponent extends React.Component {
  render() {
    // O estado do Redux é acessível como props
    const { myValue } = this.props;

    return (
      <div>{myValue}</div>
    );
  }
}

// Mapeia o estado do Redux para as props do componente
const mapStateToProps = state => ({
  myValue: state.myValue,
});

// Conecta o componente ao Redux
export default connect(mapStateToProps)(MyComponent);
```

Neste exemplo, sempre que ``state.myValue`` muda no Redux, ``MyComponent`` será renderizado novamente com o novo valor.

<br>

### Despachar uma action no projeto redux
Para despachar uma ação no Redux, você precisa chamar a função dispatch do Redux com a ação que deseja despachar. A ação é um objeto JavaScript que descreve a mudança que deve ocorrer no estado. Aqui está um exemplo de como você pode despachar uma ação:
```
import { createStore } from 'redux';
import { myReducer } from './myReducer';

// Cria uma store do Redux com o reducer
const store = createStore(myReducer);

// Define uma ação
const myAction = {
  type: 'MY_ACTION_TYPE',
  payload: 'my payload',
};

// Despacha a ação
store.dispatch(myAction);
```

Neste exemplo, estamos criando uma store do Redux com um reducer, definindo uma ação e despachando essa ação para a store. Quando a ação é despachada, o Redux chama o reducer com o estado atual e a ação despachada. O reducer é responsável por retornar um novo estado com base na ação.

Se você estiver usando o React Redux, seus componentes nunca acessam a store diretamente - o connect faz isso por você. O React Redux oferece duas maneiras de permitir que os componentes despachem ações: por padrão, um componente conectado recebe ``props.dispatch`` e pode despachar ações por conta própria.

<br>

## ✅ Questionário
Através de qual função temos acesso ao dispatch?

A- useDispatch do pacote react-redux

B- useDispatch importado do reducer

C- useDispatch do pacote @reduxjs/toolkit

D- useDispatch do pacote redux

Resposta: A- useDispatch do pacote react-redux