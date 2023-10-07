import { Icon } from '@iconify/react'

const Logo = () => {
  return (
    <div className='flex items-center gap-4 text-white'>
      <div className='text-5xl'>
        <Icon icon="material-symbols:weather-mix" />
      </div>
      <span className='text-2xl font-bold'>Weather</span>
    </div>
  )
}

export default Logo