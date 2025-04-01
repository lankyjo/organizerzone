import React from 'react'

const CountDown = () => {
  return (
    <section className='padding flex items-center justify-center h-screen text-white' style={{ background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/countdownbg.jpg)`,}}>
        <div className='max-w-3xl text-center space-y-10'>
            <h3 className='text-4xl uppercase font-extrabold'>
            The Stage Is Set Are You Ready?
            </h3>
            <p>
            Michael Rock ticket sale in a few day. Keep your spot at the hottest concerts and be part of unforgettable live performances. Book your tickets today before they sell out!
            </p>
            <div className='flex max-w-[450px] mx-auto items-center justify-between gap-5'>
                <div id="days" className='flex flex-col'>
                    <span className='text-3xl font-bold'>00</span>
                    <span>Days</span>
                </div>
                <div id="hours" className='flex flex-col'>
                    <span className='text-3xl font-bold'>00</span>
                    <span>Hours</span>
                </div>
                <div id="minutes" className='flex flex-col'>
                    <span className='text-3xl font-bold'>00</span>
                    <span>Minutes</span>
                </div>
                <div id="seconds" className='flex flex-col'>
                    <span className='text-3xl font-bold'>00</span>
                    <span>Seconds</span>
                </div>
            </div>
            <div className='text-black'>
                    <button className='px-4 py-2 bg-primary rounded-4xl'>Book Ticket</button>
                </div>
        </div>
    </section>
  )
}

export default CountDown