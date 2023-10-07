import React from "react"

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="container max-w-[1200px] mx-auto px-5 py-5">
      {children}
    </div>
  )
}

export default Wrapper