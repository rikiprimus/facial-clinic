import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import imgTitle from '../assets/image/img-title.png'

import { MdMap, MdOutlineEmail, MdOutlinePhoneAndroid, MdAccessTime } from "react-icons/md";

const About = () => {
  return (
    <main>
        <Navbar/>
        <div className='flex justify-center items-center bg-four opacity-60'>
          <img src={imgTitle} alt='title-img' className='static opacity-50'/>
          <h1 className='absolute text-white text-[30px] font-bold lg:text-[60px]'>ABOUT</h1>
        </div>
        <div className='flex flex-col items-center text-center my-[50px] px-2 gap-16 lg:my-[80px] md:px-[250px] lg:px-[450px]'>
          <p className='font-semibold text-sm text-lightgrey'>We are a leading company sit amet, consectetur adipisicing elit. Minus obcaecati pariatur officiis molestias eveniet harum laudantium obcaecati pariatur officiis molestias eveniet harum laudantium sed optio iste.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibheuismod tincidunt ut laoreet dolore magna aliquam erat.</p>
          <div className='w-[100px] border-[1px] md:w-[500px]'></div>
        </div>
        <div className='flex flex-col items-center text-center my-[50px] px-16 gap-16 lg:my-[80px] md:px-[100px] lg:px-[250px]'>
          <div className='flex flex-col gap-[80px] lg:gap-[150px] md:flex-row'>
            <div className='flex flex-col items-center gap-4 border-solid border-2 drop-shadow-md p-4'>
              <h1 className='font-semibold text-base text-four'>BOOKING SYSTEM</h1>
              <p className='text-sm text-lightgrey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi, illum laboriosam officiis architecto hic excepturi libero ducimus ad sequi recusandae quas, labore illo in consequatur aliquid porro quos distinctio.</p>
            </div>
            <div className='flex flex-col items-center gap-4 border-solid border-2 drop-shadow-md p-4'>
              <h1 className='font-semibold text-base text-four'>MEMBER CARD</h1>
              <p className='text-sm text-lightgrey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum iusto ad omnis, autem quam ipsa impedit expedita minus debitis assumenda et ullam quisquam sed dolorum ducimus repellendus, laudantium aperiam.</p>
            </div>
          </div>
          <div className='w-[100px] border-[1px] md:w-[500px]'></div>
        </div>
        <div className='flex flex-col items-center my-[50px] px-16 gap-16 lg:my-[80px] md:px-[100px] lg:px-[250px]'>
          <div className='flex flex-col gap-[80px] lg:gap-[150px] md:flex-row'>
            <div className='flex flex-col items-center gap-4 border-solid border-2 drop-shadow-md p-8'>
              <h1 className='font-semibold text-base text-four'>Contact Detail</h1>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-row gap-4 items-center'>
                  <MdMap/>
                  <p className='text-sm text-lightgrey'>Jalan Bekasi</p>
                </div>
                <div className='w-[350px] border-[1px]'></div>
                <div className='flex flex-row gap-4 items-center'>
                  <MdOutlineEmail/>
                  <p className='text-sm text-lightgrey'>@facialclinic.com</p>
                </div>
                <div className='w-[350px] border-[1px]'></div>
                <div className='flex flex-row gap-4 items-center'>
                  <MdOutlinePhoneAndroid/>
                  <p className='text-sm text-lightgrey'>08726774811</p>
                </div>
                <div className='w-[350px] border-[1px]'></div>
                <div className='flex flex-row gap-4 items-center'>
                  <MdAccessTime/>
                  <p className='text-sm text-lightgrey'>Open : 10.00 am - 10.00 pm</p>
                </div>
              </div>
            </div>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.104930631288!2d106.99105065071578!3d-6.249902262913504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c3260d7245f%3A0xab9fda962c93cf16!2sKeiko%20Facial%20Clinic%20(Mega%20Bekasi%20Hypermall)!5e0!3m2!1sid!2sid!4v1678332859162!5m2!1sid!2sid" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className='w-[100px] border-[1px] md:w-[500px]'></div>
        </div>
        <Footer/>
    </main>
  )
}

export default About