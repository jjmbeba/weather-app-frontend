import { getForecastsAtNoon } from "@/lib/utils"
import { WeatherForecastItem, WeatherForecastResponse } from "@/types/forecast"
import dayjs from "dayjs"
import Image from "next/image"

const Forecast = async ({ searchedCity, units }: { searchedCity: string, units: string }) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/weather/forecast?city=${searchedCity}&units=${units}`)

        const data: WeatherForecastResponse = await response.json()

        const forecasts = getForecastsAtNoon(data.list)
        return (
            <div className='mt-10'>
                <h1 className='heading-1'>
                    3 Day Forecast - {data.city.name}
                </h1>
                <div className='flex items-center gap-5'>
                    {forecasts.slice(0, 3).map((forecastDay) => (
                        <ForecastCard key={forecastDay.dt} forecastDay={forecastDay} units={units} />
                    ))}
                </div>
            </div>
        )
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p>Failed to load weather data. Please try again later.</p>
            </div>
        );
    }
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