import React from 'react'

interface CenterProps {
  children: React.ReactNode
}

const Center = ({ children }: CenterProps) => {
  return (
    <div className='flex flex-col justify-center min-h-screen'>
      {children}
    </div>
  )
}

export default Center