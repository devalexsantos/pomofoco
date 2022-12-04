import styled from 'styled-components'

export const FooterContainer = styled.footer`
  color: ${(props) => props.theme['gray-300']};
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${(props) => props.theme['gray-300']};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
