import React from 'react'

import biokos from '../assets/image/biokos.png';
import jansen from '../assets/image/jansen.png';
import organic from '../assets/image/organic.png';

function Paket() {
  return (
    <div id='paket' className='flex flex-col items-center justify-between gap-8 w-full bg-greys my-[150px] p-8 rounded-t-[50px]'>
        <div className='flex flex-col items-center gap-2 lg:gap-4'>
            <h1 className='font-bold text-[#832727] text-xl lg:text-3xl'>If you have a FACE; you need a FACIAL !</h1>
            <p className='font-semibold text-darkgrey text-xs lg:text-sm'>Facial Treatment "Berkualitas" dengan "Harga Terjangkau"</p>
        </div>
        <div className='grid grid-cols-3 gap-2 lg:gap-8'>
            <div className='flex flex-col items-center gap-4 text-lightgrey bg-white rounded-lg w-[200px] p-4 lg:w-[300px]'>
                <h1 className='font-bold'>PAKET BASIC</h1>
                <div className='w-[100px] border-[1px]'></div>
                <div className='flex flex-col items-center gap-2 h-[300px] text-sm'>
                    <p>Facial Treatment</p>
                    <p>Facial Massage</p>
                    <p>Totok Wajah</p>
                    <p>Facial Steam</p>
                    <p>Therapy Alat Facial</p>
                    <p>+FREE : hands Scrub for</p>
                    <p>Girl/Woman Only</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-[#20C030] text-xl'>RP.60 Ribu</h1>
                    <p className='text-sm'>(+/-30 menit)</p>
                </div>
                <a href='#wacall' alt='wa1' className='bg-four p-2 px-8 rounded-lg text-white font-bold'>BOOK</a> 
            </div>
            <div className='flex flex-col items-center gap-4 text-lightgrey bg-white rounded-lg w-[200px] p-4 lg:w-[300px]'>
                <h1 className='font-bold'>PAKET INTENSIVE</h1>
                <div className='w-[100px] border-[1px]'></div>
                <div className='flex flex-col items-center text-center gap-2 h-[300px] text-sm'>
                    <p>Facial Treatment</p>
                    <p>Facial Massage</p>
                    <p>Totok Wajah</p>
                    <p>Facial Steam</p>
                    <p>Therapy Alat Facial</p>
                    <p>+Masker Khusus sesuai jenis kulit</p>
                    <p>+Serum sesuai jenis/masalah kulit</p>
                    <p>+FREE : hands Scrub for</p>
                    <p>Girl/Woman Only</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-[#20C030] text-xl'>RP.120 Ribu</h1>
                    <p className='text-sm'>(+/-60 menit)</p>
                </div>
                <a href='#wacall' alt='wa1' className='bg-four p-2 px-8 rounded-lg text-white font-bold'>BOOK</a> 
            </div>
            <div className='flex flex-col items-center gap-4 text-lightgrey bg-white rounded-lg w-[200px] p-4 lg:w-[300px]'>
                <h1 className='font-bold'>PAKET EXCLUSIVE</h1>
                <div className='w-[100px] border-[1px]'></div>
                <div className='flex flex-col items-center text-center gap-2 h-[300px] text-sm'>
                    <p>Facial Treatment</p>
                    <p>Facial Massage</p>
                    <p>Totok Wajah</p>
                    <p>Facial Steam</p>
                    <p>Therapy Alat Facial</p>
                    <p>+Masker Premium sesuai jenis kulit</p>
                    <p>+Serum Premium sesuai jenis/masalah kulit</p>
                    <p>+FREE : hands Scrub for</p>
                    <p>Girl/Woman Only</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-[#20C030] text-xl'>RP.160 Ribu</h1>
                    <p className='text-sm'>(+/75 menit)</p>
                </div>
                <a href='#wacall' alt='wa1' className='bg-four p-2 px-8 rounded-lg text-white font-bold'>BOOK</a> 
            </div>
        </div>
        <div className='flex flex-col w-full items-center text-darkgrey gap-6'>
            <h1 className='font-bold text-lg lg:text-2xl'>Kami Menggunakan Product Facial dari</h1>
            <div className='flex flex-row items-center gap-6'>
                <img src={biokos} alt='product-biokos' className='h-[100px] lg:h-[150px]'/>
                <img src={jansen} alt='product-biokos' className='h-[30px] lg:h-[50px]'/>
                <img src={organic} alt='product-biokos' className='h-[100px] lg:h-[150px]'/>
            </div>
        </div>
    </div>
  )
}

export default Paket