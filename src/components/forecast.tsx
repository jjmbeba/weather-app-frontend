import { WeatherForecastItem, WeatherForecastResponse } from "@/types/forecast"
import dayjs from "dayjs"
import { CloudSunIcon } from "lucide-react"

const Forecast = async ({ searchedCity }: { searchedCity: string }) => {
    const data: WeatherForecastResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/weather/forecast?city=${searchedCity}`).then((res) => res.json())

    return (
        <div className='mt-10'>
            <h1 className='heading-1'>
                3 Day Forecast - {data.city.name}
            </h1>
            <div className='flex items-center gap-5'>
                {data.list.slice(0, 3).map((forecastDay) => (
                    <ForecastCard key={forecastDay.dt} forecastDay={forecastDay} />
                ))}
            </div>
        </div>
    )
}

const ForecastCard = ({ forecastDay }: {
    forecastDay: WeatherForecastItem
}) => {
    console.log(forecastDay.weather)
    const { temp_max, temp_min } = forecastDay.main

    return (
        <div className="card">
            <div className="card-body items-center">
                <h2 className="card-header">
                    {dayjs(forecastDay.dt_txt).format('DD MMM')}
                </h2>
                <img src={`https://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png`} alt={forecastDay.weather[0].main} />
                <p className="text-content2">
                    {Math.round(temp_min)} - {Math.round(temp_max)} °C
                </p>
            </div>
        </div>
    )
}

export default Forecast