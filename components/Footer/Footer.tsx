import React from 'react'
import { FaFacebook, FaInstagram, FaSpotify, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='padding text-white space-y-20'>
        <div className='grid items-baseline grid-cols-3 max-lg:gap-5 max-md:grid-cols-1 max-lg:grid-cols-2'>
        <div id='logo' className='space-y-5'>
        <h1 className="text-3xl uppercase font-bold">
              <span className="text-primary">O</span>rganizer
        </h1>
        <p>
        Trusted platform for all things live music bringing you closer to the best concerts, artists, and unforgettable performances.
        </p>
        </div>

        <div className='flex justify-center max-md:justify-normal max-lg:w-full max-md:gap-20 gap-10'>
            <div className='space-y-5'>
                <h2 className='font-bold uppercase'>Quick Links</h2>
                <ul className='flex flex-col gap-2'>
                {
                    ['about', 'event', 'Ticket', 'concert'].map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))
                }
                </ul>
            </div>
            <div className='space-y-5'>
                <h2 className='font-bold uppercase'>Useful Links</h2>
                <ul className='flex flex-col gap-2'>
                {
                    ['Event detail', 'Merch', 'Coming soon', 'Line-Ups'].map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))
                }
                </ul>
            </div>
        </div>

        <div className='space-y-5 col-span-2 max-md:col-span-1 max-lg:text-center'>
                <h2 className='text-3xl uppercase font-bold'>Our Newsletter</h2>
                <p>
                Stay Tuned to the Beat – Get Concert Updates Straight to Your Inbox!
                </p>
                <div className='flex gap-5 max-md:flex-col'>
                    <input type="text" className='bg-gray-400 flex-[1] rounded-4xl p-4' placeholder='drop email here'/>
                    <button type='submit' className='rounded-4xl bg-primary px-5 py-4'>Subscribe</button>
                </div>
            </div>
        </div>



            <div className='flex justify-between max-md:flex-col gap-10 items-center rounded-2xl py-8 px-4 bg-gray-400/20'>
                <small className=''>© 2025 ogaticket</small>
                <div className='flex gap-2'>
                    <span className='p-3 rounded-full bg-gray-400/80'><a href=""><FaInstagram className='text-black'/></a></span>
                    <span className='p-3 rounded-full bg-gray-400/80'><a href=""><FaTwitter className='text-black'/></a></span>
                    <span className='p-3 rounded-full bg-gray-400/80'><a href=""><FaFacebook className='text-black'/></a></span>
                    <span className='p-3 rounded-full bg-gray-400/80'><a href=""><FaSpotify className='text-black'/></a></span>
                    <span className='p-3 rounded-full bg-gray-400/80'><a href=""><FaYoutube className='text-black'/></a></span>
                </div>
            </div>
    </footer>
  )
}

export default Footer