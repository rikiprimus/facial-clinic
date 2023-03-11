import React, {useState} from 'react';
import { MdViewHeadline, MdClose, MdExpandMore} from "react-icons/md";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import logo from "../assets/image/logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(true)
    const [dropterbaru, setTerbaru] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }
    
    const handleTerbaru = () => {
        setTerbaru(!dropterbaru)
    }

  return (
    <div className='flex justify-between items-center h-24 mx-auto px-[20px]  md:px-[60px] lg:px-[250px] bg-primary'>
        <div className='flex w-full'>
            <div className='w-full'>
                <Link to='/' alt='neraca-ruang'>
                    <img src={logo} alt="logo" className='max-w-[1240px] w-[150px] h-[55px]'/>
                </Link>
            </div>
            <div>
                <ul className='hidden text-darkgrey font-bold md:flex'>
                    <li className='p-4'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='p-4'>
                        <HashLink smooth to='/#paket'>Paket</HashLink>
                    </li>
                    <li className='p-4'>
                        <Link to="/perawatan">Perawatan</Link>
                    </li>
                    <li className='p-4'>
                        <HashLink smooth to='/#testimoni'>Testimoni</HashLink>
                    </li>
                    <li className='p-4'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='p-4'>
                        <a href="#wabook" className='border-solid border-2 border-darkgrey px-6 py-2 text-darkgrey hover:bg-secondary hover:text-darkgrey'>Booking</a>
                    </li>
                </ul>
            </div>
        </div>
        <div onClick={handleNav} className='block cursor-pointer md:hidden'>
            {!nav ? <MdClose className='text-white' size={30}/> : <MdViewHeadline className='text-white' size={30}/>}
        </div>
        <div className={!nav ? 'fixed right-0 top-24 w-[40%] bg-white h-full border ease-in-out duration-300 z-10 md:hidden' : 'fixed right-[-100%]'}>
            <ul className='pt-2'>
                <li className='p-2 flex justify-center'>
                    <Link to="/login" className='border-solid border-2 border-primary px-8 py-2 rounded-[15px] text-primary hover:bg-secondary hover:text-white'>Masuk</Link>
                </li>
                <li className='px-4 py-2 border-b'><Link to="/" className='flex py-2'>Home</Link></li>
                <li className='px-4 py-2 border-b'>
                    <div className='w-full items-center'>
                        <a href='#terbaru' alt='Terbaru' className='flex w-full items-center' onClick={handleTerbaru}>
                            <span className='flex w-full items-center py-2'>Terbaru </span><MdExpandMore className='text-xl'/>
                        </a>
                        <ul className={!dropterbaru ? 'ease-in-out duration-300' : 'hidden' } >
                            <li><Link to="/jurnal" className='sidemenudropdown rounded-t'>Paket</Link></li>
                            <li><Link to="/album" className='sidemenudropdown rounded-b '>Perawatan</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='px-4 py-2 border-b'><Link to="/" className='flex py-2'>About Us</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar