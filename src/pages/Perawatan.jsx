import React from 'react'
import { HashLink } from 'react-router-hash-link';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import imgTitle from '../assets/image/img-title.png'
import imgInfo from '../assets/image/img-info.png'

const Perawatan = () => {
  return (
    <main>
        <Navbar/>
        <div className='flex justify-center items-center bg-four opacity-60'>
          <img src={imgTitle} alt='title-img' className='static opacity-50'/>
          <h1 className='absolute text-white text-[30px] font-bold lg:text-[60px]'>INFO PERAWATAN</h1>
        </div>
        <div className='flex flex-col items-center text-center my-[50px] px-2 gap-16 lg:my-[80px] md:px-[250px] lg:px-[450px]'>
          <p className='font-semibold text-sm text-lightgrey'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error magnam obcaecati ad blanditiis sint omnis tempore voluptatibus adipisci fugiat dolorum consequuntur perferendis veritatis, ab perspiciatis inventore officiis dicta eveniet rerum!</p>
          <div className='w-[100px] border-[1px] md:w-[500px]'></div>
        </div>
        <div className='flex flex-row items-center justify-center my-[50px] px-[10px] gap-2 lg:gap-8 lg:my-[80px] lg:px-[200px]'>
            <HashLink smooth to='#kecantikan' className='flex justify-center items-center bg-four opacity-60 w-[120px] lg:w-[250px]'>
                <img src={imgInfo} alt='info-1' className='static opacity-50'/>
                <h1 className='absolute text-white text-[15px] lg:text-[20px] font-semibold'>Kecantikan</h1>
            </HashLink>
            <HashLink smooth to='#perawatan' className='flex justify-center items-center bg-four opacity-60 w-[120px] lg:w-[250px]'>
                <img src={imgInfo} alt='info-1' className='static opacity-50'/>
                <h1 className='absolute text-white text-[15px] lg:text-[20px] font-semibold'>Perawatan</h1>
            </HashLink>
            <HashLink smooth to='#ingridients' className='flex justify-center items-center bg-four opacity-60 w-[120px] lg:w-[250px]'>
                <img src={imgInfo} alt='info-1' className='static opacity-50'/>
                <h1 className='absolute text-white text-[15px] lg:text-[20px] font-semibold'>Ingridient</h1>
            </HashLink>
            <HashLink smooth to='#tips' className='flex justify-center items-center bg-four opacity-60 w-[120px] lg:w-[250px]'>
                <img src={imgInfo} alt='info-1' className='static opacity-50'/>
                <h1 className='absolute text-white text-[15px] lg:text-[20px] font-semibold'>Tips</h1>
            </HashLink>
        </div>
        



        <div className='flex flex-col items-center my-[50px] px-16 gap-16 lg:my-[80px] md:px-[100px] lg:px-[250px]'>
        <div className='w-[100px] border-[1px] md:w-[500px]'></div>
          <div className='flex flex-col items-center gap-[50px] lg:gap-[100px] '>
            <div id='kecantikan' className='flex flex-col items-center gap-4 border-solid border-2 drop-shadow-md p-8 lg:p-16'>
              <h1 className='font-semibold text-base text-four lg:text-2xl'>Kecantikan</h1>
              <p className='text-sm text-lightgrey'>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam natus fugit, suscipit ducimus magnam cumque alias laudantium magni saepe rem praesentium, ex unde, numquam incidunt nulla error laboriosam quos!</p>
            </div>
            <div className='w-[100px] border-[1px] md:w-[500px]'></div>
            <div id='perawatan' className='flex flex-col items-center gap-4 border-solid border-2 drop-shadow-md p-8 lg:p-16'>
              <h1 className='font-semibold text-base text-four lg:text-2xl'>Perawatan</h1>
              <p className='text-sm text-lightgrey'>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam natus fugit, suscipit ducimus magnam cumque alias laudantium magni saepe rem praesentium, ex unde, numquam incidunt nulla error laboriosam quos!</p>
            </div>
            <div id='ingridients' className='w-[100px] border-[1px] md:w-[500px]'></div>
            <div className='flex flex-col items-center gap-4 border-solid border-2 drop-shadow-md p-8 lg:p-16'>
              <h1 className='font-semibold text-base text-four lg:text-2xl'>Ingridients</h1>
              <p className='text-sm text-lightgrey'>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam natus fugit, suscipit ducimus magnam cumque alias laudantium magni saepe rem praesentium, ex unde, numquam incidunt nulla error laboriosam quos!</p>
            </div>
            <div className='w-[100px] border-[1px] md:w-[500px]'></div>
            <div id='tips' className='flex flex-col items-center gap-4 border-solid border-2 drop-shadow-md p-8 lg:p-16'>
              <h1 className='font-semibold text-base text-four lg:text-2xl'>Tips</h1>
              <p className='text-sm text-lightgrey'>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam natus fugit, suscipit ducimus magnam cumque alias laudantium magni saepe rem praesentium, ex unde, numquam incidunt nulla error laboriosam quos!</p>
            </div>
          </div>
        </div>
        
        <Footer/>
    </main>
  )
}

export default Perawatan