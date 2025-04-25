import { CurrentWeather } from '@/types/current'
import dayjs from 'dayjs'
import { CloudSunIcon } from 'lucide-react'

type Props = {
  data: CurrentWeather
}

const Sidebar = ({ data }: Props) => {
  return (
    <aside className='fixed w-full md:w-1/4 lg:w-[27%] flex flex-col items-center justify-center h-screen p-4'>
      <div className='flex flex-col items-center justify-between h-[70%]'>
        <div className='flex flex-col items-center'>
          <CloudSunIcon className="size-40 mt-12" />
          <p className='pt-3 text-2xl font-semibold'>
            {Math.round(data.main.temp)} °C
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
