import { Icon } from '@iconify/react'
import LinkBlock from "../LinkBlock/LinkBlock"
import Logo from "../Logo/Logo"
import MainBtn from "../UI/MainBtn/MainBtn"

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-16">
       <Logo />

       <a href="https://openweathermap.org/api" target="_blank">
        <LinkBlock />
       </a>
      </div>

      <a href="https://github.com/kvizhard777/weather_app_react_ts" target='_blank'>
        <MainBtn img={<Icon icon="mdi:github" />} text='Github' />
      </a>
    </header>
  )
}

export default Header