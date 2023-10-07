import React from "react"

interface SecondBlockProps {
  children: React.ReactNode
}

const SecondBlock = ({ children }: SecondBlockProps) => {
  return (
    <div className="p-5 bg-neutral-700/20 rounded-2xl backdrop-blur-lg">
      {children}
    </div>
  )
}

export default SecondBlock