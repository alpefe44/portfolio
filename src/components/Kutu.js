import React from 'react'

export default function Kutu({ title }) {
    return (
        <div className='w-auto h-[300px] bg-white shadow-lg border-2 border-black relative'>
            <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100px] w-[100px] bg-green-600 rounded-full flex items-center justify-center'>
                <h1 className='text-4xl'>{title}</h1>
            </div>
        </div>
    )
}
