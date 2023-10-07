import React from 'react'

interface InfoProps {
  img: React.ReactNode
  city: string
  temp: string
}

const Info = ({ img, temp, city }: InfoProps) => {
  return (
    <div className='info flex items-center gap-8'>
      <div className='text-9xl'>{img}</div>
      <div className='info-text flex flex-col gap-2'>
        <span className='text-5xl font-semibold sm:text-6xl'>{city}</span>
        <span className='text-5xl font-semibold'>{temp}</span>
      </div>
    </div>
  )
}

export default Info