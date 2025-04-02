import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSpotify } from "react-icons/fa";
const Artist = () => {
  return (
    <section className="padding w-full bg-black text-white">
      <div className="contain flex flex-col md:flex-row gap-10 justify-between">
      <div className="max-w-xl space-y-14">
        <div className="space-y-2">
          <p className="text-gray-400 tracking-widest">Wizkid</p>
          <h2 className="text-4xl font-anton uppercase font-bold md:text-6xl">
            This Month’s Must-See Live Performance
          </h2>
        </div>
        <p className="text-gray-400">
          Sebastian Blaze is a rising star in the indie-pop scene, known for her
          ethereal vocals and captivating stage presence. His latest album,
          “Starlight Echoes,” has earned critical acclaim, and he is widely
          recognized for her ability to connect deeply with her audience.
        </p>
        <div>
          <button className="bg-primary px-5 py-2 rounded-4xl text-white">
            <Link href={"/"}>Get ticket</Link>
          </button>
        </div>
      </div>

      <div className="w-full h-[500px] md:h-[600px] max-w-[500px] md:max-w-[500px] relative overflow-visible">
      <Image
          alt="artist image"
          fill
          src={"/wizkid.webp"}
          className="absolute object-cover inset-0 rounded-xl"
        />

        <div className="bg-white/50 absolute text-black md:-left-20 -left-5 md:bottom-30 bottom-0 flex gap-2 items-center md:py-6 py-3 md:px-8 px-5 rounded-lg z-40">
          <div>
            <FaSpotify className="md:text-5xl text-3xl text-primary" />
          </div>
          <div className="flex flex-col">
            <span>Streaming</span>
            <span>1 Billion+</span>
          </div>
        </div>
        <div className="bg-white/50 absolute text-black md:-right-10 -right-5 md:top-28 top-0 flex gap-2 items-center md:py-6 py-3 md:px-8 px-5 rounded-lg z-40">
          <div className="flex flex-col text-center">
            <span className="text-gray-950 md:text-3xl text-xl font-bold">
              500+
            </span>
            <span className="uppercase">Hits</span>
          </div>
        </div>
      </div>
      
      </div>
    </section>
  );
};

export default Artist;
