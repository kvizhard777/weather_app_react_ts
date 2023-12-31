import React from "react"

interface MenuBtnProps {
  img: React.ReactNode
  onClick?: () => void
}

const MenuBtn = ({ img, onClick }: MenuBtnProps) => {
  return (
    <button onClick={onClick}>
      <div className="text-3xl">{img}</div>
    </button>
  )
}

export default MenuBtn