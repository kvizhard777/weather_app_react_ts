import { Icon } from '@iconify/react'

const LinkBlock = () => {
  return (
    <div className='flex items-center justify-center gap-3 w-[260px] h-[30px] bg-sky-400/20 text-sky-400 rounded-full text-xs font-medium hover:bg-sky-400/40 transition duration-200 ease-in-out'>
      <span>This app using Open Weather API</span>
      <div className='text-xl'>
        <Icon icon="material-symbols:chevron-right" />
      </div>
    </div>
  )
}

export default LinkBlock