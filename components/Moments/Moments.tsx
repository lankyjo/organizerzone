import Image from 'next/image'
import React from 'react'
import PlayBtn from '../PlayBtn'

const Moments = () => {
  return (
    <section
      className='padding text-white'
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/countdownbg.jpg)`,
      }}
    >
      <div className='contain grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
        <div className='space-y-5'>
          <h2 className='text-3xl font-anton font-bold'>
            Live the Moment Again and Again
          </h2>
          <p>
            Missed the show? Or simply want to experience it all over again? Dive into our exclusive collection of concert videos.
          </p>
        </div>

        {['event1', 'event2', 'event3'].map(item => (
          <Images key={item} text={item}/>
        ))}
      </div>
    </section>
  )
}

export default Moments
type Text = {
    text: string
}
const Images = ({text}:Text) => {
  return (
    <div className='relative text-white p-4 overflow-hidden lg:aspect-video aspect-square rounded-3xl'>
        <p className='z-20 relative capitalize'>{text}</p>
      <Image
        src={'/wizkid.webp'}
        alt='images'
        fill
        className='w-full h-full absolute object-cover'
      />
      <PlayBtn/>
    </div>
  )
}
