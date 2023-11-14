import React, { useState } from 'react'
import { AiOutlineUnorderedList } from "react-icons/ai";

export default function Navbar() {

  const [isVisible, setVisible] = useState(false)

  return (
    <div className='container rounded-lg' >
      <div className='flex justify-between items-center p-5 bg-slate-100 w-screen px-12 shadow-lg '>
        <h1 className='font-semibold text-2xl text-blue-400 hover:text-black transition-all uppercase cursor-wait hover:text-3xl'>Alp Efe Akpınar</h1>
        <nav className="md:flex md:space-x-12 md:items-center hidden">
          <a href='#' className={`font-semibold text-lg hover:text-blue-400 transition-all hover:border-b-2 hover hover:border-dashed hover:border-green-400`}>Hakkımda</a>
          <a href='#' className='font-semibold text-lg hover:text-blue-400 transition-all hover:border-b-2 hover hover:border-dashed hover:border-green-400'>İletişim</a>
        </nav>
      </div>
    </div>
  )
}
