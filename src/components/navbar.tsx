'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const citySchema = z.object({
    city: z.string().min(1, {
        message: "City is required"
    })
})

const Navbar = () => {
    const [useFahrenheit, setUseFahrenheit] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof citySchema>>({
        resolver: zodResolver(citySchema),
        defaultValues: {
            city: ""
        }
    })

    const onSubmit = (values: z.infer<typeof citySchema>) => {
        console.log(values)
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
                <input type="checkbox" checked={useFahrenheit} onChange={() => setUseFahrenheit((prev) => !prev)} className="switch" aria-label='Toggle temperature unit between Celsius and Fahrenheit' />
                Fahrenheit
            </div>
        </nav>
    )
}

export default Navbar