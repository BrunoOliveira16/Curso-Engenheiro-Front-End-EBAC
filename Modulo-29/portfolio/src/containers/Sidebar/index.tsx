import Avatar from '../../components/Avatar'
import Text from '../../components/Text'
import Title from '../../components/Title'
import { Description, SidebarContainer, ThemeButton } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Bruno Oliveira</Title>
      <Text typeColor="secondary" fontSize={16}>
        BrunoOliveira16
      </Text>
      <Description fontSize={12} typeColor="main">
        Engenheiro Front-end
      </Description>
      <ThemeButton onClick={props.changeTheme}>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
