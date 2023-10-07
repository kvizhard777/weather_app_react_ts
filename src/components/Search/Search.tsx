import { Icon } from '@iconify/react'
import MainBtn from "../UI/MainBtn/MainBtn"
import MainInput from "../UI/MainInput/MainInput"

const Search = () => {
  return (
    <div className='search flex items-center gap-2'>
      <MainInput />
      <MainBtn img={<Icon icon="material-symbols:search" />} text='Search' />
    </div>
  )
}

export default Search