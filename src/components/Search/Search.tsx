import { useState } from 'react'
import { Icon } from '@iconify/react'
import MainBtn from "../UI/MainBtn/MainBtn"
import MainInput from "../UI/MainInput/MainInput"

interface SearchProps {
  onSearch?: any
}

const Search = ({ onSearch }: SearchProps) => {
  const [city, setCity] = useState('')

  const handleSearchClick = () => {
    if (city) {
      onSearch(city)
    }
  }

  return (
    <div className='search flex items-center gap-2'>
      <MainInput value={city} onChange={e => setCity(e.target.value)} />
      <MainBtn img={<Icon icon="material-symbols:search" />} text='Search' onClick={handleSearchClick} />
    </div>
  )
}

export default Search