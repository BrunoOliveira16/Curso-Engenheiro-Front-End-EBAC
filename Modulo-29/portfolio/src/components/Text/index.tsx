import { P } from './styles'

export type Props = {
  children: string
  typeColor?: 'main' | 'secondary'
  fontSize?: number
}

const Text = ({ children, typeColor = 'main', fontSize }: Props) => (
  <P typeColor={typeColor} fontSize={fontSize}>
    {children}
  </P>
)

export default Text
