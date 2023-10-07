const apiKey: string = 'b7a1fe20fd6bec1aa911a8fee98ee68f'
const apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`

export const getWeather = (city: string) => {
  const getWeatherData = async() => {
    const response = await fetch(`${apiUrl}&q=${city}`)
    const data = await response.json()
    return data
  }

  return getWeatherData()
}