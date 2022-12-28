import { HeaderContainer, PomofocusLogo } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <PomofocusLogo>Pomofoco.</PomofocusLogo>
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} weight="bold" />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} weight="bold" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
