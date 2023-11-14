import React from 'react'
import Navbar from '../components/Navbar'
import Kutu from '../components/Kutu'

export default function HomeScreen() {
    return (
        <div className='flex flex-col h-screen w-screen'>
            <Navbar></Navbar>
            <div className='h-[100px]'></div>
            <div className='flex justify-center items-center'>
                <h1 className='font-bold text-4xl text-black shadow-sm'>Get Started </h1>
            </div>

            <div className='container m-auto grid grid-cols-3 gap-4 w-screen'>
                <Kutu title={1}></Kutu>
                <Kutu title={2}></Kutu>
                <Kutu title={3}></Kutu>
            </div>

        </div>
    )
}
