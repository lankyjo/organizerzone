import Image from "next/image";
import { FaCalendarAlt, FaMap } from "react-icons/fa";
import { motion } from "framer-motion";

interface TicketProps {
  imageUrl: string;
  price: string;
  title: string;
  date: string;
  venue: string;
  description: string;
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const Ticket = ({ imageUrl, price, title, date, venue, description }: TicketProps) => {
  return (
    <motion.li
      id="tickets"
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      className="w-full bg-gray-500/50 p-5 px-5 flex max-sm:flex-col border-2 border-white rounded-2xl gap-10 max-w-[900px] mx-auto"
    >
      {/* Image Section */}
      <div className="relative w-full mx-auto flex-1 aspect-video overflow-hidden rounded-2xl max-w-[350px]">
        <Image
          className="absolute inset-0 object-cover"
          fill
          alt={title}
          src={imageUrl}
        />
      </div>

      {/* Ticket Info Section */}
      <div className="flex-1">
        <div className="flex max-sm:flex-col items-center max-sm:items-start justify-between border-b-2 border-white pb-2">
          <h3 className="text-3xl uppercase max-sm:text-xl font-anton font-extrabold">{title}</h3>
          <p className="flex gap-1 items-baseline">
            <span className="font-bold text-2xl font-anton">{price}</span>
            <span>/</span>
            <span>Ticket</span>
          </p>
        </div>

        {/* Event Details */}
        <div className="pt-3 space-y-3">
          <div className="flex max-sm:flex-col justify-between">
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMap />
              <span>{venue}</span>
            </div>
          </div>
          <p>{description}</p>

          {/* Action Buttons */}
          <div className="flex justify-center max-sm:text-sm gap-10 max-sm:justify-between max-sm:gap-0">
            <button className="py-2 px-5 max-sm:text-[8px] bg-primary text-white rounded-3xl transition duration-300 hover:text-gray-200">
              Get Ticket
            </button>
            <button className="shadow shadow-primary bg-transparent rounded-3xl py-2 px-5 max-sm:text-[8px] border border-primary transition duration-300 hover:bg-primary hover:text-white">
              Info Detail
            </button>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default Ticket;
