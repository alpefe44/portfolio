import React from 'react'

export default function Kutu({ title, text, link, baslik }) {
    return (
        <a target='_blank' href={`${link}`} className='w-auto h-[300px] bg-white shadow-lg border-2 border-black relative hover:opacity-50 transition-all '>
            <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100px] w-[100px] bg-green-600 rounded-full flex items-center justify-center'>
                <h1 className='text-4xl'>{title}</h1>
            </div>

            <div className='p-5 mt-10 flex flex-col justify-center items-center'>
                <h1 className='mb-5 font-bold text-3xl'>{baslik}</h1>
                <div className='text-center text-gray-600 font-semibold xl:text-base md:text-sm'>
                    {text}
                </div>
            </div>

        </a>
    )
}
