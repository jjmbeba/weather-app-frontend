import { CompassIcon } from 'lucide-react'
import React from 'react'

type Props = {
    humidity: number;
    wind: {
        speed: number;
        deg: number;
    };
}

const ExtraInfo = ({ humidity, wind }: Props) => {
    return (
        <div className='mt-10'>
            <h2 className='heading-1'>
                Humidity and Wind
            </h2>
            <div className='mt-5 flex items-center gap-5'>
                <WindCard wind={wind} />
                <HumidityCard humidity={humidity} />
            </div>
        </div>
    )
}

const WindCard = ({ wind }: { wind: { speed: number; deg: number; } }) => {
    return (
        <div className="card">
            <div className="card-body items-center">
                <h2 className="card-header">
                    Wind status
                </h2>
                <p className="text-3xl font-bold py-5">
                    {wind.speed} km/h
                </p>
                <p className="text-content2 flex items-center gap-2">
                    <CompassIcon />
                    {wind.deg} °
                </p>
            </div>
        </div>
    )
}

const HumidityCard = ({ humidity }: { humidity: number }) => {
    return (
        <div className="card">
            <div className="card-body items-center">
                <h2 className="card-header">
                    Humidity
                </h2>
                <p className="text-3xl font-bold py-5">
                    {humidity} %
                </p>
                <p className="text-content2">
                    <progress className="progress" value={humidity} max="100"></progress>
                </p>
            </div>
        </div>
    )
}

export default ExtraInfo