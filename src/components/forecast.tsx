import { CloudSunIcon, CompassIcon } from "lucide-react"


const Forecast = () => {
    return (
        <div className='mt-10'>
            <h1 className='heading-1'>
                3 Day Forecast
            </h1>
            <div className='flex items-center gap-5'>
                {Array.from({ length: 3 }).fill(0).map((_, index) => (
                    <ForecastCard key={`forecast-${index}`} />
                ))}
            </div>
            <div className='mt-5 flex items-center gap-5'>
                <WindCard />
                <HumidityCard />
            </div>
        </div>
    )
}

const ForecastCard = () => {
    return (
        <div className="card">
            <div className="card-body items-center">
                <h2 className="card-header">
                    21 May
                </h2>
                <CloudSunIcon className="size-30" />
                <p className="text-content2">
                    17-21 °C
                </p>
            </div>
        </div>
    )
}

const WindCard = () => {
    return (
        <div className="card">
            <div className="card-body items-center">
                <h2 className="card-header">
                    Wind status
                </h2>
                <p className="text-3xl font-bold py-5">
                    3 km/h
                </p>
                <p className="text-content2">
                    <CompassIcon />
                </p>
            </div>
        </div>
    )
}

const HumidityCard = () => {
    return (
        <div className="card">
            <div className="card-body items-center">
                <h2 className="card-header">
                    Humidity
                </h2>
                <p className="text-3xl font-bold py-5">
                    80 %
                </p>
                <p className="text-content2">
                    <progress className="progress" value="80" max="100"></progress>
                </p>
            </div>
        </div>
    )
}

export default Forecast