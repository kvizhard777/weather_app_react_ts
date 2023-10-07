import { useState } from 'react'
import { Icon } from '@iconify/react'
import LinkBlock from "../LinkBlock/LinkBlock"
import Logo from "../Logo/Logo"
import MainBtn from "../UI/MainBtn/MainBtn"
import MenuBtn from '../Menu/MenuBtn'
import Menu from '../Menu/Menu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuToggleHandler = () => setIsMenuOpen(prev => !prev)

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-16">
       <Logo />

       <a href="https://openweathermap.org/api" target="_blank" className='hidden lg:block'>
        <LinkBlock />
       </a>
      </div>

      <a href="https://github.com/kvizhard777/weather_app_react_ts" target='_blank' className='hidden lg:block'>
        <MainBtn img={<Icon icon="mdi:github" />} text='Github' />
      </a>

      <MenuBtn img={<Icon icon="material-symbols:menu" />} onClick={menuToggleHandler} />

      { isMenuOpen && <Menu onClick={menuToggleHandler} /> }
    </header>
  )
}

export default Header