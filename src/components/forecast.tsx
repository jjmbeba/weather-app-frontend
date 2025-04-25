import { WeatherForecastItem, WeatherForecastResponse } from "@/types/forecast"
import dayjs from "dayjs"
import Image from "next/image"

const Forecast = async ({ searchedCity, units }: { searchedCity: string, units: string }) => {
    const data: WeatherForecastResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/weather/forecast?city=${searchedCity}&units=${units}`).then((res) => res.json())

    return (
        <div className='mt-10'>
            <h1 className='heading-1'>
                3 Day Forecast - {data.city.name}
            </h1>
            <div className='flex items-center gap-5'>
                {data.list.slice(0, 3).map((forecastDay) => (
                    <ForecastCard key={forecastDay.dt} forecastDay={forecastDay} units={units} />
                ))}
            </div>
        </div>
    )
}

const ForecastCard = ({ forecastDay, units }: {
    forecastDay: WeatherForecastItem
    units: string
}) => {
    const { temp_max, temp_min } = forecastDay.main

    return (
        <div className="card">
            <div className="card-body items-center">
                <h2 className="card-header">
                    {dayjs(forecastDay.dt_txt).format('DD MMM')}
                </h2>
                <div className="relative w-[100px] h-[100px] object-contain">
                    <Image src={`https://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png`} fill alt={forecastDay.weather[0].main} />
                </div>
                <p className="text-content2">
                    {Math.round(temp_min)} - {Math.round(temp_max)} {units === 'imperial' ? '°F' : '°C'}
                </p>
            </div>
        </div>
    )
}

export default Forecast