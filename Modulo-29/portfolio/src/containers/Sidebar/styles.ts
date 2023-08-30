import styled from 'styled-components'
import { P } from '../../components/Text/styles'

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const ThemeButton = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.buttonTextColor};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
`
