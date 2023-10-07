import React from "react"

interface MainBtnProps {
  img: React.ReactNode
  text?: string
}

const MainBtn = ({ img, text }: MainBtnProps) => {
  return (
    <button className="flex items-center justify-center gap-4 w-full sm:w-36 h-12 rounded-lg bg-sky-600 border border-sky-500 hover:bg-sky-500 transition duration-200 ease">
      <div className="text-2xl">{img}</div>
      <span className="font-medium">{text}</span>
    </button>
  )
}

export default MainBtn