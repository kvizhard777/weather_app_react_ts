interface BageProps {
  text: string
}

const Bage = ({ text }: BageProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-36 h-9 flex items-center justify-center rounded-full font-medium bg-neutral-700">{text}</div>
      <div className="w-full h-[1px] bg-neutral-700 rounded-full" />
    </div>
  )
}

export default Bage