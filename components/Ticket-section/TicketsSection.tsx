import React from 'react'
import Ticket from './Ticket';

const Tickets = [
  { 
    image: 'https://templates.lubnaloom.com/soundwave/wp-content/uploads/sites/9/2024/10/male-musician-playing-acoustic-guitar-guitarist-pl-3VWFQTM.jpg',
    name: 'Jason Mars',
    price: '$85',
    date: '07 October 2025',
    venue: 'Skyline Arena, LA',
    description: 'Known for his soulful voice and captivating performances, he will deliver an electrifying show featuring hits from his latest album, Echoes of Tomorrow.'
  },
  { 
    image: 'https://templates.lubnaloom.com/soundwave/wp-content/uploads/sites/9/2024/10/male-musician-playing-acoustic-guitar-guitarist-pl-3VWFQTM.jpg',
    name: 'Sebastian Blaze',
    price: '$95',
    date: '15 November 2025',
    venue: 'Grand Hall, NY',
    description: 'A rising star in the indie-pop scene, known for his ethereal vocals and mesmerizing stage presence, performing songs from his latest album, Starlight Echoes.'
  },
  { 
    image: 'https://templates.lubnaloom.com/soundwave/wp-content/uploads/sites/9/2024/10/male-musician-playing-acoustic-guitar-guitarist-pl-3VWFQTM.jpg',
    name: 'Liam Carter',
    price: '$75',
    date: '22 December 2025',
    venue: 'Moonlight Stadium, SF',
    description: 'Famous for his acoustic ballads and heartfelt lyrics, Liam Carter is set to take the audience on an unforgettable musical journey.'
  }
];

const TicketsSection = () => {
  return (
    <section className='padding bg-black text-gray-200 space-y-10'>
        <div className='text-center'>
            <p className='uppercase font-bold text-sm'>concert schedules</p>
            <h3 className='text-4xl font-anton uppercase font-bold'>countdown your next favorite concert</h3>
        </div>

        <ul className='space-y-10'>
            {
              Tickets.map(ticket  => (
                <Ticket
                key={ticket.description}
                  imageUrl={ticket.image}
                  price={ticket.price}
                  title={ticket.name}
                  description={ticket.description}
                  date={ticket.date}
                  venue={ticket.venue}
                />
              ))
            }
        </ul>
    </section>
  )
}

export default TicketsSection