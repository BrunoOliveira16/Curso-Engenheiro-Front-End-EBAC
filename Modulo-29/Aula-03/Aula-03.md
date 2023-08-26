## 📝 Aula 03: Conhecendo o Styled Components
**`styled-components`** é uma biblioteca para escrever CSS em JavaScript, permitindo que você crie componentes estilizados reutilizáveis. Para instalar o **`styled-components`** em um projeto React com TypeScript, você pode seguir os seguintes passos:

1. Abra um terminal e navegue até o diretório do seu projeto.
2. Execute o seguinte comando para instalar o **`styled-components`** e os tipos TypeScript:
```
npm install --save styled-components @types/styled-components
```
3. Depois de instalado, você pode começar a usar o **`styled-components`** em seus arquivos TypeScript ou TypeScript JSX. Aqui está um exemplo de como criar um componente estilizado com **`styled-components`**:

```json
import styled from 'styled-components';

const Title = styled.h1`
  color: palevioletred;
  font-size: 1.5em;
  text-align: center;
`;

function MyComponent() {
  return <Title>Hello World!</Title>;
}
```

Neste exemplo, criamos um componente **`Title`** estilizado usando a função **`styled.h1`**. O componente **`Title`** renderiza um elemento **`h1`** com os estilos especificados. Você pode usar esse componente em qualquer lugar do seu aplicativo, assim como qualquer outro componente React.

### Vantagens de utilizar styled-components em vez de arquivos CSS separados

Existem várias vantagens em usar **`styled-components`** em vez de arquivos CSS separados:

- **Escopo de estilo**: Com **`styled-components`**, os estilos são aplicados apenas ao componente em que são definidos, evitando conflitos de estilo e tornando mais fácil gerenciar e manter o código.
- **Estilos dinâmicos**: Com **`styled-components`**, você pode usar toda a potência do JavaScript para criar estilos dinâmicos com base nas props, estado ou contexto do componente. Isso permite criar componentes altamente reutilizáveis e personalizáveis.
- **Melhor experiência de desenvolvimento**: Com **`styled-components`**, você pode manter os estilos junto com o código do componente, tornando mais fácil entender e modificar o código. Além disso, muitos editores de código oferecem recursos avançados, como destaque de sintaxe e preenchimento automático de código, ao trabalhar com **`styled-components`**.
- **Reutilização de código**: Com **`styled-components`**, você pode criar componentes estilizados reutilizáveis que podem ser facilmente compartilhados entre diferentes partes do seu aplicativo ou mesmo entre diferentes projetos.

Essas são apenas algumas das muitas vantagens de usar **`styled-components`** em vez de arquivos CSS separados.

### Estilizando componentes com base nas props usando styled-components

Com **`styled-components`**, você pode facilmente estilizar componentes com base nas props passadas para eles. Aqui está um exemplo de como fazer isso:

```json
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function MyComponent() {
  return (
    <>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </>
  );
}
```

Neste exemplo, criamos um componente **`Button`** estilizado usando a função **`styled.button`**. O componente **`Button`** renderiza um elemento **`button`** com os estilos especificados. Observe que estamos usando uma função para calcular o valor das propriedades **`background-color`** e **`color`** com base na prop **`primary`** passada para o componente. Quando a prop **`primary`** é verdadeira, o botão é renderizado com um fundo **`palevioletred`** e texto branco, caso contrário, ele é renderizado com um fundo branco e texto **`palevioletred`**.

<br>

## ✅ Questionário
O que não podemos fazer com o Styled Components?

A- aplicar o alinhamento, estilizar um seletor dentro de outro

B- escrever media queries

C- nenhuma das alternativas anteriores

D- criar animações CSS

Resposta: A resposta correta é a opção C, nenhuma das alternativas anteriores. O Styled Components é uma biblioteca que permite estilizar componentes React de maneira eficiente e intuitiva. Você pode aplicar alinhamento, estilizar um seletor dentro de outro, escrever media queries e criar animações CSS com o Styled Components.