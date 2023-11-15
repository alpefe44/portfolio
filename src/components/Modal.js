import React from 'react'
import Modal from 'react-modal';
import { FaFilePdf } from "react-icons/fa";




export default function ModalComp({ modal, setModalOpen }) {

    function closeModal() {
        setModalOpen(false);
    }

    return (
        <Modal isOpen={modal} className={'justify-center items-center flex h-full'}>
            <div className='w-[200px] h-[200px] border-2 shadow-lg bg-slate-100 relative '>
                <button className='absolute right-3 top-0 font-bold ' onClick={() => closeModal()}>X</button>
                <div className='flex flex-col gap-y-5 w-full h-full justify-center items-center'>
                    <h1 className='text-center'>CV'mi tıklayarak indirebilirsiniz</h1>
                    <a href='C:\Users\Alp\Desktop\cvphoto' download className='text-lg text-gray-400'><FaFilePdf /></a>
                </div>
            </div>
        </Modal>
    )
}
