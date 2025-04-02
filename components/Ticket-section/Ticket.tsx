import Image from "next/image";
import { FaCalendarAlt, FaMap } from "react-icons/fa";
import { motion } from "framer-motion";

interface Ticket {
  imageUrl: string;
  price: string;
  title: string;
  date: string;
  venue: string;
  description: string;
}
const itemVariants = {
  hidden: { y: 50, opacity: 0 }, // Starts below with opacity 0
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const Ticket = ({
  imageUrl,
  price,
  title,
  date,
  venue,
  description,
}: Ticket) => {
  return (
    <motion.li
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      className="w-full bg-gray-500/50 p-10 flex max-sm:flex-col border-2 border-white rounded-2xl gap-10 max-w-4xl mx-auto"
    >
      <div className="relative w-full mx-auto flex-1/2 aspect-video overflow-hidden rounded-2xl max-w-[350px]">
        <Image
          className="absolute inset-0 object-cover"
          fill
          alt={title}
          src={imageUrl}
        />
      </div>

      <div className="flex-1/2">
        <div className="flex max-sm:flex-col items-center max-sm:items-start justify-between border-b-2 border-white pb-5">
          <h3 className="text-4xl uppercase max-sm:text-xl font-extrabold">
            {title}
          </h3>
          <p className="flex gap-1 items-baseline">
            <span className="font-bold text-2xl">{price}</span>
            <span>/</span>
            <span>Ticket</span>
          </p>
        </div>

        <div className="pt-5 space-y-5">
          <div className="flex max-sm:flex-col justify-between">
            <div className="flex items-center gap-2">
              <span>
                <FaCalendarAlt />
              </span>
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <FaMap />
              </span>
              <span>{venue}</span>
            </div>
          </div>
          <p>{description}</p>
          <div className="flex justify-center max-sm:text-sm gap-10 max-sm:justify-between max-sm:gap-0">
            <button className=" duration-300 hover:text-white cursor-pointer py-2 px-5 max-sm:text-[8px] bg-primary text-gray-950 rounded-4xl max-sm:px-4 max-sm:py-2 max-sm:rounded-3xl">
              Get Ticket
            </button>
            <button className="  cursor-pointer shadow max-sm:text-[8px] shadow-primary bg-transparent rounded-4xl max-sm:rounded-3xl max-sm:px-4 max-sm:py-2 py-2 px-5">
              Info detail
            </button>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default Ticket;
