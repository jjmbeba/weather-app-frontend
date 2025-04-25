import { CurrentWeather } from '@/types/current'
import dayjs from 'dayjs'
import Image from 'next/image'

type Props = {
  data: CurrentWeather
  units: string
}

const Sidebar = ({ data, units }: Props) => {
  return (
    <aside className='fixed w-full md:w-1/4 lg:w-[27%] flex flex-col items-center justify-center h-screen p-4'>
      <div className='flex flex-col items-center justify-between h-[70%]'>
        <div className='flex flex-col items-center'>
          <div className="relative w-[200px] h-[200px] object-contain">
            <Image src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} fill alt={data.weather[0].main} />
          </div>
          <p className='pt-3 text-2xl font-semibold'>
            {Math.round(data.main.temp)} {units === 'imperial' ? '°F' : '°C'}
          </p>
        </div>
        <div className='flex flex-col items-center justify-center w-full gap-1'>
          <span className='text-lg'>
            {dayjs().format('DD MMM YYYY')}
          </span>
          <span className='text-sm text-gray-600'>
            {data.name}
          </span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
