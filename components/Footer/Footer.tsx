import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="padding text-white md:space-y-20 space-y-16"
    >
      <div className="grid  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div id="logo" className="space-y-5">
          <h1 className="text-3xl font-anton uppercase font-bold">
            <span className="text-primary">O</span>rganizer
          </h1>
          <p>
            Trusted platform for all things live music bringing you closer to
            the best concerts, artists, and unforgettable performances.
          </p>
        </div>

        <div className="flex md:justify-center max-md:gap-20 gap-10">
          <div className="space-y-5">
            <h2 className="font-bold uppercase font-anton">Quick Links</h2>
            <ul className="flex flex-col gap-2">
              {["Login"].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex md:justify-end">
          <div className="space-y-5 lg:col-span-1 md:col-span-2">
            <h2 className="text-3xl uppercase font-bold font-anton">Contact</h2>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              <span>info@ogaticket.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-primary" />
              <span>+123 456 7890</span>
            </div>
          </div>
        </div>
        <div className="flex md:justify-end">
          <div className="space-y-5 lg:col-span-1 md:col-span-2">
            <h2 className="font-bold uppercase font-anton">Powered by:</h2>
            <div>
              <Image
                src={"/logo.crop.png"}
                width={100}
                height={100}
                alt="ogaticket logo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between max-md:flex-col gap-10 items-center rounded-2xl py-8 px-4 bg-gray-400/20">
        <small>© 2025 powered by ogaticket</small>
        <div className="flex gap-2">
          <span className="p-3 rounded-full bg-gray-400/80">
            <a href="">
              <FaInstagram className="text-black" />
            </a>
          </span>
          <span className="p-3 rounded-full bg-gray-400/80">
            <a href="">
              <FaTwitter className="text-black" />
            </a>
          </span>
          <span className="p-3 rounded-full bg-gray-400/80">
            <a href="">
              <FaFacebook className="text-black" />
            </a>
          </span>
          <span className="p-3 rounded-full bg-gray-400/80">
            <a href="">
              <FaSpotify className="text-black" />
            </a>
          </span>
          <span className="p-3 rounded-full bg-gray-400/80">
            <a href="">
              <FaYoutube className="text-black" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
