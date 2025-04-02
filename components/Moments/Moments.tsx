import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import PlayBtn from '../PlayBtn';

const Moments = () => {
  // Define the event data array with video URLs
  const eventVideos = [
    { id: 'event1', videoUrl: 'https://www.youtube.com/embed/zm96T-_2edI' },
    { id: 'event2', videoUrl: 'https://www.youtube.com/embed/yrydpvp7eOo' },
    { id: 'event3', videoUrl: 'https://www.youtube.com/embed/yO6DYZLzwC8' },
  ];

  // State to track which video is playing
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section
      className="padding py-36 text-white"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/countdownbg.jpg)`,
      }}
    >
      <div className="contain grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="space-y-5">
          <h2 className="text-3xl font-anton font-bold">
            Live the Moment Again and Again
          </h2>
          <p>
            Missed the show? Or simply want to experience it all over again? Dive into our exclusive collection of concert videos.
          </p>
        </div>

        {/* Map through event data and render VideoCard for each */}
        {eventVideos.map((event) => (
          <VideoCard
            key={event.id}
            video={event}
            isPlaying={playingVideo === event.id}
            onPlay={() => setPlayingVideo(event.id)} // Set the currently playing video
            // onPause={() => setPlayingVideo(null)} // Pause the video
            playingVideo={playingVideo}
            setPlayingVideo={setPlayingVideo}
          />
        ))}
      </div>
    </section>
  );
};

export default Moments;

type VideoProps = {
  video: { id: string; videoUrl: string };
  isPlaying: boolean;
  onPlay: () => void;
  // onPause: () => void;
  playingVideo: string | null;
  setPlayingVideo: React.Dispatch<React.SetStateAction<string | null>>;
};

// VideoCard component that shows the image and plays the video when clicked
const VideoCard: React.FC<VideoProps> = ({ video, isPlaying, onPlay, /*onPause, playingVideo*/ setPlayingVideo }) => {
  const videoRef = useRef<HTMLDivElement | null>(null);

  // Click outside handler to reset the video
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (videoRef.current && !videoRef.current.contains(event.target as Node)) {
        setPlayingVideo(null); // Reset the playing video
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setPlayingVideo]);

  return (
    <div
      ref={videoRef}
      className="relative text-white p-4 overflow-hidden lg:aspect-video aspect-square rounded-3xl"
    >
      {!isPlaying ? (
        <>
          <p className="z-20 relative capitalize">{video.id}</p>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
            <PlayBtn onClick={onPlay} />
          </div>
          {/* Display a thumbnail or placeholder image */}
          <Image
            src={'/wizkid.webp'} // Replace with appropriate image for each event
            alt="Video thumbnail"
            layout="fill" // Use layout fill to make the image cover the container
            className="w-full h-full absolute object-cover"
          />
        </>
      ) : (
        <iframe
          className="w-full h-full rounded-3xl"
          src={`${video.videoUrl}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};
