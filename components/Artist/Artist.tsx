import Image from "next/image";
import Link from "next/link";
import {
  FaCalendar,
  FaClock,
  FaLocationArrow,
  FaSpotify,
} from "react-icons/fa";
import { motion } from "framer-motion";
import useAppContext from "../utils/hooks/useAppContext";
import { unavailable } from "../utils/contextAPI/helperFunctions";
import { format } from "date-fns";

const Artist = () => {
  const { organizer, classifyEvents } = useAppContext();

  return (
    <section
      id="artist"
<<<<<<< HEAD
      className="padding overflow-hidden py-36 w-full bg-black text-white"
=======
      className="padding overflow-hidden md:py-36 py-20 w-full bg-black text-white"
>>>>>>> justice-design-revamp
    >
      <div className="contain flex flex-col md:flex-row gap-10 justify-between">
        {/* Left Content Section */}
        <motion.div
          className="max-w-xl space-y-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div>
            <p className="text-gray-400 tracking-widest capitalize">
              {classifyEvents?.upcoming[0]?.organizer?.username || unavailable}
            </p>
            <h2 className="text-4xl font-anton uppercase font-bold md:text-6xl">
              {classifyEvents?.upcoming[0]?.event_title || unavailable}
            </h2>
          </div>
          <p className="text-gray-400">
<<<<<<< HEAD
            {classifyEvents?.upcoming[0]?.description || unavailable}
=======
            Sebastian Blaze is a rising star in the indie-pop scene, known for
            her ethereal vocals and captivating stage presence. His latest
            album, “Starlight Echoes,” has earned critical acclaim, and he is
            widely recognized for her ability to connect deeply with her
            audience.
>>>>>>> justice-design-revamp
          </p>
          <div className="space-y-5 text-gray-400">
            <div className="flex items-center gap-2">
              <span>
                <FaCalendar />
              </span>
<<<<<<< HEAD
              {classifyEvents?.upcoming[0]?.startDate ? (
                <span>
                  {format(
                    new Date(classifyEvents?.upcoming[0]?.startDate),
                    "EEEE, d MMMM"
                  )}
                </span>
              ) : (
                <span>Unknown</span>
              )}
=======
              <span>Saturday, 18 November</span>
>>>>>>> justice-design-revamp
            </div>
            <div className="flex items-center gap-2">
              <span>
                <FaClock />
              </span>
<<<<<<< HEAD

              {classifyEvents?.upcoming[0]?.startDate ? (
                <span>
                  {format(
                    new Date(classifyEvents?.upcoming[0]?.startDate),
                    "h a"
                  )}
                </span>
              ) : (
                <span>Unknown</span>
              )}
=======
              <span>7 PM</span>
>>>>>>> justice-design-revamp
            </div>
            <div className="flex items-center gap-2">
              <span>
                <FaLocationArrow />
              </span>
<<<<<<< HEAD
              <span>{classifyEvents?.upcoming[0]?.venue?.venue}</span>
=======
              <span>Bright Stadium, London</span>
>>>>>>> justice-design-revamp
            </div>
          </div>
          <div>
            <button className="duration-300 text-white hover:text-white bg-primary px-5 py-2 rounded-4xl">
              <Link href={"/"}>Get ticket</Link>
            </button>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-[350px] md:h-[500px] max-w-[350px] mx-auto md:max-w-[500px] relative"
        >
          <Image
            alt="artist image"
            fill
            src={classifyEvents?.upcoming[0]?.banner?.url || "/wizkid.webp"}
            className="absolute object-cover inset-0 rounded-xl"
          />
          {/* Overlay with Spotify details */}
          <div className="bg-white/50 absolute text-black md:-left-20 -left-5 md:bottom-10 bottom-0 flex gap-2 items-center md:py-6 py-3 md:px-8 px-5 rounded-lg z-40">
            <div>
              <FaSpotify className="md:text-5xl text-3xl text-primary" />
            </div>
            <div className="flex flex-col">
<<<<<<< HEAD
              <span>Streaming</span>
              <span>
                {organizer?.totalFollowers || 0}{" "}
                {Number(organizer?.totalFollowers) > 99
                  ? "Hundred"
                  : Number(organizer?.totalFollowers) > 999
                  ? "Thousand"
                  : Number(organizer?.totalFollowers) > 99999
                  ? "Million"
                  : Number(organizer?.totalFollowers) > 999999999
                  ? "Billion"
                  : ""}
                +
              </span>
=======
              <span>100+</span>
              <span>Attending</span>
>>>>>>> justice-design-revamp
            </div>
          </div>
          {/* Overlay with Hit count */}
          <div className="bg-white/50 absolute text-black md:-right-10 -right-5 md:top-10 top-0 flex gap-2 items-center md:py-6 py-3 md:px-8 px-5 rounded-lg z-40">
            <div className="flex flex-col text-center">
              <span className="text-gray-950 md:text-3xl text-xl font-bold">
<<<<<<< HEAD
                {organizer?.totalEventsCreated || 0}+
=======
                18th
>>>>>>> justice-design-revamp
              </span>
              <span className="uppercase">May</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Artist;
