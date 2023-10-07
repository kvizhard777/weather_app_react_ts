import React from 'react'
import { Icon } from '@iconify/react'
import Info from "../Info/Info"
import Search from "../Search/Search"
import SecondBlock from "./SecondBlock"
import Bage from '../Bage/Bage'
import InfoBlock from '../Info/InfoBlock'
import useWeather from '../../hooks/useWeather'

const MainBlock = () => {
  const { weatherData, handleSearch } = useWeather()

  let weatherIcon: null | React.ReactNode = null

  switch (weatherData?.weather[0].main) {
    case 'Clear':
      weatherIcon = <Icon icon="material-symbols:sunny" />
      break
    case 'Clouds':
      weatherIcon = <Icon icon="material-symbols:cloudy" />
      break
    case 'Rain':
      weatherIcon = <Icon icon="material-symbols:rainy" />
      break
    case 'Snow':
      weatherIcon = <Icon icon="material-symbols:weather-snowy" />
      break
    case 'Haze':
      weatherIcon = <Icon icon="ri:haze-fill" />
      break
    case 'Fog':
      weatherIcon = <Icon icon="material-symbols:foggy" />
      break
    default:
      weatherIcon = <Icon icon="raphael:no" />
  }

  return (
    <div className="mt-6 p-4 sm:p-8 bg-neutral-950/20 border border-neutral-800 rounded-3xl backdrop-blur-lg">
      <SecondBlock>
        <div className='flex flex-col gap-5'>
          <Search onSearch={handleSearch} />

          { weatherData && (
            <>
              <Info
                img={weatherIcon}
                city={`${weatherData?.name}`}
                temp={`${weatherData?.main.temp.toFixed(1)} °C`}
              />
              <Bage text={`${weatherData?.weather[0].main}`} />

              <div className='info-blocks'>
                <InfoBlock
                  img={<Icon icon="carbon:humidity" />}
                  text='Humidity'
                  value={`${weatherData?.main.humidity} %`}
                />

                <InfoBlock
                  img={<Icon icon="ph:wind-bold" />}
                  text='Wind'
                  value={`${weatherData?.wind.speed.toFixed(1)} m/s`}
                />

                <InfoBlock
                  img={<Icon icon="material-symbols:visibility" />}
                  text='Visibility'
                  value={`${weatherData?.visibility / 1000} km`}
                />

                <InfoBlock
                  img={<Icon icon="carbon:pressure-filled" />}
                  text='Pressure'
                  value={`${weatherData?.main.pressure} Pa`}
                />
              </div>
            </>
          ) }
        </div>
      </SecondBlock>
    </div>
  )
}

export default MainBlock