import React from 'react';

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  
    return (
    <div className="w-full flex flex-col items-center gap-12 text-darkgrey p-[50px] pt-[100px] bg-primary lg:px-[200px]">
        <div className='grid grid-cols-2 gap-8 lg:grid-cols-3'>
            <div className='flex flex-col gap-8'>
                <h1 className="font-semibold text-xl lg:text-2xl">About Facial</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat expedita aliquam quisquam similique illum nisi facilis facere. Voluptas suscipit voluptatum tempora ad quod quisquam rem, unde iure beatae eaque?</p>
            </div>
            <div className='flex flex-col pl-[40px] gap-8'>
                <h1 className="font-semibold text-xl lg:text-2xl">Informasi</h1>
                <ul className='flex flex-col gap-2'>
                    <li>
                        <Link smooth to='/' className='hover:text-secondary' onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }}>Home</Link>
                    </li>
                    <li>
                        <Link to='/perawatan' className='hover:text-secondary' onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }}>Tips Perawatan</Link>
                    </li>
                    <li>
                        <HashLink smooth to='/#paket' className='hover:text-secondary'>Paket</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to='/#testimoni' className='hover:text-secondary'>Testimonial</HashLink>
                    </li>
                    <li>
                        <Link to='/about' className='hover:text-secondary' onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }}>About</Link>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-8'>
                <h1 className="font-semibold text-xl lg:text-2xl">Alamat</h1>
                <p>Hypermall - Jl. Jend. Ahmad Yani No. 1, Bekasi Barat.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer