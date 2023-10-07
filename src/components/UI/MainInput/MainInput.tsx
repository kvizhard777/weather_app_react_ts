interface MainInputProps {
  value?: string
  onChange?: (e: any) => void
}

const MainInput = ({ value, onChange }: MainInputProps) => {
  return (
    <input type="text" placeholder="Enter city name..." className="w-full h-12 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg outline-none focus:border-sky-600 transition delay-100 ease-in-out" value={value} onChange={onChange} />
  )
}

export default MainInput