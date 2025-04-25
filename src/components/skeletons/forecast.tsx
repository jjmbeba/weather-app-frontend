import React from 'react'

const ForecastSkeleton = () => {
    return (
        <div className="mt-10">
            <div className="skeleton h-8 w-48 mb-6 rounded-md" />
            <div className="flex items-center gap-5">
                {[1, 2, 3].map((key) => (
                    <div key={key} className="card w-[120px] h-[180px] flex flex-col items-center justify-center p-4">
                        <div className="skeleton h-6 w-24 mb-4 rounded-md" />
                        <div className="skeleton relative w-[100px] h-[100px] rounded-md mb-4" />
                        <div className="skeleton h-5 w-32 rounded-md" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ForecastSkeleton