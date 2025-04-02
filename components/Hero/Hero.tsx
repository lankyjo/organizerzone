"use client";
import { useEffect, useState } from "react";
import Performance from "./Performance";
import { Box, Image } from "@mantine/core";
import PlayBtn from "../PlayBtn";
import Link from "next/link";
// import ReactPlayer from "react-player";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState("");
  useEffect(() => {
    const handleResize = () => {
      setVideoSrc(window.innerWidth >= 1024 ? "/hero-desktop1.mp4" : "/placeholder1.mp4");
    };
  
    handleResize();
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!videoSrc) return null;

  return (
    <section className="relative z-10 h-full min-h-screen pt-44 pb-10 md:mt-0">
        <div
          id="video-bg"
          className="absolute inset-0 -z-[2] w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url("/wizkid.webp")` }}
        >
        <video
          className="w-full h-full object-cover"
          loop
          muted
          autoPlay
          playsInline
          src={videoSrc}
        />
      </div>
      <div className="absolute inset-0 bg-black/80 z-10"></div>

      <div className="relative z-50 contain space-y-20 md:gap-0 px-5 mx-auto">
        <div className="  grid  grid-cols-1 md:grid-cols-2 ">
          <div className="  flex flex-col justify-center w-full">
            <div className="flex flex-col justify-center gap-5 sm:mr-0">
              <h1 className="font-anton uppercase text-white text-4xl font-bold md:text-6xl">
                where music <br /> comes alive
              </h1>
              <p className=" max-w-[21rem]">
                Stay updated on the latest events, explore artist lineups, and
                immerse yourself in the magic of live music, where every beat
                and melody brings the stage to life.
              </p>
              <div className="">
                <button
                  id="CTA"
                  className="px-5 py-2 bg-primary text-white rounded-3xl cursor-pointer duration-300 hover:text-white"
                >
                  <Link className="block" href={'#tickets'}>Explore Concert</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Box className="font-anton w-full grid gap-6 grid-cols-1 md:grid-cols-4 justify-center">
        <Performance
            count={150}
            title="Upcoming Concert"
            images={[
              "https://p-static.ogaticket.com/user/13418887-ff3e-452b-9661-b02611fb9284.webp",
              "https://p-static.ogaticket.com/event/564b56b9-abdf-4c44-ad1f-764c59489cce.jpeg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaA8j3JXCUJK6s0E139bWxzBDGcLkBaAaZBUycCpQo-9_9JZf99E2r7QQrTKS7qyNNmk&usqp=CAU",
            ]}
          />
          <Performance
            count={150}
            title="Artist Performed"
            images={[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaA8j3JXCUJK6s0E139bWxzBDGcLkBaAaZBUycCpQo-9_9JZf99E2r7QQrTKS7qyNNmk&usqp=CAU",
              "data:image/jpeg;base64,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",
              "data:image/jpeg;base64,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",
            ]}
          />
          <Performance
            count={1000}
            title="Ticket Sold"
            images={["/ticket1.PNG", "/ticket2.PNG", "/ticket3.PNG"]}
          />

          <Box className="relative">
            <Image
              alt="circ-image"
              radius="md"
              className="object-cover object-center rounded-md h-[400px] md:h-[200px]"
              src={'/wizkid.webp'}
            />
            <PlayBtn/>
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default Hero;
