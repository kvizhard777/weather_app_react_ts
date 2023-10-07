import { useState } from 'react'
import { Icon } from '@iconify/react'
import Logo from "../Logo/Logo"
import MenuBtn from '../Menu/MenuBtn'
import Menu from '../Menu/Menu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuToggleHandler = () => setIsMenuOpen(prev => !prev)

  return (
    <header className="relative flex items-center justify-between">
      <Logo />
      <MenuBtn
        img={isMenuOpen ? <Icon icon="material-symbols:close" /> : <Icon icon="material-symbols:menu" />}
        onClick={menuToggleHandler}
      />
      { isMenuOpen && <Menu /> }
    </header>
  )
}

export default Header