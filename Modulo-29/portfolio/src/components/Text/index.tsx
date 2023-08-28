import { P } from './styles'

export type Props = {
  children: string
  typeColor?: 'main' | 'secondary'
}

const Text = ({ children, typeColor = 'main' }: Props) => (
  <P typeColor={typeColor}>{children}</P>
)

export default Text
