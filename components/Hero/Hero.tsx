import React, { useState, useEffect } from "react";
import Performance from "./Performance";
import { Box } from "@mantine/core";
import Link from "next/link";
import VideoCard from "../VideoCard";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState("");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null); // Track playing video

  useEffect(() => {
    const handleResize = () => {
      setVideoSrc(
        window.innerWidth >= 1024 ? "/hero-desktop2.mp4" : "/hero-desktop1.mp4"
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePlay = (videoId: string) => {
    setPlayingVideo(videoId); // Set the current video to play
  };

  const handlePause = () => {
    setPlayingVideo(null); // Stop playing
  };

  return (
    <section className="relative z-10 h-full min-h-screen md:pt-44 pt-30 pb-10 md:mt-0">
      <div
        id="video-bg"
        className="absolute inset-0 -z-[2] w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url("/wizkid.webp")` }}
      >
        <video
          className="w-full h-full  object-cover"
          loop
          muted
          autoPlay
          playsInline
          src={videoSrc || undefined} // Ensure videoSrc is not an empty string
        />
      </div>
      <div className="absolute inset-0 bg-black/70 z-10 "></div>

      <div className="relative z-50 contain space-y-20 md:gap-0 px-5 mx-auto md:mt-10 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center w-full">
            <div className="flex flex-col justify-center gap-5 md:gap-10 sm:mr-0">
              <h1 className="font-anton uppercase text-[#F4F2F2] text-4xl font-bold md:text-7xl lg::text-8xl">
                WATAWI-MIAMI
              </h1>
              <h1 className="mt-[-26px] md:mt-[-40px] font-medium text-[#F4F2F2]">
                🌴 🌴 For The Culture 🌴 🌴
              </h1>

              <p className="md:max-w-[25rem] max-w-[20rem] text-[#f4f2f2c8] text-sm md:text-xl">
                The Energy Hits Different, Bringing all the Good vibes and
                sounds from the continent of Africa & Caribbean. Music by the
                hottest DJ's from EVERY culture Playing the best of #Afrobeat
                #Amapiano #Dancehall #Reggae #Soca #Kompa
              </p>
              <div className="mt-[50px]">
                <button
                  id="CTA"
                  className="px-5 py-2 bg-primary text-white rounded-3xl cursor-pointer duration-300 hover:text-white"
                >
                  <Link
                    className="inline-block w-full h-full"
                    href={"#tickets"}
                  >
                    Explore Events
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <Box className="font-anton w-full grid gap-4 grid-cols-1 md:grid-cols-4 justify-center ">
          <Performance
            count={10}
            title="Upcoming Events"
            images={[
              "https://p-static.ogaticket.com/user/13418887-ff3e-452b-9661-b02611fb9284.webp",
              "https://p-static.ogaticket.com/event/564b56b9-abdf-4c44-ad1f-764c59489cce.jpeg",
              "https://p-static.ogaticket.com/event/564b56b9-abdf-4c44-ad1f-764c59489cce.jpeg",
            ]}
          />
          <Performance
            count={200}
            title="Artist Performed"
            images={[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaA8j3JXCUJK6s0E139bWxzBDGcLkBaAaZBUycCpQo-9_9JZf99E2r7QQrTKS7qyNNmk&usqp=CAU",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaA8j3JXCUJK6s0E139bWxzBDGcLkBaAaZBUycCpQo-9_9JZf99E2r7QQrTKS7qyNNmk&usqp=CAU",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaA8j3JXCUJK6s0E139bWxzBDGcLkBaAaZBUycCpQo-9_9JZf99E2r7QQrTKS7qyNNmk&usqp=CAU",
            ]}
          />
          <Performance
            count={1350}
            title="Ticket Sold"
            images={["/ticket1.PNG", "/ticket2.PNG", "/ticket3.PNG"]}
          />
        </Box>
      </div>
    </section>
  );
};

export default Hero;
