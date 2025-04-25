'use client'

import React, { useState } from 'react'

const Navbar = () => {
    const [useFahrenheit, setUseFahrenheit] = useState(false)

    return (
        <nav className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <input className="input w-full md:max-w-[600px]" placeholder="Enter city" />
                <button className='btn'>
                    Go
                </button>
            </div>
            <div className='flex items-center gap-3'>
                Celsius
                <input type="checkbox" checked={useFahrenheit} onChange={() => setUseFahrenheit((prev) => !prev)} className="switch" aria-label='Toggle temperature unit between Celsius and Fahrenheit' />
                Fahrenheit
            </div>
        </nav>
    )
}

export default Navbar