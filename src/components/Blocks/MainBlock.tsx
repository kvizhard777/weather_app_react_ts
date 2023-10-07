import { Icon } from '@iconify/react'
import Info from "../Info/Info"
import Search from "../Search/Search"
import SecondBlock from "./SecondBlock"
import Bage from '../Bage/Bage'
import InfoBlock from '../Info/InfoBlock'

const MainBlock = () => {
  return (
    <div className="mt-6 p-4 sm:p-8 bg-neutral-950/20 border border-neutral-800 rounded-3xl backdrop-blur-lg">
      <SecondBlock>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-5'>
            <Search />
            <Info img={<Icon icon="material-symbols:sunny" />} city='Moscow' temp='22.5 C' />
            <Bage text='Sunny' />
          </div>

          <div className='info-blocks'>
            <InfoBlock img={<Icon icon="carbon:humidity" />} text='Humidity' value='50%' />
            <InfoBlock img={<Icon icon="carbon:humidity" />} text='Humidity' value='50%' />
            <InfoBlock img={<Icon icon="carbon:humidity" />} text='Humidity' value='50%' />
            <InfoBlock img={<Icon icon="carbon:humidity" />} text='Humidity' value='50%' />
          </div>
        </div>
      </SecondBlock>
    </div>
  )
}

export default MainBlock