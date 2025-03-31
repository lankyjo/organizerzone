import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen">
            <div id="video-bg" className="absolute -z-1 pointer-events-none select-none inset-0 w-full h-full">
                <iframe
                    className="w-full h-full object-cover"
                    src="https://www.youtube.com/embed/zm96T-_2edI?autoplay=1&mute=1&loop=1&playlist=zm96T-_2edI&controls=0&modestbranding=1&showinfo=0&rel=0&start=0&end=60"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>            
            </div>
{/* 
            <div className='max-w-xl border p-4'>
                <h1>Where music comes alive</h1>
            </div> */}
        </section>
    );
};

export default Hero;
