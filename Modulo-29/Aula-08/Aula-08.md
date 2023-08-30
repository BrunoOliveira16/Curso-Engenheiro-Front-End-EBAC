## 📝 Aula 08: Criando o componente de projetos
Conteúdo da construção do projeto.

Criado componente de projeto e estilização:
```
import Text from '../Text'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto Lista de Tarefas</Title>
    <Text typeColor="secondary">Lista de Tarefas realizada com Vue.js</Text>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Project
```

```
import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid #c1c1c1;
  padding: 16px;
`
export const LinkButton = styled.a`
  color: #fff;
  font-size: 14px;
  background-color: #44768f;
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
```

<br>

## ✅ Questionário
Sobre a estilização com Styled Components é correto afirmar que:

A- é um framework CSS

B- não podemos estilizar elementos filhos

C- podemos utilizar media queries dentro de um componente estilizado

D- só podemos ter um componente estilizado por arquivo

Resposta: Sobre a estilização com Styled Components, é correto afirmar que podemos utilizar media queries dentro de um componente estilizado (opção C). Styled Components é uma biblioteca para estilizar componentes React, não um framework CSS (opção A). Com o Styled Components, é possível acessar e estilizar os elementos filhos de um componente (opção B). Além disso, não há limite para o número de componentes estilizados que podem ser criados em um único arquivo (opção D).