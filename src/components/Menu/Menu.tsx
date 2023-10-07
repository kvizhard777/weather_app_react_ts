import { Icon } from '@iconify/react'
import LinkBlock from '../LinkBlock/LinkBlock'
import MainBtn from '../UI/MainBtn/MainBtn'

const Menu = () => {
  return (
    <>
      <div className='z-50 absolute w-[280px] top-10 right-0 px-2 sm:px-5 py-5 rounded-lg bg-neutral-700/40 backdrop-blur-lg border border-neutral-600'>
        <div className='flex flex-col gap-4'>
          <a href="https://openweathermap.org/api" target='_blank'>
            <LinkBlock />
          </a>

          <a href="https://github.com/kvizhard777/weather_app_react_ts" target='_blank'>
            <MainBtn img={<Icon icon="mdi:github" />} text='Github' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Menu