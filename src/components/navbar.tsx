'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const citySchema = z.object({
    city: z.string().min(1, {
        message: "City is required"
    })
})

const Navbar = ({ searchedCity }: { searchedCity: string }) => {
    const router = useRouter()

    const [useFahrenheit, setUseFahrenheit] = useState(false)
    const units = useFahrenheit ? 'imperial' : 'metric'

    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof citySchema>>({
        resolver: zodResolver(citySchema),
        defaultValues: {
            city: ""
        }
    })

    useEffect(() => {
        router.push(`/?city=${searchedCity}&units=${units}`)
    },[units, searchedCity])

    const onSubmit = (values: z.infer<typeof citySchema>) => {
        router.push(`/?city=${values.city}`)
    }

    return (
        <nav className='w-full flex items-center justify-between'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex items-center gap-3'>
                    <input {...register("city")} className={"input w-full md:max-w-[600px]"} placeholder="Enter city" />
                    <button type='submit' className='btn'>
                        Go
                    </button>
                </div>
                {errors.city && <span className='text-sm text-red-500'>City is required</span>}
            </form>
            <div className='flex items-center gap-3'>
                Celsius
                <input type="checkbox" checked={useFahrenheit} onChange={() => {
                    setUseFahrenheit((prev) => !prev)
                }} className="switch" aria-label='Toggle temperature unit between Celsius and Fahrenheit' />
                Fahrenheit
            </div>
        </nav>
    )
}

export default Navbar