import React from "react";
import Ticket from "./Ticket";
import Link from "next/link";
import useAppContext from "../utils/hooks/useAppContext";
import { format } from "date-fns";

// const Tickets = [
//   {
//     image:
//       "https://templates.lubnaloom.com/soundwave/wp-content/uploads/sites/9/2024/10/male-musician-playing-acoustic-guitar-guitarist-pl-3VWFQTM.jpg",
//     name: "Jason Mars",
//     price: "$85",
//     date: "07 October 2025",
//     venue: "Skyline Arena, LA",
//     description:
//       "Known for his soulful voice and captivating performances, he will deliver an electrifying show featuring hits from his latest album, Echoes of Tomorrow.",
//   },
//   {
//     image:
//       "https://templates.lubnaloom.com/soundwave/wp-content/uploads/sites/9/2024/10/male-musician-playing-acoustic-guitar-guitarist-pl-3VWFQTM.jpg",
//     name: "Sebastian Blaze",
//     price: "$95",
//     date: "15 November 2025",
//     venue: "Grand Hall, NY",
//     description:
//       "A rising star in the indie-pop scene, known for his ethereal vocals and mesmerizing stage presence, performing songs from his latest album, Starlight Echoes.",
//   },
//   {
//     image:
//       "https://templates.lubnaloom.com/soundwave/wp-content/uploads/sites/9/2024/10/male-musician-playing-acoustic-guitar-guitarist-pl-3VWFQTM.jpg",
//     name: "Liam Carter",
//     price: "$75",
//     date: "22 December 2025",
//     venue: "Moonlight Stadium, SF",
//     description:
//       "Famous for his acoustic ballads and heartfelt lyrics, Liam Carter is set to take the audience on an unforgettable musical journey.",
//   },
// ];

const TicketsSection = () => {
  const { classifyEvents } = useAppContext();
  const events =
    classifyEvents?.upcoming?.length > 4
      ? classifyEvents?.upcoming?.slice(1, 4)
      : classifyEvents?.upcoming;
  const Tickets = events?.map((event) => ({
    image: event.banner?.url || "/wizkid.webp",
    name: event.event_title,
    price: event?.isPaidEvent
      ? `${event?.currency?.symbol}${event?.minTicket?.price || 0}`
      : "Free",
    date: event?.startDate
      ? format(new Date(event?.startDate), "d MMMM yyyy")
      : "loading...",
    venue:
      event?.venue?.venue && event?.venue?.venue?.length > 35
        ? `${event?.venue?.venue?.slice(0, 35)}...`
        : event?.venue?.venue,
    description: event?.description,
  }));

  return (
    <section className="padding md:py-36 py-20 bg-black text-gray-200 space-y-10">
      <div className="space-y-10 contain">
        <div className="text-center">
          <p className="uppercase font-bold text-sm">event calendar</p>
          <h3 className="text-4xl font-anton uppercase font-bold">
            countdown your next favorite event
          </h3>
        </div>

        <ul className="space-y-10 ">
          {Tickets.map((ticket) => (
            <Ticket
              key={ticket.description}
              imageUrl={ticket.image}
              price={ticket.price}
              title={ticket.name}
              description={ticket.description}
              date={ticket.date}
              venue={ticket.venue}
            />
          ))}
        </ul>
        <div className="w-full text-right max-w-[900px] mx-auto">
          <Link
            href="/"
            className="cursor-pointer text-primary text-xl underline"
          >
            see more
          </Link>
        </div>

        <ul className="space-y-10 ">
          {Tickets.map((ticket) => (
            <Ticket
              key={ticket.description}
              imageUrl={ticket.image}
              price={ticket.price}
              title={ticket.name}
              description={ticket.description}
              date={ticket.date}
              venue={ticket.venue}
            />
          ))}
          <div className="w-full text-right max-w-[900px] mx-auto">
            <Link
              href="/"
              className="cursor-pointer text-primary text-xl underline"
            >
              see more
            </Link>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default TicketsSection;
