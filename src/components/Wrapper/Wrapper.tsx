import React from "react"

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="container max-w-[800px] mx-auto px-5 py-5 flex flex-col justify-center">
      {children}
    </div>
  )
}

export default Wrapper