import ForecastSkeleton from '@/components/skeletons/forecast';
import React from 'react';

export default function Loading() {
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className="spinner-wave">
                <div className="spinner-wave-dot"></div>
                <div className="spinner-wave-dot"></div>
                <div className="spinner-wave-dot"></div>
                <div className="spinner-wave-dot"></div>
            </div>
        </div>
    );
}
