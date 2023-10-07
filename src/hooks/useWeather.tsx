import { useState } from 'react'
import { getWeather } from '../API/getWeather'
import { IWeather } from '../models'

const useWeather = () => {
  const [weatherData, setWeatherData] = useState<IWeather>()

  const handleSearch = async(city: string) => {
    const data = await getWeather(city)
    setWeatherData(data)
  }

  return {
    weatherData, handleSearch
  }
}

export default useWeather