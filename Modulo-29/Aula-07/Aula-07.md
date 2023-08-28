## 📝 Aula 07: Finalizando a seção "Sobre mim"
Conteúdo da construção do projeto.

Finalizado a seção sobre mim do projeto.

Exemplos:
```
import Text from '../../components/Text'
import Title from '../../components/Title'
import { GitHubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Text typeColor="secondary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sint
      laboriosam vel, quo asperiores nostrum minima, nemo quas aspernatur
      numquam non deserunt necessitatibus ut eaque dolor. Error totam repellat
      facere?
    </Text>
    <GitHubSection>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=BrunoOliveira16&theme=highcontrast&layout=compact&langs_count=6" />
      <img src="https://github-readme-stats.vercel.app/api?username=BrunoOliveira16&theme=highcontrast&show_icons=true" />
    </GitHubSection>
  </section>
)

export default About
```

<br>

## ✅ Questionário
Sobre a estilização com Styled Components é INCORRETO afirmar que:

A- o Styled Components evita colisões criando classes únicas

B- podemos acessar os elementos filhos do componente e estiliza-los

C- devem ser criados dentro de um arquivo JavaScript ou TypeScript

D- não podemos acessar os elementos filhos do componente e estiliza-los

Resposta: A afirmação incorreta é a opção D, que diz que não podemos acessar os elementos filhos do componente e estilizá-los. Com o Styled Components, é possível acessar e estilizar os elementos filhos de um componente. As outras opções (A, B e C) são corretas. O Styled Components evita colisões criando classes únicas (opção A), podemos acessar os elementos filhos do componente e estilizá-los (opção B) e os componentes estilizados devem ser criados dentro de um arquivo JavaScript ou TypeScript (opção C).