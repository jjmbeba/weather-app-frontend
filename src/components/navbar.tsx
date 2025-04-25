'use client'

import React, { useState } from 'react'

const Navbar = () => {
    const [useFahrenheit, setUseFahrenheit] = useState(false)

    return (
        <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <input className="input w-[800px]!" placeholder="Welcome!" />
                <button className='btn'>
                    Go
                </button>
            </div>
            <div className='flex items-center gap-3'>
                Celcius
                <input type="checkbox" checked={useFahrenheit} onChange={() => setUseFahrenheit((prev) => !prev)} className="switch" />
                Fahrenheit
            </div>
        </div>
    )
}

export default Navbar