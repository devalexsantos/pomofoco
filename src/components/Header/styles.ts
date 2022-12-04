import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme['gray-100']};

    border-top: 2px solid transparent;
    border-bottom: 3px solid transparent;
    border-radius: 4px;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme['green-500']};
    }

    &.active {
      color: ${(props) => props.theme['green-500']};
    }
  }
`

export const PomofocusLogo = styled.span`
  font-size: 2rem;
  font-family: 'Roboto Mono', monospace;
`
