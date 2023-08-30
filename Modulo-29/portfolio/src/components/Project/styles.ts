import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`
export const LinkButton = styled.a`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.backgroundLinkColor};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
