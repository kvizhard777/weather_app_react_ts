import React from "react"

interface MenuBtnProps {
  img: React.ReactNode
  onClick?: () => void
}

const MenuBtn = ({ img, onClick }: MenuBtnProps) => {
  return (
    <button className="block lg:hidden" onClick={onClick}>
      <div className="text-3xl">{img}</div>
    </button>
  )
}

export default MenuBtn