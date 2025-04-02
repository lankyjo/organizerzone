import Image from "next/image";
import Link from "next/link";
import {
  FaCalendar,
  FaClock,
  FaLocationArrow,
  FaSpotify,
} from "react-icons/fa";
import { motion } from "framer-motion";

// const containerVariant = {
//   hidden: {
//     scale: 0,
//   },
//   visible: {
//     scale: 1.02,
//     transition: {
//       type: "spring",
//       duration: 2,
//     },
//   },
// };

const Artist = () => {
  return (
    <section
      id="artist"
      className="padding overflow-hidden md:py-36 py-20 w-full bg-black text-white"
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
            <p className="text-gray-400 tracking-widest">Wizkid</p>
            <h2 className="text-4xl font-anton uppercase font-bold md:text-6xl">
              This Month’s Must-See Live Performance
            </h2>
          </div>
          <p className="text-gray-400">
            Sebastian Blaze is a rising star in the indie-pop scene, known for
            her ethereal vocals and captivating stage presence. His latest
            album, “Starlight Echoes,” has earned critical acclaim, and he is
            widely recognized for her ability to connect deeply with her
            audience.
          </p>
          <div className="space-y-5 text-gray-400">
            <div className="flex items-center gap-2">
              <span>
                <FaCalendar />
              </span>
              <span>Saturday, 18 November</span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <FaClock />
              </span>
              <span>7 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <FaLocationArrow />
              </span>
              <span>Bright Stadium, London</span>
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
            src="/wizkid.webp"
            className="absolute object-cover inset-0 rounded-xl"
          />
          {/* Overlay with Spotify details */}
          <div className="bg-white/50 absolute text-black md:-left-20 -left-5 md:bottom-10 bottom-0 flex gap-2 items-center md:py-6 py-3 md:px-8 px-5 rounded-lg z-40">
            <div>
              <FaSpotify className="md:text-5xl text-3xl text-primary" />
            </div>
            <div className="flex flex-col">
              <span>100+</span>
              <span>Attending</span>
            </div>
          </div>
          {/* Overlay with Hit count */}
          <div className="bg-white/50 absolute text-black md:-right-10 -right-5 md:top-10 top-0 flex gap-2 items-center md:py-6 py-3 md:px-8 px-5 rounded-lg z-40">
            <div className="flex flex-col text-center">
              <span className="text-gray-950 md:text-3xl text-xl font-bold">
                18th
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
