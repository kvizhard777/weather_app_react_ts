import { Icon } from '@iconify/react'
import Logo from "../Logo/Logo"
import MenuBtn from "./MenuBtn"
import LinkBlock from '../LinkBlock/LinkBlock'
import MainBtn from '../UI/MainBtn/MainBtn'

interface MenuProps {
  onClick: () => void
}

const Menu = ({ onClick }: MenuProps) => {
  return (
    <>
      <div className='z-50 fixed top-0 left-0 w-full min-h-screen px-5 py-5 bg-neutral-900 flex flex-col gap-12'>
        <div className='flex items-center justify-between'>
          <Logo />
          <MenuBtn img={<Icon icon="material-symbols:close" />} onClick={onClick} />
        </div>

        <div className='flex flex-col gap-8'>
          <LinkBlock />

          <a href="https://github.com/kvizhard777/weather_app_react_ts" target='_blank'>
            <MainBtn img={<Icon icon="mdi:github" />} text='Github' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Menu