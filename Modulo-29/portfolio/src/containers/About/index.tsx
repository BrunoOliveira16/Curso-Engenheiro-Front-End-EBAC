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
