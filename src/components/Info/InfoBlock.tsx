import React from 'react'

interface InfoBlockProps {
  img: React.ReactNode
  text: string
  value: string
}

const InfoBlock = ({ img, text, value }: InfoBlockProps) => {
  return (
    <div className='w-[148px] h-28 flex flex-col items-center justify-center gap-3 bg-neutral-600/30 rounded-2xl'>
      <div className='flex items-center gap-2'>
        <div className='text-3xl'>{img}</div>
        <span className='text-lg font-medium'>{text}</span>
      </div>

      <span className='text-3xl font-semibold'>{value}</span>
    </div>
  )
}

export default InfoBlock